// ─────────────────────────────────────────────────────────────
// CONTENT PAGE — BEACHSIDE BREAKDOWN EPISODES
//
// Add episodes to the array below. Each episode:
//   id           — unique string, e.g. "bsb-001"
//   title        — episode title
//   date         — "YYYY-MM-DD"
//   description  — short blurb (1-2 sentences)
//   instagramUrl — link to the Instagram post/reel (preferred)
//   youtubeUrl   — YouTube link if also posted there (optional)
//   thumbnailUrl — direct image URL for thumbnail (optional)
//
// Priority: instagramUrl → youtubeUrl → Beach Boys Instagram fallback
// ─────────────────────────────────────────────────────────────

const breakdowns = [
  {
    id: "bsb-001",
    title: "Pre-season Sit-down with Coach Trastoy",
    date: "2026-06-02",
    description: "Dylan sits down with Beach Boys head coach for a pre-season conversation ahead of the 2026 SFCBL season.",
    instagramUrl: "https://www.instagram.com/reel/DZH1N_fu26g/",
    youtubeUrl: null,
    thumbnailUrl: "/assets/bsb-001-thumb.jpg",
  },
  {
    id: "bsb-002",
    title: "Pre-season Interview with Josh Cope, Aaron Orozco & Andrew Elkins",
    date: "2026-06-03",
    description: "Dylan catches up with three Beach Boys players ahead of opening day.",
    instagramUrl: "https://www.instagram.com/reel/DZISHImu_ai/",
    youtubeUrl: null,
    thumbnailUrl: "/assets/bsb-002-thumb.jpg",
  },
]

function getYouTubeId(url) {
  if (!url) return null
  const match = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/)
  return match ? match[1] : null
}

// Returns the best link for an episode — Instagram first, then YouTube, then BB IG
function getEpisodeLink(ep) {
  return ep.instagramUrl || ep.youtubeUrl || 'https://www.instagram.com/bocabeachboysbsb/'
}

// Returns true if the episode links to Instagram
function isInstagramEp(ep) {
  return !!ep.instagramUrl && !ep.youtubeUrl
}

export default function Content() {
  return (
    <div className="page-enter pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">
            DP.Broadcast
          </div>
          <h1 className="font-bebas text-5xl md:text-6xl tracking-widest text-white">Content</h1>
          <div className="glow-line mt-4" />
        </div>

        {/* ── BEACHSIDE BREAKDOWN ─────────────────────────────── */}
        <section className="mb-16">
          {/* Section header with logo */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 p-6 bg-[#0D1525] border border-white/5 rounded-sm">
            <img
              src="/assets/beachside-breakdown.png"
              alt="Beachside Breakdown with Dylan Paul"
              className="h-24 md:h-28 w-auto flex-shrink-0"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div>
              <p className="font-outfit text-gray-400 text-sm leading-relaxed mb-4">
                The Beachside Breakdown is a video series covering the Boca Beach Boys —
                post-game analysis, player spotlights, season recaps, and everything in between.
                New episodes drop throughout the summer on the{' '}
                <a
                  href="https://www.instagram.com/bocabeachboysbsb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00C4E0] hover:underline"
                >
                  @bocabeachboysbsb Instagram
                </a>
                .
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/bocabeachboysbsb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-[#0A1628] font-bold px-5 py-2.5 rounded-sm text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-glow-gold"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Watch on Instagram
                </a>
                <a
                  href="https://www.instagram.com/bocabeachboysbsb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#00C4E0]/40 hover:border-[#00C4E0] text-[#00C4E0] font-semibold px-5 py-2.5 rounded-sm text-sm uppercase tracking-wider transition-all duration-200 hover:bg-[#00C4E0]/10"
                >
                  Follow @bocabeachboysbsb
                </a>
              </div>
            </div>
          </div>

          {/* Episodes grid */}
          {breakdowns.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...breakdowns].reverse().map((ep) => (
                <EpisodeCard key={ep.id} episode={ep} />
              ))}
            </div>
          ) : (
            <EmptyEpisodes />
          )}
        </section>

        {/* ── MORE CONTENT TYPES (future) ─────────────────────── */}
        <section>
          <div className="glow-line mb-8" />
          <h2 className="font-bebas text-3xl tracking-widest text-white mb-6">More from DP.Broadcast</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ContentTypeCard
              href="https://www.youtube.com/@DP.Broadcast"
              title="Live Broadcasts"
              desc="Every Beach Boys game — live play-by-play on YouTube"
              icon={<MicIcon className="w-6 h-6" />}
            />
            <ContentTypeCard
              href="https://www.instagram.com/bocabeachboysbsb/"
              title="Beach Boys Instagram"
              desc="Highlights, Beachside Breakdowns & behind-the-scenes @bocabeachboysbsb"
              icon={<InstagramIcon className="w-6 h-6" />}
            />
            <ContentTypeCard
              href="/articles"
              title="Game Articles"
              desc="Written recaps and write-ups from every game"
              icon={<ArticleIcon className="w-6 h-6" />}
              internal
            />
          </div>
        </section>
      </div>
    </div>
  )
}

function EpisodeCard({ episode }) {
  const ytId = getYouTubeId(episode.youtubeUrl)
  const igOnly = isInstagramEp(episode)
  const link = getEpisodeLink(episode)
  const [y, m, d] = episode.date.split('-').map(Number)
  const dateStr = new Date(y, m - 1, d).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  })

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-brand-bg-card border border-white/5 rounded-sm hover:border-brand-gold/40 hover:shadow-glow-gold transition-all duration-300 flex flex-col overflow-hidden group"
    >
      {/* Thumbnail */}
      {ytId ? (
        /* YouTube — auto-thumbnail from video ID */
        <div className="relative w-full pt-[56.25%] bg-black">
          <img
            src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
            alt={episode.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-brand-gold/90 rounded-full flex items-center justify-center group-hover:bg-brand-gold transition-colors">
              <svg className="w-5 h-5 text-[#0A1628] ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : episode.thumbnailUrl ? (
        /* Custom thumbnail image */
        <div className="relative w-full pt-[56.25%] bg-black overflow-hidden">
          <img
            src={episode.thumbnailUrl}
            alt={episode.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
          />
          {igOnly && (
            <div className="absolute top-2 right-2 bg-black/60 rounded px-2 py-1 flex items-center gap-1">
              <InstagramIcon className="w-3 h-3 text-pink-400" />
              <span className="font-outfit text-[10px] text-pink-400 font-bold uppercase tracking-wider">Instagram</span>
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-brand-gold/90 rounded-full flex items-center justify-center group-hover:bg-brand-gold transition-colors">
              <svg className="w-5 h-5 text-[#0A1628] ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        /* No thumbnail — branded placeholder */
        <div className="relative w-full aspect-video bg-gradient-to-br from-[#1A2D5A] to-[#0A1628] flex items-center justify-center">
          <img
            src="/assets/beachside-breakdown.png"
            alt=""
            aria-hidden="true"
            className="h-12 w-auto opacity-30"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          {igOnly && (
            <div className="absolute top-2 right-2 bg-black/60 rounded px-2 py-1 flex items-center gap-1">
              <InstagramIcon className="w-3 h-3 text-pink-400" />
              <span className="font-outfit text-[10px] text-pink-400 font-bold uppercase tracking-wider">Instagram</span>
            </div>
          )}
        </div>
      )}

      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <div className="font-outfit text-[10px] text-brand-gold font-bold uppercase tracking-widest">{dateStr}</div>
        <h3 className="font-bebas text-lg tracking-widest text-white group-hover:text-brand-gold transition-colors leading-snug">
          {episode.title}
        </h3>
        {episode.description && (
          <p className="font-outfit text-gray-500 text-xs leading-relaxed line-clamp-2">{episode.description}</p>
        )}
        <div className={`mt-auto pt-2 text-xs font-semibold font-outfit group-hover:underline flex items-center gap-1.5 ${igOnly ? 'text-pink-400' : 'text-brand-gold'}`}>
          {igOnly ? <><InstagramIcon className="w-3 h-3" />Watch on Instagram →</> : 'Watch Episode →'}
        </div>
      </div>
    </a>
  )
}

function EmptyEpisodes() {
  return (
    <div className="border border-dashed border-white/5 rounded-sm p-12 text-center">
      <img
        src="/assets/beachside-breakdown.png"
        alt="Beachside Breakdown"
        className="h-16 w-auto mx-auto opacity-20 mb-4"
        onError={(e) => { e.target.style.display = 'none' }}
      />
      <div className="font-bebas text-2xl tracking-widest text-gray-600 mb-2">
        First Episode Coming Soon
      </div>
      <p className="text-gray-600 text-sm mb-5">
        Beachside Breakdown episodes will appear here once the season kicks off June 3rd.
      </p>
      <a
        href="https://www.instagram.com/bocabeachboysbsb/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-[#00C4E0]/40 hover:border-[#00C4E0] text-[#00C4E0] font-outfit font-semibold px-5 py-2 rounded-sm text-sm uppercase tracking-wider transition-all duration-200"
      >
        <InstagramIcon className="w-4 h-4" />
        Follow @bocabeachboysbsb →
      </a>
    </div>
  )
}

function ContentTypeCard({ href, title, desc, icon, internal }) {
  const Tag = internal ? 'a' : 'a'
  return (
    <Tag
      href={href}
      target={internal ? '_self' : '_blank'}
      rel={internal ? undefined : 'noopener noreferrer'}
      className="bg-brand-bg-card border border-white/5 rounded-sm p-5 flex gap-4 hover:border-brand-gold/30 hover:shadow-glow-gold transition-all duration-300 group"
    >
      <div className="text-brand-gold flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <div className="font-bebas text-lg tracking-widest text-white group-hover:text-brand-gold transition-colors">
          {title}
        </div>
        <div className="text-gray-500 text-xs leading-relaxed mt-0.5">{desc}</div>
      </div>
    </Tag>
  )
}

// ── Icons ──────────────────────────────────────────────────────

function YouTubeIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function MicIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3z" />
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function ArticleIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3z" />
    </svg>
  )
}
