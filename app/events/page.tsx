'use client'


const events = [
  {
    title: 'Mt. Kenya Day Hike',
    date: 'March 22, 2025',
    time: '5:00 AM – 8:00 PM',
    category: 'Hike',
    categoryColor: 'bg-green-100 text-green-700',
    location: 'Mt. Kenya National Park',
    desc: 'A challenging but rewarding day hike to Point Lenana with breathtaking views of Kenya\'s highest mountain.',
    spots: '25 spots left',
    spotsColor: 'text-amber-600',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
    photosLink: '#',
  },
  {
    title: 'Earth Day Tree Planting',
    date: 'April 22, 2025',
    time: '8:00 AM – 1:00 PM',
    category: 'Conservation',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    location: 'Karatina Town Forest',
    desc: 'Annual Earth Day celebration with community tree planting targeting 500 indigenous trees for local reforestation.',
    spots: 'Open to all',
    spotsColor: 'text-green-600',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80',
    photosLink: '#',
  },
  {
    title: 'Bird Watching Safari',
    date: 'May 10, 2025',
    time: '6:00 AM – 4:00 PM',
    category: 'Wildlife',
    categoryColor: 'bg-amber-100 text-amber-700',
    location: 'Aberdare National Park',
    desc: 'A guided birding expedition to spot over 100 bird species in the diverse Aberdare ecosystem, with expert ornithologists.',
    spots: '15 spots left',
    spotsColor: 'text-red-500',
    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=400&q=80',
    photosLink: '#',
  },
  {
    title: 'Campus Photography Contest',
    date: 'May 25, 2025',
    time: '9:00 AM – 5:00 PM',
    category: 'Media',
    categoryColor: 'bg-blue-100 text-blue-700',
    location: 'KarU Campus',
    desc: 'Showcase your best nature photography from the semester for a chance to win prizes and be featured in our annual magazine.',
    spots: 'Open to all',
    spotsColor: 'text-green-600',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80',
    photosLink: '#',
  },
]

export default function AllEventsPage() {
  return (
    <>
      <main className="pt-20 min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-green-700 bg-green-100 px-4 py-1.5 rounded-full mb-4">
              All Events
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-forest mb-4">
              Upcoming Events
            </h1>
            <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-6" />
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our complete semester calendar of exciting events. From mountain hikes to conservation drives — join us for unforgettable experiences.
            </p>
          </div>

          {/* Events grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {events.map((event, i) => (
              <div key={i} className="card-hover bg-white border border-green-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                {/* Event image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`badge ${event.categoryColor} text-xs font-lato font-bold px-3 py-1`}>
                      {event.category}
                    </span>
                  </div>
                  {/* Google Photos link */}
                  <a
                    href={event.photosLink}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-lato px-3 py-1 rounded-full hover:bg-white/30 transition-colors flex items-center gap-1.5"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
                    Photos
                  </a>
                </div>

                {/* Event content */}
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-forest mb-2">{event.title}</h3>

                  <div className="flex flex-wrap gap-4 text-sm font-lato text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                      {event.time}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-lato text-gray-400 mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {event.location}
                  </div>

                  <p className="font-lato text-sm text-gray-500 leading-relaxed mb-5">{event.desc}</p>

                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-lato font-bold ${event.spotsColor}`}>
                      {event.spots}
                    </span>
                    <a
                      href="#register"
                      className="inline-flex items-center gap-2 bg-green-600 text-white font-lato font-bold text-sm px-5 py-2.5 rounded-full hover:bg-green-700 transition-colors"
                    >
                      Register
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back button */}
          <div className="text-center">
            <a href="/#events" className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 font-lato font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Back to Home
            </a>
          </div>
        </div>
      </main>

    </>
  )
}
