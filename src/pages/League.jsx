const STANDINGS_URL = 'https://sfcbl.com/'

export default function League() {
  return (
    <div className="page-enter pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="text-[#00C4E0] text-xs font-bold uppercase tracking-widest mb-2">2026</div>
          <h1 className="font-bebas text-5xl md:text-6xl tracking-widest text-white">League Standings</h1>
          <div className="glow-line mt-4" />
        </div>

        {/* League info card */}
        <div className="bg-brand-bg-card border border-white/5 rounded-sm p-6 md:p-8 mb-8 flex flex-col md:flex-row items-start gap-6">
          <div className="flex-shrink-0">
            <img
              src="/assets/sfcbl.png"
              alt="South Florida Collegiate Baseball League"
              className="h-20 w-auto opacity-90"
              onError={(e) => {
                e.target.replaceWith(
                  Object.assign(document.createElement('div'), {
                    className: 'font-bebas text-3xl tracking-widest text-[#00C4E0]',
                    textContent: 'SFCBL',
                  })
                )
              }}
            />
          </div>
          <div className="flex-1">
            <h2 className="font-bebas text-2xl tracking-widest text-white mb-2">
              South Florida Collegiate Baseball League
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The SFCBL is a premier collegiate summer baseball league based in South Florida,
              providing top college players the opportunity to compete at a high level while
              preserving their NCAA eligibility. The Boca Beach Boys represent Boca Raton
              in the league, with all home broadcasts on{' '}
              <a
                href="https://www.youtube.com/@DP.Broadcast"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00C4E0] hover:underline"
              >
                @DP.Broadcast
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={STANDINGS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                View Full Standings →
              </a>
              <a
                href="https://www.instagram.com/bocabeachboysbsb/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                Follow @bocabeachboysbsb
              </a>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Standings', desc: 'Team records and division standings', href: STANDINGS_URL },
            { label: 'Stats', desc: 'Player batting and pitching stats', href: STANDINGS_URL + '/stats' },
            { label: 'Schedule', desc: 'Full league schedule', href: STANDINGS_URL + '/schedule' },
          ].map(({ label, desc, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card px-5 py-4 flex items-center gap-4 group"
            >
              <div className="flex-1">
                <div className="font-bebas text-lg tracking-widest text-white group-hover:text-[#00C4E0] transition-colors">
                  {label}
                </div>
                <div className="text-xs text-gray-500">{desc}</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-[#00C4E0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

