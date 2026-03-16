'use client'

const whyJoin = [
  {
    image: '/about/hiking_and_adventure.jpeg',
    objectPosition: 'top',
    title: 'Adventure & Hikes',
    desc: 'Scale Mt. Kenya and explore Kenya\'s most stunning trails with a community of passionate hikers.',
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
    desc: 'Capture the beauty of Kenya\'s biodiversity and share your perspective with the world.',
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

export default function About() {
  return (
    <section id="about" className="py-24 bg-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-5">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M100 10C100 10 20 60 20 110C20 155 57 190 100 190C143 190 180 155 180 110C180 60 100 10 100 10Z"
            fill="#2C5F2D" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-forest bg-moss/20 px-4 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-forest mb-4">
            Who We Are
          </h2>
          <div className="w-16 h-1 bg-moss mx-auto rounded-full mb-6" />
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The Karatina University Nature Club is a student-led organization dedicated to fostering a deep connection between students and the natural world.
          </p>
        </div>

        {/* Two-column intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-on-scroll">
          <div>
            <h3 className="font-playfair font-bold text-2xl text-forest mb-4">Our Story & Mission</h3>
            <p className="font-lato text-gray-600 leading-relaxed mb-4">
              Founded within the halls of Karatina University, the KarU Nature Club emerged from a shared passion for Kenya's remarkable biodiversity. We believe that students who connect with nature become better stewards of our planet.
            </p>
            <p className="font-lato text-gray-600 leading-relaxed mb-6">
              Our mission is to inspire, educate, and empower the KarU community to appreciate, protect, and sustainably interact with the natural environment — from the slopes of Mt. Kenya to the forests of Aberdare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#activities" className="justify-center inline-flex items-center gap-2 bg-forest text-cream font-lato font-bold px-6 py-3 rounded-full hover:bg-forest/90 transition-colors">
                Our Activities
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="#register" className="justify-center inline-flex items-center gap-2 border-2 border-forest text-forest font-lato font-bold px-6 py-3 rounded-full hover:bg-forest/5 transition-colors">
                Join Us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-forest/20">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80"
                alt="Nature landscape"
                className="w-full h-72 object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-forest text-cream rounded-xl p-4 shadow-xl">
              <div className="font-playfair font-bold text-3xl text-moss">5+</div>
              <div className="font-lato text-xs text-cream/70 uppercase tracking-wider">Years of Impact</div>
            </div>
          </div>
        </div>

        {/* Why Join Us */}
        <div className="animate-on-scroll">
          <div className="text-center mb-12">
            <h3 className="font-playfair font-bold text-3xl text-forest mb-3">Why Join Us?</h3>
            <p className="font-lato text-gray-500 max-w-lg mx-auto">
              Being part of KarU Nature Club opens doors to unique experiences and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJoin.map((item, i) => (
              <div
                key={i}
                className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                {/* image top half */}
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover ${item.objectPosition ? `object-${item.objectPosition}` : ''}`}
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair font-bold text-lg text-forest mb-2">{item.title}</h4>
                  <p className="font-lato text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
