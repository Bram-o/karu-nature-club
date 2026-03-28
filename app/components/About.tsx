'use client'

import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-24 bg-green-50 relative overflow-hidden">
      {/* Background leaf decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <path
            d="M100 10C100 10 20 60 20 110C20 155 57 190 100 190C143 190 180 155 180 110C180 60 100 10 100 10Z"
            fill="#2C5F2D"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-forest bg-moss/20 px-4 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-forest mb-4">
            Who We Are
          </h2>
          <div className="w-16 h-1 bg-moss mx-auto rounded-full mb-6" />
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The Karatina University Nature Club is a student-led organization dedicated to
            fostering a deep connection between students and the natural world.
          </p>
        </div>

        {/* Two-column intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-playfair font-bold text-2xl text-forest mb-4">
              Our Story &amp; Mission
            </h3>
            <p className="font-lato text-gray-600 leading-relaxed mb-4">
              Founded within the halls of Karatina University, the KarU Nature Club emerged from
              a shared passion for Kenya&apos;s remarkable biodiversity. We believe that students
              who connect with nature become better stewards of our planet.
            </p>
            <p className="font-lato text-gray-600 leading-relaxed mb-8">
              Our mission is to inspire, educate, and empower the KarU community to appreciate,
              protect, and sustainably interact with the natural environment — from the slopes of
              Mt. Kenya to the forests of Aberdare.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* ── Button leading to /about page ── */}
              <Link
                href="/about"
                className="justify-center inline-flex items-center gap-2 bg-forest text-cream font-lato font-bold px-6 py-3 rounded-full hover:bg-forest/90 transition-colors"
              >
                Learn More About Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/register"
                className="justify-center inline-flex items-center gap-2 border-2 border-forest text-forest font-lato font-bold px-6 py-3 rounded-full hover:bg-forest/5 transition-colors"
              >
                Join Us
              </Link>
            </div>
          </div>

          {/* Image with floating stat */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-forest/20">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80"
                alt="Nature landscape"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-3 bg-forest text-cream rounded-xl p-4 shadow-xl">
              <div className="font-playfair font-bold text-3xl text-moss">5+</div>
              <div className="font-lato text-xs text-cream/70 uppercase tracking-wider">
                Years of Impact
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}