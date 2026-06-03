import { useState, useMemo } from 'react'
import { roster, POSITION_GROUPS } from '../data/roster'

export default function Roster() {
  const [query, setQuery] = useState('')
  const [activeGroup, setActiveGroup] = useState('All')
  const [expandedId, setExpandedId] = useState(null)

  const groups = ['All', ...POSITION_GROUPS]

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return roster.filter((p) => {
      const matchesGroup = activeGroup === 'All' || p.group === activeGroup
      if (!matchesGroup) return false
      if (!q) return true
      return (
        p.name.toLowerCase().includes(q) ||
        p.number.includes(q) ||
        (p.town || '').toLowerCase().includes(q) ||
        p.school.toLowerCase().includes(q) ||
        p.pos.toLowerCase().includes(q) ||
        p.group.toLowerCase().includes(q)
      )
    })
  }, [query, activeGroup])

  const grouped = useMemo(() => {
    const map = new Map()
    POSITION_GROUPS.forEach((g) => {
      const players = filtered.filter((p) => p.group === g)
      if (players.length) map.set(g, players)
    })
    return map
  }, [filtered])

  const toggle = (id) => setExpandedId((prev) => (prev === id ? null : id))

  return (
    <div className="page-enter pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">
            2026 Season · {roster.length} Players
          </div>
          <h1 className="font-bebas text-5xl md:text-6xl tracking-widest text-white">Roster</h1>
          <p className="text-gray-500 text-sm mt-2">
            Click any player to view their bio and background.
          </p>
          <div className="glow-line mt-4" />
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search by name, number, school, hometown, position…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-brand-bg-card border border-white/5 text-white placeholder-gray-600 pl-10 pr-4 py-3 text-sm rounded-sm focus:outline-none focus:border-brand-gold/60 transition-colors"
          />
        </div>

        {/* Position filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGroup(g)}
              className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                activeGroup === g
                  ? 'bg-brand-gold text-[#0A1628]'
                  : 'bg-brand-bg-card border border-white/5 text-gray-400 hover:border-brand-gold/40 hover:text-white'
              }`}
            >
              {g === 'Pitchers — RHP' ? 'RHP' : g === 'Pitchers — LHP' ? 'LHP' : g === 'Utility / Multi' ? 'Utility' : g}
            </button>
          ))}
        </div>

        {/* Player list */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-600">
            <div className="font-bebas text-3xl tracking-widest mb-2">No Players Found</div>
            <p className="text-sm">Try a different search or filter.</p>
          </div>
        ) : (
          [...grouped.entries()].map(([group, players]) => (
            <div key={group} className="mb-8">
              <div className="flex items-center gap-4 mb-3">
                <h2 className="font-bebas text-xl tracking-widest text-brand-gold">{group}</h2>
                <div className="flex-1 h-px bg-[#1A2D5A]" />
                <span className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                  {players.length}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                {players.map((player) => (
                  <PlayerRow
                    key={player.name}
                    player={player}
                    isOpen={expandedId === player.name}
                    onToggle={() => toggle(player.name)}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

function PlayerRow({ player, isOpen, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-sm border transition-all duration-200 group ${
          isOpen
            ? 'bg-[#161F30] border-brand-gold/50'
            : 'bg-brand-bg-card border-white/5 hover:border-brand-gold/30 hover:bg-[#141D2E]'
        }`}
      >
        {/* Jersey number */}
        <div className="w-10 h-10 flex-shrink-0 bg-brand-bg border border-white/5 rounded-sm flex items-center justify-center">
          <span className="font-bebas text-lg text-brand-gold leading-none">{player.number}</span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`font-semibold text-sm ${isOpen ? 'text-white' : 'text-white group-hover:text-brand-gold'} transition-colors`}>
              {player.name}
            </span>
            {player.roy && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-brand-gold/20 text-brand-gold border border-brand-gold/30 uppercase tracking-wider">
                ★ ROY \'25
              </span>
            )}
            {player.seasons >= 3 && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#00C4E0]/10 text-[#00C4E0] border border-[#00C4E0]/20 uppercase tracking-wider">
                3rd yr
              </span>
            )}
            {player.seasons === 2 && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#00C4E0]/10 text-[#00C4E0] border border-[#00C4E0]/20 uppercase tracking-wider">
                2nd yr
              </span>
            )}
            {player.portal && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider">
                Portal
              </span>
            )}
          </div>
          <div className="text-xs text-gray-500 mt-0.5 truncate">
            {player.pos} · {player.town || '—'} · {player.school.split('—')[0].split('(')[0].trim()}
          </div>
        </div>

        {/* Chevron */}
        <svg
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90 text-brand-gold' : 'text-gray-600'}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Expanded detail */}
      {isOpen && <PlayerDetail player={player} />}
    </div>
  )
}

function PlayerDetail({ player }) {
  return (
    <div className="border border-brand-gold/30 border-t-0 rounded-b-sm bg-[#0D1525] p-5 animate-fade-in">
      {/* Header row */}
      <div className="flex items-start gap-4 mb-5 pb-4 border-b border-white/5">
        <div className="w-14 h-14 flex-shrink-0 bg-brand-bg-card border border-brand-gold/30 rounded-sm flex items-center justify-center">
          <span className="font-bebas text-2xl text-brand-gold">{player.number}</span>
        </div>
        <div>
          <div className="font-bebas text-2xl tracking-widest text-white">{player.name}</div>
          <div className="font-outfit text-gray-500 text-xs mt-1">{player.pos}</div>
        </div>
      </div>

      {/* Bio grid — public info only */}
      <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
        <InfoCell label="Hometown" value={player.town || '—'} />
        <InfoCell label="College" value={player.school.split('(')[0].trim()} />
        <InfoCell label="Year" value={player.year || '—'} />
        <InfoCell label="College History" value={player.hist} />
        <InfoCell
          label="Transfer Portal"
          value={player.portal ? 'Yes' : 'No'}
          color={player.portal ? 'text-orange-400' : 'text-green-400'}
        />
        <InfoCell
          label="Beach Boys Seasons"
          value={`${player.seasons === 1 ? '1st' : player.seasons === 2 ? '2nd' : '3rd'}${player.roy ? ' · ★ 2025 ROY' : ''}`}
        />
      </div>

      {/* Background */}
      {player.bg && (
        <div className="mb-4">
          <SectionTitle>Background</SectionTitle>
          <p className="font-outfit text-gray-400 text-xs leading-relaxed">{player.bg}</p>
        </div>
      )}

      {/* Fun fact */}
      {player.funFact && (
        <div className="bg-brand-bg-card border border-white/5 rounded-sm px-4 py-3">
          <div className="font-outfit text-xs font-bold uppercase tracking-widest text-[#00C4E0] mb-1">
            Fun Fact
          </div>
          <p className="font-outfit text-gray-300 text-xs">{player.funFact}</p>
        </div>
      )}
    </div>
  )
}

function InfoCell({ label, value, color }) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-0.5">{label}</div>
      <div className={`text-xs leading-relaxed ${color || 'text-gray-300'}`}>{value}</div>
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-2">{children}</h4>
  )
}

function SearchIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
    </svg>
  )
}
