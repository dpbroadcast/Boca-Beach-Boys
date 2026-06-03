import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home', exact: true },
  { to: '/schedule', label: 'Schedule' },
  { to: '/roster', label: 'Roster' },
  { to: '/content', label: 'Content' },
  { to: '/articles', label: 'Articles' },
  { to: '/league', label: 'League' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Skip navigation — keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-gold focus:text-[#08101C] focus:font-bold focus:px-4 focus:py-2 focus:rounded-sm focus:text-sm"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
          scrolled
            ? 'bg-[#04080F]/95 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
        style={scrolled ? { borderBottom: '1px solid rgba(180,151,90,0.18)' } : {}}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* DP.Broadcast Logo + identity */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <img
              src="/assets/dp-broadcast.png"
              alt="DP.Broadcast home"
              className="h-10 w-auto"
              style={{ filter: 'drop-shadow(0 0 8px rgba(180,151,90,0.4))' }}
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className="hidden sm:block">
              <div className="font-bebas text-lg tracking-widest text-white leading-none group-hover:text-brand-gold transition-colors duration-200">
                DP.BROADCAST
              </div>
              <div className="text-xs font-outfit font-semibold uppercase tracking-widest text-[#00C4E0]/80 leading-none mt-0.5">
                Boca Beach Boys · SFCBL
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5">
            {NAV_LINKS.map(({ to, label, exact }) => (
              <NavLink
                key={to}
                to={to}
                end={exact}
                className={({ isActive }) =>
                  `relative text-xs font-outfit font-bold uppercase tracking-widest transition-colors duration-200 pb-1 ${
                    isActive
                      ? 'text-brand-gold'
                      : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-brand-gold rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://youtube.com/@dp.broadcast?si=cj_E8IEeT8sGCkS0"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 btn-gold px-4 py-2 text-xs"
            >
              <YouTubeIcon className="w-3.5 h-3.5" />
              Subscribe
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden bg-[#060D1A]/98 backdrop-blur-md border-b border-white/5">
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ to, label, exact }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={exact}
                  className={({ isActive }) =>
                    `px-3 py-3 text-sm font-outfit font-bold uppercase tracking-widest rounded-sm transition-colors duration-200 ${
                      isActive
                        ? 'text-brand-gold bg-brand-gold/10 border-l-2 border-brand-gold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <div className="pt-3 border-t border-white/5 mt-2">
                <a
                  href="https://youtube.com/@dp.broadcast?si=cj_E8IEeT8sGCkS0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-[#0A1628] font-bold px-4 py-2.5 rounded-sm text-sm transition-colors duration-200 w-full justify-center uppercase tracking-widest"
                >
                  <YouTubeIcon className="w-4 h-4" />
                  Subscribe on YouTube
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}
function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
function YouTubeIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
