import { useEffect } from 'react'
import { getYouTubeId } from '../data/games'
import { articles } from '../data/articles'
import { breakdowns } from '../data/breakdowns'
import { getTeamLogo } from '../data/teamLogos'

export default function GameModal({ game, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!game) return null

  const ytId = getYouTubeId(game.youtubeReplayUrl) || getYouTubeId(game.youtubeStreamUrl)
  const article = game.articleId ? articles.find((a) => a.id === game.articleId) : null
  const breakdown = game.breakdownId ? breakdowns.find((b) => b.id === game.breakdownId) : null
  const isCompleted = game.status === 'completed'
  const isUpcoming = game.status === 'upcoming'
  const isLive = game.status === 'live'

  const resultColor =
    game.result?.startsWith('W')
      ? 'text-green-400'
      : game.result?.startsWith('L')
      ? 'text-red-400'
      : 'text-gray-400'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
      onClick={onClose}
    >
      <div
        className="bg-[#0E1B30] border border-white/5 rounded-sm w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fade-in shadow-glow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {/* Team logo */}
            {getTeamLogo(game.opponent) && (
              <div className="w-16 h-16 flex-shrink-0 rounded-sm overflow-hidden bg-white/5 flex items-center justify-center">
                <img
                  src={getTeamLogo(game.opponent)}
                  alt={game.opponent}
                  className="w-full h-full object-contain p-1"
                  onError={(e) => { e.target.parentElement.style.display = 'none' }}
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <StatusBadge status={game.status} />
                {game.broadcasterRole !== 'OFF' && (
                  <RoleBadge role={game.broadcasterRole} />
                )}
              </div>
              <h2 className="font-bebas text-3xl tracking-widest text-white leading-tight">
                {game.isHome ? 'VS' : '@'}{' '}
                <span className="text-[#00C4E0]">{game.opponent}</span>
              </h2>
              {isCompleted && game.result && (
                <div className={`font-bebas text-2xl tracking-widest mt-1 ${resultColor}`}>
                  {game.result}
                </div>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-white transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Game info */}
        <div className="p-6 grid grid-cols-2 gap-4 border-b border-white/5">
          <InfoCell label="Date" value={`${game.dayOfWeek}, ${formatDate(game.date)}`} />
          <InfoCell label="Time" value={game.time} />
          <InfoCell label="Venue" value={game.venue} />
          <InfoCell label="Location" value={game.isHome ? 'Home' : 'Away'} />
          {game.broadcasterRole === 'OFF' && game.offBroadcaster && (
            <InfoCell label="On the Call" value={game.offBroadcaster} />
          )}
        </div>

        {/* Replay embed */}
        {ytId && (
          <div className="p-6 border-b border-white/5">
            <h3 className="font-bebas text-lg tracking-widest text-[#00C4E0] mb-3">
              {isLive ? 'LIVE NOW' : 'REPLAY'}
            </h3>
            <div className="yt-embed rounded-sm overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${ytId}`}
                title={`${game.opponent} replay`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Upcoming CTA */}
        {isUpcoming && !ytId && (
          <div className="p-6 border-b border-white/5">
            <p className="text-gray-400 text-sm mb-4">
              Watch this game live on the DP.Broadcast YouTube channel when it airs.
            </p>
            <a
              href={game.youtubeStreamUrl ?? 'https://www.youtube.com/@DP.Broadcast'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <YouTubeIcon className="w-4 h-4" />
              {game.youtubeStreamUrl ? 'Watch Live' : 'Subscribe for Alerts'}
            </a>
          </div>
        )}

        {/* Article link */}
        {article && (
          <div className={`p-6 ${breakdown ? 'border-b border-white/5' : ''}`}>
            <h3 className="font-bebas text-lg tracking-widest text-[#00C4E0] mb-2">Game Write-up</h3>
            <p className="text-gray-400 text-sm mb-3">{article.excerpt}</p>
            <a href={`/articles/${article.slug}`} className="btn-outline text-xs">
              Read Full Article →
            </a>
          </div>
        )}

        {/* Beachside Breakdown link */}
        {breakdown && (
          <div className="p-6">
            <h3 className="font-bebas text-lg tracking-widest text-[#00C4E0] mb-2">Beachside Breakdown</h3>
            <p className="text-gray-400 text-sm mb-3">{breakdown.description}</p>
            <a
              href={breakdown.instagramUrl || breakdown.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              Watch on Instagram →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

function InfoCell({ label, value }) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-0.5">{label}</div>
      <div className="text-sm text-gray-300">{value}</div>
    </div>
  )
}

function StatusBadge({ status }) {
  if (status === 'live') {
    return (
      <span className="tag-live">
        <span className="live-dot" />
        Live
      </span>
    )
  }
  if (status === 'completed') return <span className="tag-completed">Final</span>
  if (status === 'postponed') return <span className="tag-postponed">Postponed</span>
  return <span className="tag-upcoming">Upcoming</span>
}

function RoleBadge({ role }) {
  return (
    <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-[#1A2D5A] text-[#00C4E0]/80 border border-white/5">
      {role === 'PXP' ? 'Play-by-Play' : 'Color'}
    </span>
  )
}

function YouTubeIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
