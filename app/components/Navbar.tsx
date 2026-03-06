'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 top-8 ${
        scrolled
          ? 'nav-glass shadow-lg shadow-forest-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-0 group">
            <div className="w-40 h-20 flex items-center justify-center">
            <img src="/logo.png" alt="KarU Nature Club" className="w-40 h-40 pt-3 pb-2" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-display font-bold text-base tracking-wide transition-colors ${scrolled ? 'text-cream' : 'text-cream'}`}>
                KarU Nature Club
              </span>
              <span className={`text-xs tracking-widest uppercase font-body transition-colors ${scrolled ? 'text-moss-400' : 'text-moss-300'}`}>
                Karatina University
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href.slice(1))}
                className={`
                  px-3 py-2 text-sm font-body font-medium tracking-wide rounded-md transition-all duration-200
                  ${activeLink === link.href.slice(1)
                    ? 'text-moss-400 bg-white/10'
                    : 'text-cream/80 hover:text-cream hover:bg-white/10'
                  }
                  ${link.label === 'Register' ? '!bg-moss-500 !text-forest-900 !font-bold hover:!bg-moss-400 px-4 ml-2 rounded-full' : ''}
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-forest-800/97 backdrop-blur-xl border-t border-moss-500/20 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-body font-medium transition-colors
                ${link.label === 'Register'
                  ? 'bg-moss-500 text-forest-900 font-bold text-center mt-2 rounded-full'
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
