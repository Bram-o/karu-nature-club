import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const whyJoin = [
  {
    image: '/about/hiking_and_adventure.jpeg',
    objectPosition: 'top',
    title: 'Adventure & Hikes',
    desc: "Scale Mt. Kenya and explore Kenya's most stunning trails with a community of passionate hikers.",
  },
  {
    image: '/about/conservation.jpeg',
    objectPosition: 'bottom',
    title: 'Conservation Impact',
    desc: 'Lead real environmental change through tree planting, clean-up drives, and conservation education.',
  },
  {
    image: '/about/leadership.jpeg',
    objectPosition: 'center',
    title: 'Leadership Growth',
    desc: 'Develop leadership, teamwork, and communication skills through our structured sub-committees.',
  },
  {
    image: '/about/nature_photography.jpeg',
    objectPosition: 'top',
    title: 'Nature Photography',
    desc: "Capture the beauty of Kenya's biodiversity and share your perspective with the world.",
  },
  {
    image: '/about/community.jpeg',
    objectPosition: 'center',
    title: 'Community Network',
    desc: 'Connect with like-minded students, alumni, and environmental professionals across Kenya.',
  },
  {
    image: '/about/certificates_and_awards.jpeg',
    objectPosition: 'bottom',
    title: 'Certificates & Awards',
    desc: 'Earn recognition for your contributions and boost your professional portfolio.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-green-50 min-h-screen">

        {/* ── Hero intro ── */}
        <section className="py-20 bg-forest relative overflow-hidden">
          {/* subtle leaf watermark */}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-96 h-96" fill="none">
              <path
                d="M100 10C100 10 20 60 20 110C20 155 57 190 100 190C143 190 180 155 180 110C180 60 100 10 100 10Z"
                fill="#fff"
              />
            </svg>
          </div>

          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-moss bg-white/10 px-4 py-1.5 rounded-full mb-4">
              About Us
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-cream mb-6">
              Who We Are
            </h1>
            <div className="w-16 h-1 bg-moss mx-auto rounded-full mb-6" />
            <p className="font-lato text-lg text-cream/80 leading-relaxed mb-4">
              The Karatina University Nature Club is a student-led organization dedicated to
              fostering a deep connection between students and the natural world.
            </p>
            <p className="font-lato text-base text-cream/70 leading-relaxed mb-4">
              Founded within the halls of Karatina University, the KarU Nature Club emerged from
              a shared passion for Kenya&apos;s remarkable biodiversity. We believe that students
              who connect with nature become better stewards of our planet.
            </p>
            <p className="font-lato text-base text-cream/70 leading-relaxed">
              Our mission is to inspire, educate, and empower the KarU community to appreciate,
              protect, and sustainably interact with the natural environment — from the slopes of
              Mt. Kenya to the forests of Aberdare.
            </p>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-3 divide-x divide-gray-100 text-center">
            {[
              { value: '15+', label: 'Years of Impact' },
              { value: '500+', label: 'Active Members' },
              { value: '20+', label: 'Events Per Year' },
            ].map((stat) => (
              <div key={stat.label} className="px-4">
                <div className="font-playfair font-bold text-3xl text-forest">{stat.value}</div>
                <div className="font-lato text-xs text-gray-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Join Us cards ── */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-forest mb-3">
                Why Join Us?
              </h2>
              <p className="font-lato text-gray-500 max-w-lg mx-auto">
                Being part of KarU Nature Club opens doors to unique experiences and opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyJoin.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-44 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover object-${item.objectPosition}`}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-playfair font-bold text-lg text-forest mb-2">
                      {item.title}
                    </h4>
                    <p className="font-lato text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-forest text-cream font-lato font-bold px-8 py-3 rounded-full hover:bg-forest/90 transition-colors shadow-lg shadow-forest/20"
              >
                Join the Club
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}