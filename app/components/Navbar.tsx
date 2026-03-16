'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Team', href: '#team' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#blog' },
  { label: 'Register', href: '#register' },
  { label: 'Contact', href: '#contact' },
]

const BANNER_HEIGHT = 40 // px — matches banner's py-2 + text height

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')
  const [bannerVisible, setBannerVisible] = useState(true)
  const [bannerHeight, setBannerHeight] = useState(0)




  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > BANNER_HEIGHT)

      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section)
            break
          }
        }
      }
    }

    // Listen for banner dismissal from FloatingButtons
    const handleDismiss = () => {
      setBannerVisible(false)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('announcementDismissed', handleDismiss)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('announcementDismissed', handleDismiss)
    }
  }, [])

  // Sit just below the announcement banner, or at top-0 if it's dismissed.
  const navTop = bannerVisible ? 'top-[40px]' : 'top-0'

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'nav-glass shadow-lg shadow-forest/20'
        : 'bg-transparent'
        } ${navTop}`}
    >
      {/* rest of nav JSX unchanged... */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-20 h-20 flex items-center justify-center">
              <img src="/logo.png" alt="KarU Nature Club" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-playfair font-bold text-base tracking-wide text-cream transition-colors">
                KarU Nature Club
              </span>
              <span className="text-xs tracking-widest uppercase font-lato text-moss transition-colors">
                Karatina University
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href.slice(1))}
                className={`
                  px-4 py-2 text-sm font-lato font-medium tracking-wide rounded-lg transition-all duration-200
                  ${activeLink === link.href.slice(1)
                    ? 'text-moss bg-white/10'
                    : 'text-cream/80 hover:text-cream hover:bg-white/10'
                  }
                  ${link.label === 'Register' ? '!bg-moss !text-forest !font-bold hover:!bg-moss/90 px-5 ml-2 rounded-full' : ''}
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-forest/97 backdrop-blur-xl border-t border-moss/20 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setMenuOpen(false)
                setActiveLink(link.href.slice(1))
              }}
              className={`block px-4 py-3 rounded-lg text-sm font-lato font-medium transition-colors
                ${link.label === 'Register'
                  ? 'bg-moss text-forest font-bold text-center mt-2 rounded-full'
                  : 'text-cream/80 hover:text-cream hover:bg-white/10'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}