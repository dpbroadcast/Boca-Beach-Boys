import { battingStats, pitchingStats, teamRecord, teamStatsUpdated } from '../data/teamStats'

const ISCORE_STATS = 'https://pro.iscorecentral.com/SFCBL/stats'

// Qualifying thresholds for rate-stat leaders
const MIN_PA = 20      // for AVG / OPS
const MIN_OUTS = 12    // 4.0 IP for ERA / WHIP

function fmtDate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  })
}

// Return the leader(s) — sorted top N by a numeric accessor, optional qualifier
function topBy(rows, accessor, { desc = true, qualify } = {}, n = 1) {
  const pool = qualify ? rows.filter(qualify) : rows
  const sorted = [...pool].sort((a, b) => (desc ? accessor(b) - accessor(a) : accessor(a) - accessor(b)))
  return sorted.slice(0, n)
}

export default function Stats() {
  const battingLeaders = [
    { label: 'Batting Average', ...leader(topBy(battingStats, r => parseFloat(r.avg), { qualify: r => r.pa >= MIN_PA })[0], r => r.avg) },
    { label: 'Home Runs', ...leader(topBy(battingStats, r => r.hr)[0], r => r.hr) },
    { label: 'RBI', ...leader(topBy(battingStats, r => r.rbi)[0], r => r.rbi) },
    { label: 'Hits', ...leader(topBy(battingStats, r => r.h)[0], r => r.h) },
    { label: 'Runs', ...leader(topBy(battingStats, r => r.r)[0], r => r.r) },
    { label: 'OPS', ...leader(topBy(battingStats, r => parseFloat(r.ops), { qualify: r => r.pa >= MIN_PA })[0], r => r.ops) },
  ]

  const pitchingLeaders = [
    { label: 'ERA', ...leader(topBy(pitchingStats, r => parseFloat(r.era), { desc: false, qualify: r => r.outs >= MIN_OUTS })[0], r => r.era) },
    { label: 'Strikeouts', ...leader(topBy(pitchingStats, r => r.so)[0], r => r.so) },
    { label: 'Wins', ...leader(topBy(pitchingStats, r => r.w)[0], r => r.w) },
    { label: 'WHIP', ...leader(topBy(pitchingStats, r => parseFloat(r.whip), { desc: false, qualify: r => r.outs >= MIN_OUTS })[0], r => r.whip) },
  ]

  // Tables sorted: batting by AVG desc, pitching by ERA asc (qualified first)
  const battingSorted = [...battingStats].sort((a, b) => parseFloat(b.avg) - parseFloat(a.avg))
  const pitchingSorted = [...pitchingStats].sort((a, b) => parseFloat(a.era) - parseFloat(b.era))

  return (
    <div className="page-enter pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">
            Boca Beach Boys · {teamRecord.w}-{teamRecord.l} ({teamRecord.pct})
          </div>
          <h1 className="font-bebas text-5xl md:text-6xl tracking-widest text-white">Team Stats</h1>
          <div className="glow-line mt-4" />
          <p className="text-gray-500 text-xs mt-3">
            Updated {fmtDate(teamStatsUpdated)} · Source:{' '}
            <a href={ISCORE_STATS} target="_blank" rel="noopener noreferrer" className="text-[#00C4E0] hover:underline">
              iScore
            </a>
          </p>
        </div>

        {/* Batting leaders */}
        <h2 className="font-bebas text-3xl tracking-widest text-white mb-4">Batting Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {battingLeaders.map((l) => (
            <LeaderCard key={l.label} {...l} />
          ))}
        </div>

        {/* Pitching leaders */}
        <h2 className="font-bebas text-3xl tracking-widest text-white mb-4">Pitching Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {pitchingLeaders.map((l) => (
            <LeaderCard key={l.label} {...l} accent="cyan" />
          ))}
        </div>

        {/* Full batting table */}
        <h2 className="font-bebas text-3xl tracking-widest text-white mb-4">Batting</h2>
        <div className="overflow-x-auto bg-brand-bg-card border border-white/5 rounded-sm mb-12">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="text-[10px] font-outfit font-bold uppercase tracking-widest text-gray-500 border-b border-white/10">
                {['Player', 'AB', 'R', 'H', '2B', '3B', 'HR', 'RBI', 'BB', 'SO', 'AVG', 'OBP', 'SLG', 'OPS'].map((h, i) => (
                  <th key={h} className={`py-3 px-2 ${i === 0 ? 'text-left pl-4' : 'text-center'}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {battingSorted.map((p, i) => (
                <tr key={p.name} className={`border-b border-white/5 last:border-0 ${i % 2 ? 'bg-white/[0.015]' : ''}`}>
                  <td className="py-2.5 px-2 pl-4 text-left font-outfit font-semibold text-white whitespace-nowrap">{p.name}</td>
                  <Num>{p.ab}</Num><Num>{p.r}</Num><Num>{p.h}</Num><Num>{p.double}</Num><Num>{p.triple}</Num>
                  <Num bold={p.hr > 0}>{p.hr}</Num><Num bold={p.rbi > 0}>{p.rbi}</Num><Num>{p.bb}</Num><Num>{p.so}</Num>
                  <td className="text-center py-2.5 px-2 text-white font-semibold">{p.avg}</td>
                  <Num>{p.obp}</Num><Num>{p.slg}</Num>
                  <td className="text-center py-2.5 px-2 text-gray-300">{p.ops}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Full pitching table */}
        <h2 className="font-bebas text-3xl tracking-widest text-white mb-4">Pitching</h2>
        <div className="overflow-x-auto bg-brand-bg-card border border-white/5 rounded-sm mb-8">
          <table className="w-full text-sm min-w-[680px]">
            <thead>
              <tr className="text-[10px] font-outfit font-bold uppercase tracking-widest text-gray-500 border-b border-white/10">
                {['Player', 'W', 'L', 'SV', 'ERA', 'IP', 'H/BF', 'BB', 'SO', 'WHIP'].map((h, i) => (
                  <th key={h} className={`py-3 px-2 ${i === 0 ? 'text-left pl-4' : 'text-center'}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pitchingSorted.map((p, i) => (
                <tr key={p.name} className={`border-b border-white/5 last:border-0 ${i % 2 ? 'bg-white/[0.015]' : ''}`}>
                  <td className="py-2.5 px-2 pl-4 text-left font-outfit font-semibold text-white whitespace-nowrap">{p.name}</td>
                  <Num bold={p.w > 0}>{p.w}</Num><Num>{p.l}</Num><Num bold={p.sv > 0}>{p.sv}</Num>
                  <td className="text-center py-2.5 px-2 text-white font-semibold">{p.era}</td>
                  <Num>{p.ip}</Num><Num>{p.bf}</Num><Num>{p.bb}</Num><Num bold={p.so > 0}>{p.so}</Num>
                  <td className="text-center py-2.5 px-2 text-gray-300">{p.whip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 text-xs">
          ERA & WHIP leaders among pitchers with at least 4.0 IP. AVG & OPS leaders among hitters with at least {MIN_PA} plate appearances.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/standings" className="btn-primary text-sm">League Standings →</a>
          <a href={ISCORE_STATS} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
            Full League Stats on iScore →
          </a>
        </div>
      </div>
    </div>
  )
}

// Build a leader card payload from a winning row + value accessor
function leader(row, valueOf) {
  if (!row) return { name: '—', value: '—' }
  return { name: row.name, value: valueOf(row) }
}

function LeaderCard({ label, name, value, accent }) {
  const color = accent === 'cyan' ? 'text-[#00C4E0]' : 'text-brand-gold'
  return (
    <div className="bg-brand-bg-card border border-white/5 rounded-sm p-4 flex flex-col">
      <div className="font-outfit text-[10px] uppercase tracking-widest text-gray-500 mb-1">{label}</div>
      <div className={`font-bebas text-4xl tracking-wider ${color} leading-none`}>{value}</div>
      <div className="font-outfit text-sm text-white mt-1.5 truncate">{name}</div>
    </div>
  )
}

function Num({ children, bold }) {
  return (
    <td className={`text-center py-2.5 px-2 ${bold ? 'text-white font-semibold' : 'text-gray-400'}`}>{children}</td>
  )
}
