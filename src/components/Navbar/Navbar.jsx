import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

const portfolioGroups = [
  {
    label: 'Sessions',
    links: [
      { label: 'Portraits', path: '/portfolio?category=portraits' },
      { label: 'Pre Weddings', path: '/portfolio?category=pre' },
      { label: 'Engagement', path: '/portfolio?category=engage' },
    ],
  },
  {
    label: 'Wedding Traditions',
    links: [
      { label: 'Tamil Weddings', path: '/portfolio?category=tamil' },
      { label: 'Telugu Weddings', path: '/portfolio?category=telugu' },
      { label: 'Brahmin Weddings', path: '/portfolio?category=brahmin' },
      { label: 'Christian Weddings', path: '/portfolio?category=christian' },
      { label: 'Muslim Weddings', path: '/portfolio?category=muslim' },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdownRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const isPortfolioPage = location.pathname === '/portfolio'

  /* Section navigation */
  const handleSectionClick = (e, targetId) => {
    e.preventDefault()

    setMenuOpen(false)
    setDropdownOpen(false)

    if (location.pathname !== '/') {
      navigate('/')

      setTimeout(() => {
        const element = document.getElementById(targetId)

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          })
        }
      }, 100)
    } else {
      const element = document.getElementById(targetId)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        })
      }
    }
  }

  /* Navbar scroll state */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handler = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

  /* Escape key */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false)
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  /* Prevent background scrolling on mobile menu */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  /* Close menus after route changes */
  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [location.pathname, location.search])

  return (
    <header
      className={`
        navbar
        ${scrolled ? 'navbar--scrolled' : ''}
        ${menuOpen ? 'navbar--open' : ''}
        ${isPortfolioPage ? 'navbar--solid' : ''}
      `}
    >

      <div className="navbar__inner">

        {/* LEFT LINKS */}
        <nav
          className="navbar__links navbar__links--left"
          aria-label="Left navigation"
        >

          {/* Home */}
          <Link
            to="/"
            className={`
              navbar__link
              ${location.pathname === '/'
                ? 'navbar__link--active'
                : ''}
            `}
          >
            Home
          </Link>


          {/* About */}
          <a
            href="#about"
            className="navbar__link"
            onClick={(e) => handleSectionClick(e, 'about')}
          >
            About
          </a>


          {/* Portfolio Dropdown */}
          <div
            className={`
              navbar__dropdown-wrapper
              ${dropdownOpen
                ? 'navbar__dropdown-wrapper--open'
                : ''}
            `}
            ref={dropdownRef}
          >

            <button
              type="button"
              className="navbar__link navbar__link--dropdown-trigger"
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Portfolio

              <span className="navbar__dropdown-caret">
                ▾
              </span>
            </button>


            <div
              className="navbar__mega"
              role="menu"
            >

              {portfolioGroups.map((group) => (
                <div
                  className="navbar__mega-col"
                  key={group.label}
                >

                  <span className="navbar__mega-eyebrow">
                    {group.label}
                  </span>

                  <ul className="navbar__mega-list">

                    {group.links.map(({ label, path }) => (
                      <li
                        key={label}
                        role="none"
                      >

                        <Link
                          to={path}
                          role="menuitem"
                          className="navbar__dropdown-item"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {label}
                        </Link>

                      </li>
                    ))}

                  </ul>

                </div>
              ))}

            </div>

          </div>

        </nav>


        {/* LOGO */}
        <Link
          to="/"
          className="navbar__logo"
          aria-label="SnapCorner Photography — Home"
        >

          <span
            className="navbar__logo-rule"
            aria-hidden="true"
          />

          <span className="navbar__logo-text">
            SNAPCORNER PHOTOGRAPHY
          </span>

          <span
            className="navbar__logo-rule"
            aria-hidden="true"
          />

        </Link>


        {/* RIGHT LINKS */}
        <nav
          className="navbar__links navbar__links--right"
          aria-label="Right navigation"
        >

          <a
            href="#gallery"
            className="navbar__link"
            onClick={(e) => handleSectionClick(e, 'gallery')}
          >
            Gallery
          </a>


          <a
            href="#contact"
            className="navbar__link navbar__link--cta"
            onClick={(e) => handleSectionClick(e, 'contact')}
          >
            Enquire
          </a>

        </nav>


        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className={`
            navbar__hamburger
            ${menuOpen
              ? 'navbar__hamburger--open'
              : ''}
          `}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >

          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />

        </button>

      </div>


      {/* MOBILE MENU */}
      <div
        className={`
          navbar__mobile-menu
          ${menuOpen
            ? 'navbar__mobile-menu--open'
            : ''}
        `}
      >

        <nav className="navbar__mobile-nav">

          {/* Home */}
          <Link
            to="/"
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>


          {/* About */}
          <a
            href="#about"
            className="navbar__mobile-link"
            onClick={(e) =>
              handleSectionClick(e, 'about')
            }
          >
            About
          </a>


          {/* Portfolio */}
          <details className="navbar__mobile-dropdown">

            <summary className="navbar__mobile-link">
              Portfolio

              <span className="navbar__mobile-caret">
                ▾
              </span>
            </summary>


            {portfolioGroups.map((group) => (
              <div
                className="navbar__mobile-group"
                key={group.label}
              >

                <span className="navbar__mobile-eyebrow">
                  {group.label}
                </span>

                <ul className="navbar__mobile-sub">

                  {group.links.map(({ label, path }) => (
                    <li key={label}>

                      <Link
                        to={path}
                        className="navbar__mobile-sublink"
                      >
                        {label}
                      </Link>

                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </details>


          {/* Gallery */}
          <a
            href="#gallery"
            className="navbar__mobile-link"
            onClick={(e) =>
              handleSectionClick(e, 'gallery')
            }
          >
            Gallery
          </a>


          {/* Contact */}
          <a
            href="#contact"
            className="navbar__mobile-link navbar__mobile-link--cta"
            onClick={(e) =>
              handleSectionClick(e, 'contact')
            }
          >
            Enquire
          </a>

        </nav>

      </div>

    </header>
  )
}