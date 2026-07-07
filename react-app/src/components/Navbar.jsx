import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/site'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Add a subtle shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? 'shadow-card' : ''
      } bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/75`}
    >
      <nav className="container-tpf flex items-center justify-between py-3" aria-label="Main">
        <Link to="/" className="shrink-0" aria-label="The Pitched Fort — home">
          <Logo variant="horizontal" />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-navy/10 text-navy'
                    : 'text-navy/70 hover:bg-navy/5 hover:text-navy'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-blush !px-5 !py-2.5 text-xs">
            Book Your Tent Party
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden rounded-full p-2 text-navy"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-navy/10 bg-cream">
          <div className="container-tpf flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base font-semibold transition ${
                    isActive ? 'bg-navy/10 text-navy' : 'text-navy/75 hover:bg-navy/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-blush mt-3 w-full">
              Book Your Tent Party
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
