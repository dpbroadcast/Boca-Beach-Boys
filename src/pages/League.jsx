import { standings, standingsUpdated } from '../data/standings'

const ISCORE_STANDINGS = 'https://pro.iscorecentral.com/SFCBL/standings'

function fmtDate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  })
}

export default function League() {
  return (
    <div className="page-enter pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="text-[#00C4E0] text-xs font-bold uppercase tracking-widest mb-2">SFCBL 2026</div>
          <h1 className="font-bebas text-5xl md:text-6xl tracking-widest text-white">League Standings</h1>
          <div className="glow-line mt-4" />
          <p className="text-gray-500 text-xs mt-3">
            Updated {fmtDate(standingsUpdated)} · Source:{' '}
            <a href={ISCORE_STANDINGS} target="_blank" rel="noopener noreferrer" className="text-[#00C4E0] hover:underline">
              iScore
            </a>
          </p>
        </div>

        {/* Divisions */}
        <div className="space-y-10">
          <DivisionTable name="North Division" rows={standings.North} />
          <DivisionTable name="South Division" rows={standings.South} />
        </div>

        {/* Footer note */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={ISCORE_STANDINGS} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            Full Standings on iScore →
          </a>
          <a href="/stats" className="btn-outline text-sm">
            Beach Boys Team Stats →
          </a>
        </div>
      </div>
    </div>
  )
}

function DivisionTable({ name, rows }) {
  return (
    <section>
      <h2 className="font-bebas text-2xl tracking-widest text-white mb-3">{name}</h2>
      <div className="overflow-x-auto bg-brand-bg-card border border-white/5 rounded-sm">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr className="text-[10px] font-outfit font-bold uppercase tracking-widest text-gray-500 border-b border-white/10">
              <th className="text-left py-3 px-4">Team</th>
              <th className="text-center py-3 px-2">W</th>
              <th className="text-center py-3 px-2">L</th>
              <th className="text-center py-3 px-2">PCT</th>
              <th className="text-center py-3 px-2">GB</th>
              <th className="text-center py-3 px-2 hidden sm:table-cell">Home</th>
              <th className="text-center py-3 px-2 hidden sm:table-cell">Road</th>
              <th className="text-center py-3 px-2 hidden md:table-cell">L10</th>
              <th className="text-center py-3 px-2">Strk</th>
              <th className="text-center py-3 px-2 hidden md:table-cell">RS</th>
              <th className="text-center py-3 px-2 hidden md:table-cell">RA</th>
              <th className="text-center py-3 px-2">Diff</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((t, i) => {
              const streakWin = t.strk.startsWith('W')
              return (
                <tr
                  key={t.abbr}
                  className={`border-b border-white/5 last:border-0 ${
                    t.bb ? 'bg-brand-gold/10' : i % 2 ? 'bg-white/[0.015]' : ''
                  }`}
                >
                  <td className="py-2.5 px-4 whitespace-nowrap">
                    <span className="text-gray-600 text-xs mr-2">{i + 1}</span>
                    <span className={`font-outfit font-semibold ${t.bb ? 'text-brand-gold' : 'text-white'}`}>
                      {t.team}
                    </span>
                  </td>
                  <td className="text-center py-2.5 px-2 text-white font-semibold">{t.w}</td>
                  <td className="text-center py-2.5 px-2 text-gray-300">{t.l}</td>
                  <td className="text-center py-2.5 px-2 text-gray-300">{t.pct}</td>
                  <td className="text-center py-2.5 px-2 text-gray-400">{t.gb}</td>
                  <td className="text-center py-2.5 px-2 text-gray-400 hidden sm:table-cell">{t.home}</td>
                  <td className="text-center py-2.5 px-2 text-gray-400 hidden sm:table-cell">{t.road}</td>
                  <td className="text-center py-2.5 px-2 text-gray-400 hidden md:table-cell">{t.l10}</td>
                  <td className={`text-center py-2.5 px-2 font-semibold ${streakWin ? 'text-green-400' : 'text-red-400'}`}>
                    {t.strk}
                  </td>
                  <td className="text-center py-2.5 px-2 text-gray-400 hidden md:table-cell">{t.rs}</td>
                  <td className="text-center py-2.5 px-2 text-gray-400 hidden md:table-cell">{t.ra}</td>
                  <td className={`text-center py-2.5 px-2 font-semibold ${t.diff > 0 ? 'text-green-400' : t.diff < 0 ? 'text-red-400' : 'text-gray-400'}`}>
                    {t.diff > 0 ? `+${t.diff}` : t.diff}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
