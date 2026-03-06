'use client'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2200)
    const unmount = setTimeout(() => setMounted(false), 2800)
    return () => {
      clearTimeout(timer)
      clearTimeout(unmount)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      id="preloader"
      className={hidden ? 'hidden' : ''}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(135deg, #1e431f 0%, #2C5F2D 50%, #255226 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        transition: 'opacity 0.6s ease, visibility 0.6s ease',
        opacity: hidden ? 0 : 1,
        visibility: hidden ? 'hidden' : 'visible',
      }}
    >
      {/* Animated leaf logo */}
      <div className="relative mb-3">
        <svg width="180" height="150" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ animation: 'spin 3s linear infinite' }}>
          
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/logo.png" alt="KarU Nature Club" className="w-80 h-50 pt-3 pb-2" />
        </div>
      </div>

      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: '1.75rem',
        fontWeight: 700,
        color: '#F8F5EE',
        letterSpacing: '0.05em',
        marginBottom: '4px',
      }}>
        KarU Nature Club
      </h1>
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontSize: '0.85rem',
        color: 'rgba(151, 188, 98, 0.9)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
      }}>
        Karatina University
      </p>

      {/* Loading bar */}
      <div style={{
        marginTop: '32px',
        width: '160px',
        height: '3px',
        background: 'rgba(255,255,255,0.15)',
        borderRadius: '999px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, #97BC62, #c2d9a0)',
          borderRadius: '999px',
          animation: 'loadBar 2s ease-out forwards',
        }} />
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes loadBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}
