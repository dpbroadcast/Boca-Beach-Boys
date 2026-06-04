import { useState } from 'react'
import { Link } from 'react-router-dom'
import { games, getNextGame, getRecentGames } from '../data/games'
import { articles } from '../data/articles'
import GameModal from '../components/GameModal'
import { getTeamLogo } from '../data/teamLogos'

const YT_URL = 'https://youtube.com/@dp.broadcast?si=cj_E8IEeT8sGCkS0'
const TT_URL = 'https://www.tiktok.com/@dp__broadast'
const IG_URL = 'https://www.instagram.com/dp.broadcast'
const BB_URL = 'https://www.bocabeachboys.com/'
const BB_X_URL = 'https://x.com/beachboysbsb'

export default function Home() {
  const [selectedGame, setSelectedGame] = useState(null)
  const nextGame = getNextGame()
  const recentGames = getRecentGames(3)
  const latestArticle = articles.length > 0 ? [...articles].reverse()[0] : null

  return (
    <div className="page-enter" id="main-content">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
        {/* Background layers */}
        <div className="hero-pattern absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_15%_60%,rgba(180,151,90,0.11)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_85%_40%,rgba(0,196,224,0.09)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(4,8,16,0.7)_100%)] pointer-events-none" />

        {/* Diagonal accent stripe */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(118deg, transparent 45%, rgba(0,196,224,0.04) 45%, rgba(0,196,224,0.04) 55%, transparent 55%)',
          }}
        />

        {/* Mascot — right side hero element */}
        <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none hidden lg:block">
          {/* Left fade so mascot blends into content */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#08101C] to-transparent z-10" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08101C] to-transparent z-10" />
          <img
            src="/assets/bb-mascot.png"
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-[88%] w-auto object-contain object-bottom opacity-50"
            style={{ filter: 'drop-shadow(-20px 0 60px rgba(0,196,224,0.15))' }}
            onError={(e) => { e.target.parentElement.style.display = 'none' }}
          />
          {/* BB wordmark over mascot's feet */}
          <div className="absolute bottom-10 right-8 z-20">
            <img
              src="/assets/bb-wordmark.png"
              alt="Boca Beach Boys"
              className="h-14 w-auto opacity-60"
              style={{ filter: 'drop-shadow(0 2px 12px rgba(0,196,224,0.3))' }}
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
        </div>

        {/* Main content — left column */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
          <div className="max-w-xl lg:max-w-2xl">

            {/* DP.Broadcast logo */}
            <div className="mb-6 stagger-1">
              <img
                src="/assets/dp-broadcast.png"
                alt="DP.Broadcast"
                className="h-24 md:h-32 w-auto"
                style={{ filter: 'drop-shadow(0 0 30px rgba(180,151,90,0.5))' }}
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>

            {/* Main headline */}
            <h1 className="font-bebas text-[72px] md:text-[108px] leading-none tracking-widest shimmer-text stagger-2 mb-1">
              DP.BROADCAST
            </h1>

            {/* Tagline row */}
            <div className="flex items-center gap-4 mb-6 stagger-3">
              <div className="h-px w-16 bg-gradient-to-r from-brand-gold/60 to-transparent" />
              <p className="font-outfit font-semibold tracking-[0.25em] text-xs text-[#00C4E0]/90 uppercase">
                Sports Broadcaster · 2026
              </p>
            </div>

            {/* Coverage badge */}
            <div className="stagger-3 inline-flex mb-8">
              <div className="card-metallic flex items-center gap-4 px-5 py-3">
                <img
                  src="/assets/bb-icon.png"
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-auto flex-shrink-0"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(0,196,224,0.35))' }}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="w-px h-7 bg-white/10" />
                <div>
                  <div className="font-outfit font-bold text-sm text-white leading-tight">Boca Beach Boys</div>
                  <div className="font-outfit text-xs text-[#00C4E0] font-medium leading-tight mt-0.5">
                    South Florida Collegiate Baseball League
                  </div>
                </div>
                <div className="ml-2 text-[11px] font-outfit font-bold uppercase tracking-widest text-brand-gold/70 hidden sm:block">
                  2026
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="font-outfit text-base text-gray-400 leading-relaxed max-w-md mb-8 stagger-4">
              Every pitch. Every play. Every game — broadcast live and free on YouTube.
              Follow the 2026 Beach Boys season with Dylan Paul calling all the action.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 stagger-5">
              <a
                href={YT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm"
              >
                <YouTubeIcon className="w-4 h-4" />
                Watch Live on YouTube
              </a>
              <Link to="/schedule" className="btn-outline-blue text-sm">
                2026 Schedule →
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-gold/25 z-10">
          <span className="font-outfit text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-brand-gold/25 to-transparent" />
        </div>
      </section>

      {/* ── WAVE DIVIDER ──────────────────────────────────────── */}
      <div className="wave-divider -mt-1 text-[#0A1017]" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="h-12 w-full">
          <path d="M0 0C240 60 480 60 720 30C960 0 1200 0 1440 30L1440 60L0 60Z" fill="currentColor" />
        </svg>
      </div>

      {/* ── YOUTUBE CTA — PRIMARY PLATFORM ───────────────────── */}
      <section className="bg-[#0A1017] pb-20 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-sm border border-brand-gold/25 bg-gradient-to-br from-[#0D1828] via-[#0B1020] to-[#06090F]">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
            {/* Giant watermark YT icon */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none" aria-hidden="true">
              <YouTubeIcon className="w-64 h-64 text-brand-gold" />
            </div>

            <div className="relative px-8 py-10 md:px-14 md:py-12 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
              {/* Left: headline + copy */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-5">
                  <YouTubeIcon className="w-8 h-8 text-brand-gold flex-shrink-0" />
                  <span className="font-outfit font-bold text-xs uppercase tracking-[0.3em] text-brand-gold/80">
                    Primary Broadcast Platform
                  </span>
                </div>
                <h2 className="font-bebas text-5xl md:text-6xl xl:text-7xl tracking-widest leading-tight text-white mb-4">
                  WATCH EVERY GAME<br />
                  <span className="shimmer-text">LIVE ON YOUTUBE</span>
                </h2>
                <p className="font-outfit text-base text-gray-400 leading-relaxed max-w-lg">
                  Every Boca Beach Boys game — broadcast live and free. Subscribe so you never miss a pitch.
                  Dylan Paul on play-by-play for the entire 2026 SFCBL season.
                </p>
              </div>

              {/* Right: channel identity + CTA */}
              <div className="flex flex-col items-start lg:items-center gap-5 flex-shrink-0 lg:text-center">
                <div>
                  <div className="font-bebas text-4xl text-white tracking-widest leading-none">
                    @DP.BROADCAST
                  </div>
                  <div className="font-outfit text-sm text-gray-500 mt-1">youtube.com/@dp.broadcast</div>
                </div>
                <a
                  href={YT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-8 py-4 text-sm"
                >
                  <YouTubeIcon className="w-5 h-5" />
                  Subscribe Free →
                </a>
                <div className="flex items-center gap-2 font-outfit text-xs text-gray-600 uppercase tracking-wider">
                  <span>SFCBL 2026</span>
                  <span className="text-brand-gold/30">·</span>
                  <span>Live + Replay</span>
                  <span className="text-brand-gold/30">·</span>
                  <span>Free</span>
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C4E0]/25 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── NEXT BROADCAST ────────────────────────────────────── */}
      <section className="bg-[#0A1017] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <SectionHeader
          label="Next Broadcast"
          linkTo="/schedule"
          linkLabel="Full Schedule"
        />
        {nextGame ? (
          <NextGameBanner game={nextGame} />
        ) : (
          <div className="text-center py-16 border border-white/5 rounded-sm bg-brand-bg-card">
            <div className="font-bebas text-4xl tracking-widest text-gray-500 mb-2">SEASON COMPLETE</div>
            <p className="font-outfit text-gray-600 text-sm">Thanks for watching. See you next summer.</p>
          </div>
        )}
      </section>

      {/* ── RECENT GAMES ──────────────────────────────────────── */}
      {recentGames.length > 0 && (
        <section className="bg-[#0A1017] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <SectionHeader
            label="Recent Games"
            linkTo="/schedule"
            linkLabel="Full Schedule"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentGames.map((game) => (
              <RecentGameCard key={game.id} game={game} onClick={() => setSelectedGame(game)} />
            ))}
          </div>
        </section>
      )}

      {/* ── LATEST ARTICLE ────────────────────────────────────── */}
      {latestArticle && (
        <section className="bg-[#0A1017] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <SectionHeader
            label="Latest Article"
            linkTo="/articles"
            linkLabel="All Articles"
          />
          <LatestArticleCard article={latestArticle} />
        </section>
      )}

      {/* ── OFFICIAL BEACH BOYS SITE ──────────────────────────── */}
      <section className="bg-[#0A1017] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <OfficialSiteCTA />
      </section>

      {/* ── FOLLOW THE COVERAGE ───────────────────────────────── */}
      <section className="bg-[#0A1017] pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent mb-12" />

          {/* Section headline */}
          <div className="text-center mb-10">
            <h2 className="font-bebas text-4xl md:text-5xl tracking-widest text-white mb-2">
              FOLLOW THE COVERAGE
            </h2>
            <p className="font-outfit text-sm text-gray-500">
              Live broadcasts, highlights, and behind-the-scenes from @DP.Broadcast
            </p>
          </div>

          {/* YouTube — featured */}
          <div className="mb-4">
            <SocialCardFeatured
              href={YT_URL}
              icon={<YouTubeIcon className="w-8 h-8" />}
              platform="YouTube"
              handle="@DP.Broadcast"
              desc="Live game broadcasts, full replays, and play-by-play coverage of every Boca Beach Boys game."
              cta="Subscribe Free →"
              accentColor="brand-gold"
              shadowColor="rgba(180,151,90,0.2)"
            />
          </div>

          {/* Twitter/X — live game updates */}
          <div className="mb-4">
            <SocialCardFeatured
              href={BB_X_URL}
              icon={<XIcon className="w-7 h-7" />}
              platform="Twitter / X"
              handle="@beachboysbsb"
              desc="Live in-game updates, scores, news and announcements from the Boca Beach Boys. Follow for real-time coverage during every game."
              cta="Follow for Live Updates →"
              accentColor="text-white"
              shadowColor="rgba(255,255,255,0.06)"
            />
          </div>

          {/* TikTok + Instagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SocialCard
              href={TT_URL}
              icon={<TikTokIcon className="w-6 h-6" />}
              color="hover:border-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]"
              label="TikTok"
              sub="@dp__broadast"
              desc="Clips, highlights & behind the scenes"
            />
            <SocialCard
              href={IG_URL}
              icon={<InstagramIcon className="w-6 h-6" />}
              color="hover:border-pink-500/35 hover:shadow-[0_0_20px_rgba(255,77,141,0.12)]"
              label="Instagram"
              sub="@dp.broadcast"
              desc="Photos, stories & game updates"
            />
          </div>
        </div>
      </section>

      {selectedGame && (
        <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}
    </div>
  )
}

// ── Section Header ─────────────────────────────────────────────
function SectionHeader({ label, linkTo, linkLabel }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <h2 className="font-bebas text-3xl md:text-4xl tracking-widest text-white">{label}</h2>
        <div className="h-px w-16 bg-gradient-to-r from-brand-gold/30 to-transparent hidden sm:block" />
      </div>
      {linkTo && (
        <Link
          to={linkTo}
          className="font-outfit text-xs font-bold uppercase tracking-widest text-[#00C4E0] hover:text-white transition-colors duration-200"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  )
}

// ── Official Beach Boys Site CTA ───────────────────────────────
function OfficialSiteCTA() {
  return (
    <div className="relative overflow-hidden border border-white/5 hover:border-[#00C4E0]/35 bg-gradient-to-r from-[#0D1525] via-[#0D1B2E] to-[#0D1525] rounded-sm transition-colors duration-300 group">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00C4E0] to-transparent" />

      <div className="px-6 py-7 md:px-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex items-center gap-4 flex-shrink-0">
          <img
            src="/assets/bb-icon.png"
            alt=""
            aria-hidden="true"
            className="h-14 md:h-18 w-auto"
            style={{ filter: 'drop-shadow(0 0 12px rgba(0,196,224,0.25))' }}
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <img
            src="/assets/bb-wordmark.png"
            alt="Boca Beach Boys"
            className="h-9 md:h-11 w-auto hidden sm:block"
            style={{ filter: 'drop-shadow(0 0 8px rgba(0,196,224,0.2))' }}
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="font-outfit text-xs font-bold uppercase tracking-widest text-[#00C4E0] mb-1">
            Official Team Website
          </div>
          <h3 className="font-bebas text-2xl md:text-3xl tracking-widest text-white mb-1">
            Visit BocaBeachBoys.com
          </h3>
          <p className="font-outfit text-gray-500 text-sm leading-relaxed">
            Tickets, team news, official roster, and everything Boca Beach Boys — straight from the source.
          </p>
        </div>

        <div className="flex-shrink-0">
          <a
            href={BB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#00C4E0] hover:bg-[#00C4E0] text-[#00C4E0] hover:text-[#0A1628] font-bold px-6 py-3 rounded-sm text-sm uppercase tracking-widest transition-colors duration-200 group-hover:shadow-glow"
          >
            Official Site
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Next Game Banner ───────────────────────────────────────────
function NextGameBanner({ game }) {
  const ytUrl = game.youtubeStreamUrl ?? YT_URL
  const [y, m, d] = game.date.split('-').map(Number)
  const formattedDate = new Date(y, m - 1, d).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
  })

  return (
    <div className="relative overflow-hidden border border-brand-gold/30 bg-[#0B1424] rounded-sm shadow-glow-gold">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-5">
          {getTeamLogo(game.opponent) && (
            <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-sm overflow-hidden bg-white/5 flex items-center justify-center">
              <img
                src={getTeamLogo(game.opponent)}
                alt={game.opponent}
                className="w-full h-full object-contain p-1"
                onError={(e) => { e.target.parentElement.style.display = 'none' }}
              />
            </div>
          )}
          <div>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="tag-upcoming">Next Broadcast</span>
              {game.status === 'live' && (
                <span className="tag-live"><span className="live-dot" aria-hidden="true" />LIVE NOW</span>
              )}
            </div>
            <h2 className="font-bebas text-4xl md:text-5xl tracking-widest text-white mb-1">
              {game.isHome ? 'VS' : 'AT'}{' '}
              <span className="text-[#00C4E0]">{game.opponent}</span>
            </h2>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-3">
              <span className="flex items-center gap-1.5 font-outfit text-gray-300 text-sm">
                <CalendarIcon className="w-4 h-4 text-brand-gold flex-shrink-0" aria-hidden="true" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5 font-outfit text-gray-300 text-sm">
                <ClockIcon className="w-4 h-4 text-brand-gold flex-shrink-0" aria-hidden="true" />
                {game.time} ET
              </span>
              <span className="flex items-center gap-1.5 font-outfit text-gray-300 text-sm">
                <LocationIcon className="w-4 h-4 text-brand-gold flex-shrink-0" aria-hidden="true" />
                {game.venue}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href={ytUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-[#0A1628] font-bold px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors duration-200 hover:shadow-glow-gold"
          >
            <YouTubeIcon className="w-4 h-4" />
            WATCH LIVE →
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Recent Game Card ───────────────────────────────────────────
function RecentGameCard({ game, onClick }) {
  const isWin = game.result?.startsWith('W')
  const isLoss = game.result?.startsWith('L')

  return (
    <button
      onClick={onClick}
      className="bg-brand-bg-card border border-white/5 rounded-sm hover:border-[#00C4E0]/40 hover:shadow-glow transition-all duration-300 text-left p-5 flex flex-col gap-3 w-full cursor-pointer group"
    >
      <div className="flex items-center justify-between">
        <span className="tag-completed">Final</span>
        {game.result && (
          <span className={`font-bebas text-lg tracking-widest ${isWin ? 'text-green-400' : isLoss ? 'text-red-400' : 'text-gray-400'}`}>
            {game.result}
          </span>
        )}
      </div>
      <div className="flex items-center gap-3">
        {getTeamLogo(game.opponent) && (
          <div className="w-12 h-12 flex-shrink-0 rounded-sm overflow-hidden bg-white/5 flex items-center justify-center">
            <img
              src={getTeamLogo(game.opponent)}
              alt={game.opponent}
              className="w-full h-full object-contain p-0.5"
              onError={(e) => { e.target.parentElement.style.display = 'none' }}
            />
          </div>
        )}
        <div>
          <div className="font-outfit text-xs text-gray-500 uppercase tracking-widest mb-0.5">
            {game.dayOfWeek}, {formatShortDate(game.date)}
          </div>
          <div className="font-bebas text-2xl tracking-widest text-white group-hover:text-[#00C4E0] transition-colors duration-200">
            {game.isHome ? 'VS' : '@'} {game.opponent}
          </div>
          <div className="font-outfit text-xs text-gray-500 mt-1">{game.venue}</div>
        </div>
      </div>
      {game.youtubeReplayUrl && (
        <div className="mt-auto pt-3 border-t border-white/5">
          <span className="font-outfit text-[#00C4E0] text-xs font-bold uppercase tracking-wider group-hover:underline">
            Watch Replay →
          </span>
        </div>
      )}
    </button>
  )
}

// ── Latest Article Card ────────────────────────────────────────
function LatestArticleCard({ article }) {
  const [y, m, d] = article.date.split('-').map(Number)
  const dateStr = new Date(y, m - 1, d).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  })
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="bg-brand-bg-card border border-white/5 rounded-sm hover:border-[#00C4E0]/40 hover:shadow-glow transition-all duration-300 block p-6 md:p-8 group"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {article.imageUrl ? (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full md:w-64 h-40 object-cover rounded-sm flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        ) : (
          <div className="w-full md:w-64 h-40 flex-shrink-0 bg-gradient-to-br from-[#1A2D5A] to-[#0A1628] rounded-sm flex items-center justify-center border border-white/5">
            <img
              src="/assets/bb-icon.png"
              alt=""
              aria-hidden="true"
              className="h-16 w-auto opacity-15"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <div className="font-outfit text-xs text-[#00C4E0] font-bold uppercase tracking-widest">{dateStr}</div>
          <h3 className="font-bebas text-3xl tracking-widest text-white group-hover:text-[#00C4E0] transition-colors duration-200 leading-tight">
            {article.title}
          </h3>
          <p className="font-outfit text-gray-400 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
          <div className="mt-auto pt-2">
            <span className="font-outfit text-[#00C4E0] text-sm font-bold group-hover:underline">Read Article →</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

// ── Featured Social Card (YouTube) ─────────────────────────────
function SocialCardFeatured({ href, icon, platform, handle, desc, cta, accentColor, shadowColor }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-brand-bg-card border border-brand-gold/20 rounded-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 transition-all duration-300 hover:border-brand-gold/50 group"
      style={{ boxShadow: `0 0 0 0 ${shadowColor}` }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 32px ${shadowColor}` }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 0 0 ${shadowColor}` }}
    >
      <div className="text-brand-gold flex-shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <div className="font-bebas text-2xl tracking-widest text-white">{platform}</div>
          <div className="font-outfit text-xs font-bold text-brand-gold">{handle}</div>
        </div>
        <p className="font-outfit text-sm text-gray-400 leading-relaxed">{desc}</p>
      </div>
      <div className="flex-shrink-0">
        <span className="inline-flex items-center gap-1.5 font-outfit text-sm font-bold text-brand-gold group-hover:underline uppercase tracking-wider">
          {cta}
        </span>
      </div>
      <ExternalLinkIcon className="w-4 h-4 text-gray-600 flex-shrink-0 hidden sm:block" aria-hidden="true" />
    </a>
  )
}

// ── Social Card ────────────────────────────────────────────────
function SocialCard({ href, icon, color, label, sub, desc }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-brand-bg-card border border-white/5 rounded-sm flex items-center gap-4 p-5 transition-all duration-300 group ${color}`}
    >
      <div className="text-gray-400 group-hover:text-white transition-colors duration-200 flex-shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="font-bebas text-lg tracking-widest text-white">{label}</div>
        <div className="font-outfit text-xs font-bold text-[#00C4E0] truncate">{sub}</div>
        <div className="font-outfit text-gray-500 text-xs mt-0.5 leading-snug">{desc}</div>
      </div>
      <ExternalLinkIcon className="w-4 h-4 text-gray-600 ml-auto flex-shrink-0" aria-hidden="true" />
    </a>
  )
}

// ── Icons ──────────────────────────────────────────────────────
function YouTubeIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
function XIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.631 5.903-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
function TikTokIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}
function InstagramIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}
function ExternalLinkIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}
function CalendarIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="4" width="18" height="18" rx="2" /><path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}
function ClockIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 6v6l4 2" />
    </svg>
  )
}
function LocationIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  )
}

function formatShortDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
