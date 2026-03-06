'use client'
import { useState, useEffect } from 'react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80',
    title: 'Discover the Wild',
    subtitle: 'Explore Kenya\'s breathtaking landscapes with fellow nature enthusiasts',
    cta: 'Join the Adventure',
    ctaHref: '#register',
  },
  {
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=80',
    title: 'Protect Our Earth',
    subtitle: 'Leading conservation efforts and environmental stewardship across Karatina and beyond',
    cta: 'Our Activities',
    ctaHref: '#activities',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
        setAnimating(false)
      }, 300)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (idx: number) => {
    if (idx === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 300)
  }

  const slide = slides[current]

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundImage: `url('${slide.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: animating ? 0.5 : 1,
          transform: animating ? 'scale(1.03)' : 'scale(1)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 via-forest-800/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />

      {/* Decorative leaf pattern */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M100 10C100 10 20 60 20 110C20 155 57 190 100 190C143 190 180 155 180 110C180 60 100 10 100 10Z"
            fill="white" />
          <path d="M100 20C100 20 100 170 100 190" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 md:py-36">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-moss-500/20 border border-moss-400/30 text-moss-300 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-moss-400 rounded-full animate-pulse-slow" />
            Karatina University Nature Club
          </div>

          <h1
            className="font-display font-bold text-cream leading-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(20px)' : 'translateY(0)',
              transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
            }}
          >
            {slide.title}
          </h1>

          <p
            className="font-body text-lg text-cream/80 mb-8 leading-relaxed max-w-xl"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(20px)' : 'translateY(0)',
              transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
            }}
          >
            {slide.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={slide.ctaHref}
              className="inline-flex items-center gap-2 bg-moss-500 text-forest-900 font-body font-bold px-8 py-3.5 rounded-full hover:bg-moss-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-moss-500/30"
            >
              {slide.cta}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream font-body font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2.5 bg-moss-400' : 'w-2.5 h-2.5 bg-cream/40 hover:bg-cream/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 flex flex-col items-center gap-2 text-cream/50 z-10">
        <span className="text-xs font-body tracking-widest uppercase rotate-90 origin-center mb-4">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-cream/50 to-transparent" />
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-forest-900/80 backdrop-blur-md border-t border-moss-500/20 px-8 py-4 rounded-t-2xl flex flex-wrap gap-8 justify-around">
            {[
              { value: '500+', label: 'Active Members' },
              { value: '9', label: 'Sub-Committees' },
              { value: '10+', label: 'Events Per Year' },
              { value: '2019', label: 'Founded' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-2xl text-moss-400">{stat.value}</div>
                <div className="font-body text-xs text-cream/60 tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
