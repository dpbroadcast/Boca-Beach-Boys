const YT_URL = 'https://youtube.com/@dp.broadcast?si=cj_E8IEeT8sGCkS0'
const TT_URL = 'https://www.tiktok.com/@dp__broadast'
const IG_URL = 'https://www.instagram.com/dp.broadcast'
const BB_IG_URL = 'https://www.instagram.com/bocabeachboysbsb/'

export default function About() {
  return (
    <div className="page-enter pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HERO BIO ──────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-sm border border-white/5 bg-gradient-to-br from-[#0D1828] via-[#0B1424] to-[#08101C] mb-10">
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(0,196,224,0.06)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row gap-0 md:gap-8 items-stretch">
            {/* Headshot */}
            <div className="md:w-72 lg:w-80 flex-shrink-0">
              <div className="h-64 md:h-full min-h-[280px] overflow-hidden bg-gradient-to-br from-[#1A2D5A] to-[#0A1628]">
                <img
                  src="/assets/dylan-headshot.jpg"
                  alt="Dylan Paul — Sports Broadcaster"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1A2D5A] to-[#0A1628]">
                        <img src="/assets/dp-broadcast.png" alt="DP.Broadcast" class="h-24 w-auto opacity-40" />
                      </div>`
                  }}
                />
              </div>
            </div>

            {/* Bio content */}
            <div className="flex-1 p-7 md:p-8 flex flex-col justify-center">
              <div className="font-outfit text-xs font-bold uppercase tracking-[0.3em] text-[#00C4E0] mb-3">
                The Voice Behind the Mic
              </div>

              <h1 className="font-bebas text-5xl md:text-6xl tracking-widest text-white leading-none mb-2">
                Dylan Paul
              </h1>

              <div className="flex items-center gap-3 mb-5">
                <span className="font-outfit text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                  Sports Broadcaster
                </span>
                <span className="font-outfit text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm bg-[#00C4E0]/10 text-[#00C4E0] border border-[#00C4E0]/20">
                  SFCBL · 2026
                </span>
              </div>

              <div className="space-y-3 font-outfit text-gray-300 text-sm leading-relaxed mb-6">
                <p>
                  Dylan Paul is a sports broadcaster covering the Boca Beach Boys in the South
                  Florida Collegiate Baseball League. Based in Boca Raton, Dylan brings
                  play-by-play coverage to fans across South Florida and beyond — every home and
                  away game, every pitch, all summer long.
                </p>
                <p>
                  Full game replays and highlights are available on the DP.Broadcast YouTube channel
                  after each game, so you never miss a moment of Boca's summer baseball action.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={YT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
                  <YouTubeIcon className="w-4 h-4" />
                  Subscribe on YouTube
                </a>
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-blue text-sm">
                  @dp.broadcast
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── STATS STRIP ────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { label: 'Role', value: 'PXP' },
            { label: 'Games', value: '40+' },
            { label: 'League', value: 'SFCBL' },
            { label: 'Platform', value: 'YouTube' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-brand-bg-card border border-white/5 rounded-sm px-4 py-5 text-center group hover:border-brand-gold/20 transition-colors duration-200">
              <div className="font-bebas text-2xl tracking-widest text-brand-gold">{value}</div>
              <div className="font-outfit text-xs text-gray-600 uppercase tracking-widest mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* ── YOUTUBE SECTION ──────────────────────────────────────── */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-bebas text-3xl tracking-widest text-white">Watch the Broadcasts</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-brand-gold/20 to-transparent" />
          </div>

          <div className="bg-brand-bg-card border border-white/5 hover:border-brand-gold/25 rounded-sm overflow-hidden transition-colors duration-300 group">
            <div className="p-6 border-b border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-red-600 flex items-center justify-center flex-shrink-0">
                <YouTubeIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bebas text-xl tracking-widest text-white">@DP.BROADCAST</div>
                <div className="font-outfit text-gray-500 text-xs">Full game replays · Highlights · 2026 SFCBL season</div>
              </div>
              <a
                href={YT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2 rounded font-outfit text-xs uppercase tracking-widest transition-colors duration-200"
              >
                Subscribe
              </a>
            </div>

            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex-1">
                <p className="font-outfit text-gray-400 text-sm leading-relaxed">
                  Full game replays and highlights from every Boca Beach Boys game are available
                  on the DP.Broadcast YouTube channel. Subscribe so you never miss a moment.
                </p>
              </div>
              <a
                href={YT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-3 bg-[#0B1424] border border-white/5 hover:border-[#00C4E0]/40 rounded-sm px-5 py-4 group transition-colors duration-200"
              >
                <div className="w-9 h-9 bg-[#1A2D5A] rounded flex items-center justify-center flex-shrink-0">
                  <PlayIcon className="w-4 h-4 text-[#00C4E0]" />
                </div>
                <div>
                  <div className="font-outfit text-sm font-semibold text-white group-hover:text-[#00C4E0] transition-colors">
                    DP.Broadcast on YouTube
                  </div>
                  <div className="font-outfit text-xs text-gray-500">youtube.com/@dp.broadcast</div>
                </div>
                <ExternalLinkIcon className="w-4 h-4 text-gray-600 group-hover:text-[#00C4E0] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* ── FOLLOW DYLAN ─────────────────────────────────────────── */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-bebas text-3xl tracking-widest text-white">Follow Dylan</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-brand-gold/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <SocialCard
              href={YT_URL}
              icon={<YouTubeIcon className="w-6 h-6" />}
              label="YouTube"
              handle="@DP.Broadcast"
              desc="Full game replays & highlights"
              accent="text-brand-gold"
              border="hover:border-brand-gold/40"
            />
            <SocialCard
              href={TT_URL}
              icon={<TikTokIcon className="w-6 h-6" />}
              label="TikTok"
              handle="@dp__broadast"
              desc="Clips & highlights"
              accent="text-white"
              border="hover:border-white/25"
            />
            <SocialCard
              href={IG_URL}
              icon={<InstagramIcon className="w-6 h-6" />}
              label="Instagram"
              handle="@dp.broadcast"
              desc="Stories & game updates"
              accent="text-pink-400"
              border="hover:border-pink-500/35"
            />
          </div>
        </div>

        {/* ── TUNE IN CTA ──────────────────────────────────────────── */}
        <div className="bg-[#0B1424] border border-white/5 rounded-sm p-8 text-center">
          <div className="font-bebas text-3xl tracking-widest text-white mb-2">Tune In This Summer</div>
          <p className="font-outfit text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Full game replays and highlights from every Beach Boys game on YouTube. Season runs June through August 2026.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={YT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <YouTubeIcon className="w-4 h-4" />
              Watch on YouTube
            </a>
            <a href={BB_IG_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Follow @bocabeachboysbsb
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

// ── Sub-components ─────────────────────────────────────────────
function SocialCard({ href, icon, label, handle, desc, accent, border }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-brand-bg-card border border-white/5 ${border} rounded-sm flex items-center gap-4 p-5 transition-all duration-300 group`}
    >
      <div className={`${accent} flex-shrink-0`} aria-hidden="true">{icon}</div>
      <div className="min-w-0">
        <div className="font-bebas text-lg tracking-widest text-white">{label}</div>
        <div className={`font-outfit text-xs font-bold ${accent} truncate`}>{handle}</div>
        <div className="font-outfit text-gray-500 text-xs mt-0.5">{desc}</div>
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
function PlayIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8 5v14l11-7z" />
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
