'use client'
import { useState, useEffect } from 'react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80',
    title: 'Discover the Wild',
    subtitle: "Explore Kenya's breathtaking landscapes with fellow nature enthusiasts",
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
        className="absolute inset-0"
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
      <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />

      {/* Decorative leaf */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-5 hidden md:block">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M100 10C100 10 20 60 20 110C20 155 57 190 100 190C143 190 180 155 180 110C180 60 100 10 100 10Z" fill="white" />
          <path d="M100 20C100 20 100 170 100 190" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      {/* Content — tighter padding on mobile */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-32 sm:pt-32 sm:pb-40 md:py-36">
        <div className="max-w-2xl">

          {/* Badge — smaller on mobile */}
          <div className="inline-flex items-center gap-2 bg-moss/20 border border-moss/30 text-moss px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-lato font-medium mb-4 sm:mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-moss rounded-full animate-pulse" />
            Karatina University Nature Club
          </div>

          {/* Title — smaller on mobile */}
          <h1
            className="font-playfair font-bold text-cream leading-tight mb-3 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(20px)' : 'translateY(0)',
              transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
            }}
          >
            {slide.title}
          </h1>

          {/* Subtitle — smaller and shorter on mobile */}
          <p
            className="font-lato text-sm sm:text-lg text-cream/80 mb-5 sm:mb-8 leading-relaxed max-w-xl"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(20px)' : 'translateY(0)',
              transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
            }}
          >
            {slide.subtitle}
          </p>

          {/* Buttons — smaller padding on mobile */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href={slide.ctaHref}
              className="inline-flex items-center gap-2 bg-moss text-forest font-lato font-bold px-5 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base rounded-full hover:bg-moss/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-moss/30"
            >
              {slide.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream font-lato font-medium px-5 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-16 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={'transition-all duration-300 rounded-full ' + (i === current ? 'w-6 h-2 sm:w-8 sm:h-2.5 bg-moss' : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cream/40 hover:bg-cream/60')}
          />
        ))}
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <div className="absolute bottom-10 right-8 flex-col items-center gap-2 text-cream/50 z-10 hidden sm:flex">
        <span className="text-xs font-lato tracking-widest uppercase rotate-90 origin-center mb-4">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-cream/50 to-transparent" />
      </div>

      {/* Stats bar — more compact on mobile */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-forest/80 backdrop-blur-md border-t border-moss/20 px-3 py-2 sm:px-8 sm:py-4 rounded-t-2xl flex gap-2 sm:gap-8 justify-around">
            {[
              { value: '500+', label: 'Active Members' },
              { value: '9', label: 'Sub-Committees' },
              { value: '10+', label: 'Events Per Year' },
              { value: '2012', label: 'Founded' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-playfair font-bold text-base sm:text-2xl text-moss">{stat.value}</div>
                <div className="font-lato text-[8px] sm:text-xs text-cream/60 tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}