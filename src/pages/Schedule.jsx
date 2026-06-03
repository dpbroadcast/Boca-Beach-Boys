import { useState, useMemo } from 'react'
import { games } from '../data/games'
import GameModal from '../components/GameModal'
import { getTeamLogo } from '../data/teamLogos'

export default function Schedule() {
  const [selectedGame, setSelectedGame] = useState(null)
  const [filter, setFilter] = useState('all') // 'all' | 'home' | 'away' | 'broadcasting'

  const filtered = useMemo(() => {
    return games.filter((g) => {
      if (filter === 'home') return g.isHome
      if (filter === 'away') return !g.isHome
      if (filter === 'pxp') return g.broadcasterRole === 'PXP'
      if (filter === 'color') return g.broadcasterRole === 'Color'
      return true
    })
  }, [filter])

  // Group by month
  const grouped = useMemo(() => {
    const map = new Map()
    filtered.forEach((g) => {
      const [y, m] = g.date.split('-')
      const key = `${y}-${m}`
      if (!map.has(key)) map.set(key, [])
      map.get(key).push(g)
    })
    return map
  }, [filtered])

  const stats = useMemo(() => {
    const completed = games.filter((g) => g.status === 'completed')
    const wins = completed.filter((g) => g.result?.startsWith('W')).length
    const losses = completed.filter((g) => g.result?.startsWith('L')).length
    const winPct = completed.length > 0 ? (wins / completed.length) : null
    const streak = (() => {
      const done = [...games].filter((g) => g.status === 'completed').reverse()
      if (!done.length) return null
      const type = done[0].result?.startsWith('W') ? 'W' : 'L'
      let count = 0
      for (const g of done) {
        if ((g.result?.startsWith('W') ? 'W' : 'L') === type) count++
        else break
      }
      return { type, count }
    })()
    return { played: completed.length, wins, losses, total: games.length, winPct, streak }
  }, [])

  return (
    <div className="page-enter pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="text-[#00C4E0] text-xs font-bold uppercase tracking-widest mb-2">2026 Season · 40 Games</div>
          <h1 className="font-bebas text-5xl md:text-6xl tracking-widest text-white">Schedule</h1>
          <div className="glow-line mt-4" />
        </div>

        {/* Season Record */}
        <div className="mb-10 relative overflow-hidden rounded-sm">
          {/* Glowing background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1E3A] to-[#0A1628]" />
          <div className="absolute inset-0 opacity-30"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,196,224,0.18) 0%, transparent 70%)' }} />
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, transparent, #00C4E0 30%, #B4975A 70%, transparent)' }} />

          <div className="relative px-6 py-7 flex flex-col sm:flex-row items-center gap-6 sm:gap-0">
            {/* W-L record — center stage */}
            <div className="flex-1 flex flex-col items-center sm:items-start">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00C4E0]/60 mb-1">2026 Season Record</div>
              <div className="flex items-baseline gap-1 leading-none">
                <span className="font-bebas tracking-widest text-green-400"
                  style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)', textShadow: '0 0 40px rgba(74,222,128,0.5)' }}>
                  {stats.wins}
                </span>
                <span className="font-bebas text-4xl text-white/20 mx-1">—</span>
                <span className="font-bebas tracking-widest text-red-400"
                  style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)', textShadow: '0 0 40px rgba(248,113,113,0.5)' }}>
                  {stats.losses}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-400/70">Wins</span>
                <span className="w-8 h-px bg-white/10" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-400/70">Losses</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px self-stretch bg-white/5 mx-6" />

            {/* Right stats */}
            <div className="flex sm:flex-col gap-6 sm:gap-4 items-center sm:items-end">
              {/* Win % */}
              <div className="text-center sm:text-right">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-0.5">Win %</div>
                <div className="font-bebas text-2xl tracking-widest"
                  style={{ color: '#B4975A', textShadow: '0 0 20px rgba(180,151,90,0.4)' }}>
                  {stats.winPct !== null ? (stats.winPct * 1000 | 0) / 10 + '%' : '—'}
                </div>
              </div>
              {/* Games played */}
              <div className="text-center sm:text-right">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-0.5">Games</div>
                <div className="font-bebas text-2xl tracking-widest text-[#00C4E0]">
                  {stats.played}<span className="text-gray-600">/{stats.total}</span>
                </div>
              </div>
              {/* Streak */}
              {stats.streak && (
                <div className="text-center sm:text-right">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-0.5">Streak</div>
                  <div className={`font-bebas text-2xl tracking-widest ${stats.streak.type === 'W' ? 'text-green-400' : 'text-red-400'}`}
                    style={{ textShadow: stats.streak.type === 'W' ? '0 0 16px rgba(74,222,128,0.5)' : '0 0 16px rgba(248,113,113,0.5)' }}>
                    {stats.streak.type}{stats.streak.count}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { key: 'all', label: 'All Games' },
            { key: 'home', label: 'Home' },
            { key: 'away', label: 'Away' },
            { key: 'pxp', label: 'Broadcasting' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                filter === key
                  ? 'bg-[#00C4E0] text-[#0A1628]'
                  : 'bg-brand-bg-card border border-white/5 text-gray-400 hover:border-[#00C4E0]/40 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Game list by month */}
        {[...grouped.entries()].map(([monthKey, monthGames]) => (
          <div key={monthKey} className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="font-bebas text-2xl tracking-widest text-[#00C4E0]">
                {monthLabel(monthKey)}
              </h2>
              <div className="flex-1 h-px bg-[#1A2D5A]" />
              <span className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                {monthGames.length} games
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {monthGames.map((game) => (
                <GameRow key={game.id} game={game} onClick={() => setSelectedGame(game)} />
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-600">
            <div className="font-bebas text-3xl tracking-widest mb-2">No Games Found</div>
            <p className="text-sm">Try a different filter.</p>
          </div>
        )}
      </div>

      {selectedGame && (
        <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}
    </div>
  )
}

function GameRow({ game, onClick }) {
  const isOff = game.broadcasterRole === 'OFF'
  const isLive = game.status === 'live'
  const isCompleted = game.status === 'completed'
  const isPostponed = game.status === 'postponed'
  const isWin = game.result?.startsWith('W')
  const isLoss = game.result?.startsWith('L')

  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-sm border transition-all duration-200 group ${
        isOff
          ? 'bg-[#0D1420] border-[#151E2D] opacity-60 hover:opacity-80'
          : isLive
          ? 'bg-[#1A0A0A] border-red-900/40 hover:border-red-500/40'
          : isPostponed
          ? 'bg-[#1A1000] border-orange-900/30 opacity-75 hover:opacity-90'
          : 'bg-brand-bg-card border-white/5 hover:border-[#00C4E0]/40 hover:shadow-glow'
      }`}
    >
      {/* Date block */}
      <div className="flex-shrink-0 w-14 text-center">
        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
          {game.dayOfWeek.slice(0, 3)}
        </div>
        <div className="font-bebas text-2xl text-white leading-tight">
          {game.date.split('-')[2]}
        </div>
        <div className="text-[10px] text-gray-600 uppercase tracking-wide">
          {monthAbbr(game.date)}
        </div>
      </div>

      <div className="w-px h-10 bg-[#1A2D5A] flex-shrink-0" />

      {/* Team logo */}
      <TeamLogo opponent={game.opponent} />

      {/* Game info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          {isOff && (
            <span className="tag-off">Not Broadcasting</span>
          )}
          {!isOff && game.broadcasterRole === 'PXP' && (
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm bg-[#00C4E0]/10 text-[#00C4E0] border border-[#00C4E0]/20">
              PXP
            </span>
          )}
          {isLive && (
            <span className="tag-live">
              <span className="live-dot" />
              LIVE
            </span>
          )}
        </div>
        <div
          className={`font-bebas text-xl tracking-widest truncate transition-colors ${
            isOff
              ? 'text-gray-600'
              : 'text-white group-hover:text-[#00C4E0]'
          }`}
        >
          {game.isHome ? 'VS' : '@'} {game.opponent}
        </div>
        <div className="text-xs text-gray-500 truncate">
          {game.time} · {game.venue}
        </div>
      </div>

      {/* Right side */}
      <div className="flex-shrink-0 flex flex-col items-end gap-1">
        {isCompleted && game.result ? (
          <span
            className={`font-bebas text-xl tracking-widest ${
              isWin ? 'text-green-400' : isLoss ? 'text-red-400' : 'text-gray-400'
            }`}
          >
            {game.result}
          </span>
        ) : (
          !isCompleted && (
            <StatusPill status={game.status} />
          )
        )}
        <svg
          className="w-4 h-4 text-gray-600 group-hover:text-[#00C4E0] transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  )
}

function StatusPill({ status }) {
  if (status === 'live') {
    return (
      <span className="tag-live text-[10px]">
        <span className="live-dot" />
        LIVE
      </span>
    )
  }
  if (status === 'postponed') return <span className="tag-postponed text-[10px]">Postponed</span>
  return <span className="tag-upcoming text-[10px]">Upcoming</span>
}


function TeamLogo({ opponent, size = 'md' }) {
  const logo = getTeamLogo(opponent)
  const dims = size === 'lg' ? 'w-14 h-14' : 'w-10 h-10'
  if (!logo) return <div className={`${dims} flex-shrink-0`} />
  return (
    <div className={`${dims} flex-shrink-0 rounded-sm overflow-hidden bg-white/5 flex items-center justify-center`}>
      <img
        src={logo}
        alt={opponent}
        className="w-full h-full object-contain p-0.5"
        onError={(e) => { e.target.parentElement.style.display = 'none' }}
      />
    </div>
  )
}

function monthLabel(key) {
  const [y, m] = key.split('-').map(Number)
  return new Date(y, m - 1, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

function monthAbbr(dateStr) {
  const [y, m] = dateStr.split('-').map(Number)
  return new Date(y, m - 1, 1).toLocaleDateString('en-US', { month: 'short' })
}
