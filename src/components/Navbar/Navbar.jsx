import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

/* ============================================================
   SECTION THEME MAP
   ============================================================ */
const SECTION_THEMES = {
  'hero-cambridge': { text: '#000000', active: '#1677D2' },
  'hero-tkt':       { text: '#000000', active: '#B0000B' },
  default:          { text: '#1A3B68', active: '#1677D2' },
}

const NAV_LINKS = [
  { label: 'Home',            to: '/' },
  { label: 'About',           to: '/about' },
  { label: 'Cambridge Exams', to: '/cambridge-exams' },
  { label: 'Services',        to: '/services' },
  { label: 'FAQ',             to: '/faq' },
  { label: 'Contact',         to: '/contact' },
]

/* ============================================================
   CAMBRIDGE SHIELD — SVG logo
   ============================================================ */
function CambridgeShield() {
  return (
    <svg
      viewBox="0 0 54 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Alpha Cambridge Exam Centre shield logo"
      role="img"
    >
      <path
        d="M3 3h48v32c0 13-12 21-24 24C15 56 3 48 3 35V3z"
        fill="#003087"
        stroke="#D4AF37"
        strokeWidth="1.4"
      />
      <line x1="27" y1="3" x2="27" y2="59" stroke="#D4AF37" strokeWidth="1.2" />
      <line x1="3" y1="23" x2="51" y2="23" stroke="#D4AF37" strokeWidth="1.2" />

      {/* TOP-LEFT: Open book */}
      <rect x="8" y="7" width="14" height="11" rx="1" fill="#D4AF37" opacity="0.90" />
      <line x1="15" y1="7"    x2="15" y2="18"  stroke="#003087" strokeWidth="1" />
      <line x1="9"  y1="10"   x2="14" y2="10"  stroke="#003087" strokeWidth="0.7" />
      <line x1="9"  y1="12.5" x2="14" y2="12.5" stroke="#003087" strokeWidth="0.7" />
      <line x1="9"  y1="15"   x2="14" y2="15"  stroke="#003087" strokeWidth="0.7" />
      <line x1="16" y1="10"   x2="21" y2="10"  stroke="#003087" strokeWidth="0.7" />
      <line x1="16" y1="12.5" x2="21" y2="12.5" stroke="#003087" strokeWidth="0.7" />
      <line x1="16" y1="15"   x2="21" y2="15"  stroke="#003087" strokeWidth="0.7" />

      {/* TOP-RIGHT: Anchor */}
      <circle cx="39" cy="11" r="4" fill="none" stroke="#D4AF37" strokeWidth="1.4" />
      <line x1="39" y1="7"  x2="39" y2="20" stroke="#D4AF37" strokeWidth="1.4" />
      <line x1="35" y1="20" x2="43" y2="20" stroke="#D4AF37" strokeWidth="1.4" />
      <path d="M35 16 Q33 18 35 20" stroke="#D4AF37" strokeWidth="1.1" fill="none" />
      <path d="M43 16 Q45 18 43 20" stroke="#D4AF37" strokeWidth="1.1" fill="none" />
      <line x1="36" y1="9" x2="42" y2="9" stroke="#D4AF37" strokeWidth="1.4" />

      {/* BOTTOM-LEFT: Red quadrant */}
      <path d="M3 23h24v12C27 42 18 47 15 48.5 12 47 3 42 3 35V23z" fill="#c41e3a" />
      {[10, 16].map(cx => (
        <g key={cx} transform={`translate(${cx}, 30)`}>
          <rect x="-3"   y="2"    width="6"   height="2.5" rx="0.5" fill="#D4AF37" />
          <rect x="-2"   y="-1"   width="4"   height="3"   rx="0.5" fill="#D4AF37" />
          <rect x="-2.5" y="-2.5" width="1.5" height="2"   rx="0.3" fill="#D4AF37" />
          <rect x="-0.5" y="-3.5" width="1"   height="2.5" rx="0.3" fill="#D4AF37" />
          <rect x="1"    y="-2.5" width="1.5" height="2"   rx="0.3" fill="#D4AF37" />
        </g>
      ))}

      {/* BOTTOM-RIGHT: Gold quadrant */}
      <path d="M27 23h24v12c0 7.5-9 13-12 14.5-3-1.5-12-7-12-14.5V23z" fill="#D4AF37" />
      <text x="36" y="40" fontSize="14" fill="#003087" fontWeight="bold"
        fontFamily="serif" textAnchor="middle">♞</text>

      {/* Banner */}
      <path d="M10 51 Q27 55 44 51 L46 54 Q27 59 8 54 Z" fill="#D4AF37" opacity="0.9" />
      <text x="27" y="55" fontSize="4.2" fill="#003087" fontWeight="bold"
        fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">
        CAMBRIDGE
      </text>
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const [theme, setTheme]           = useState(SECTION_THEMES['hero-cambridge'])
  const navRef                      = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const targets = document.querySelectorAll('[data-nav-theme]')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        let best = null
        let bestRatio = 0
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio
            best = entry.target
          }
        })
        if (best) {
          const id = best.dataset.navTheme
          setTheme(SECTION_THEMES[id] ?? SECTION_THEMES.default)
        }
      },
      { threshold: [0, 0.1, 0.3, 0.5] }
    )

    targets.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    nav.style.setProperty('--nav-text',   theme.text)
    nav.style.setProperty('--nav-active', theme.active)
  }, [theme])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        ref={navRef}
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        role="banner"
        style={{
          '--nav-text':   theme.text,
          '--nav-active': theme.active,
        }}
      >
        <div className="navbar__inner">

          <Link
            to="/"
            className="navbar__logo"
            aria-label="Alpha Cambridge Exam Centre — Home"
            onClick={closeMenu}
          >
            <span className="navbar__logo-icon" aria-hidden="true">
              <CambridgeShield />
            </span>
            <span className="sr-only">Alpha Cambridge Exam Centre</span>
          </Link>

          <nav className="navbar__nav" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(p => !p)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

        </div>
      </header>

      <nav
        id="mobile-nav"
        className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        style={{
          '--nav-text':   theme.text,
          '--nav-active': theme.active,
        }}
      >
        {NAV_LINKS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
            }
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  )
}
