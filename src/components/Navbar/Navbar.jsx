import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import clgLogo from '../../assets/images/clg logo.png'
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
  { label: 'Home',            to: '/#' },
  { label: 'About',           to: '/#about' },
  { label: 'Services',        to: '/#services' },
  { label: 'FAQ',             to: '/#faq' },
  { label: 'Contact',         to: '/#contact' },
]

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
              <img src={clgLogo} alt="Alpha Cambridge Exam Centre Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </span>
            <span className="navbar__logo-text">Alpha Cambridge</span>
          </Link>

          <nav className="navbar__nav" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, to }) => (
              <a
                key={to}
                href={to}
                className="navbar__link"
              >
                {label}
              </a>
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
          <a
            key={to}
            href={to}
            className="navbar__mobile-link"
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  )
}
