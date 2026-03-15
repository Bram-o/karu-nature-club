'use client'

const subCommittees = [
  {
    id: 1,
    name: 'Tree Planting',
    image: '/tree_planting.jpeg',
    color: 'bg-emerald-50 border-emerald-200',
    accentColor: 'text-emerald-700',
    leader: 'Jane Wanjiku',
    role: 'Chairperson',
    avatar: 'JW',
    profilePic: '#',
    desc: 'Organizing mountain hikes, camping expeditions, and adventure trails across Kenya\'s diverse terrain. From Mt. Kenya day hikes to multi-day Aberdare treks.',
    activities: ['Mt. Kenya Hikes', 'Camping Trips', 'Nature Trails', 'Rock Climbing'],
  },
  {
    id: 2,
    name: 'Debates',
    image: '/debates.jpeg',
    color: 'bg-green-50 border-green-200',
    accentColor: 'text-green-700',
    leader: 'Peter Kamau',
    role: 'Chairperson',
    avatar: 'PK',
    profilePic: '#',
    desc: 'Leading tree planting campaigns, clean-up drives, and environmental awareness programs to protect Kenya\'s natural ecosystems.',
    activities: ['Tree Planting', 'Clean-up Drives', 'Wildlife Surveys', 'Eco-Education'],
  },
  {
    id: 3,
    name: 'Birding',
    image: '/birding.jpeg',
    color: 'bg-teal-50 border-teal-200',
    accentColor: 'text-teal-700',
    leader: 'Sarah Njeri',
    role: 'Chairperson',
    avatar: 'SN',
    profilePic: '#',
    desc: 'Building strong bonds among members through structured team activities, leadership workshops, and collaborative challenges in natural settings.',
    activities: ['Leadership Workshops', 'Team Challenges', 'Bonding Retreats', 'Mentorship Programs'],
  },
  {
    id: 4,
    name: 'Wildlife & Birding',
    image: '/wildlife_&_birding.jpeg',
    color: 'bg-amber-50 border-amber-200',
    accentColor: 'text-amber-700',
    leader: 'David Mwangi',
    role: 'Chairperson',
    avatar: 'DM',
    profilePic: '#',
    desc: 'Exploring Kenya\'s rich wildlife through game drives, bird watching tours, and visits to national parks and wildlife conservancies.',
    activities: ['Bird Watching', 'Game Drives', 'Species Surveys', 'Wildlife Photography'],
  },
  {
    id: 5,
    name: 'Photography & Media',
    image: '/photo_&_media.jpeg',
    color: 'bg-blue-50 border-blue-200',
    accentColor: 'text-blue-700',
    leader: 'Grace Muthoni',
    role: 'Chairperson',
    avatar: 'GM',
    profilePic: '#',
    desc: 'Documenting our adventures and the natural world through photography, videography, and social media content to inspire others.',
    activities: ['Nature Photography', 'Video Production', 'Social Media', 'Photo Exhibitions'],
  },
  {
    id: 6,
    name: 'Community Outreach',
    image: '/community_outreach.jpeg',
    color: 'bg-purple-50 border-purple-200',
    accentColor: 'text-purple-700',
    leader: 'James Gitonga',
    role: 'Chairperson',
    avatar: 'JG',
    profilePic: '#',
    desc: 'Engaging local communities around Karatina through environmental education, school visits, and partnerships with conservation organizations.',
    activities: ['School Visits', 'Community Cleanups', 'Eco-Workshops', 'Partnerships'],
  },
  {
    id: 7,
    name: 'Research & Innovation',
    image: '/research_&_innovation.jpeg',
    color: 'bg-rose-50 border-rose-200',
    accentColor: 'text-rose-700',
    leader: 'Mary Wambui',
    role: 'Chairperson',
    avatar: 'MW',
    profilePic: '#',
    desc: 'Conducting environmental research, monitoring ecosystem health, and developing innovative solutions to local environmental challenges.',
    activities: ['Field Research', 'Data Collection', 'Eco-Innovation', 'Annual Reports'],
  },
  {
    id: 8,
    name: 'Research & Innovation',
    image: '/research_&_innovation.jpeg',
    color: 'bg-rose-50 border-rose-200',
    accentColor: 'text-rose-700',
    leader: 'Mary Wambui',
    role: 'Chairperson',
    avatar: 'MW',
    profilePic: '#',
    desc: 'Conducting environmental research, monitoring ecosystem health, and developing innovative solutions to local environmental challenges.',
    activities: ['Field Research', 'Data Collection', 'Eco-Innovation', 'Annual Reports'],
  },
  {
    id: 9,
    name: 'Research & Innovation',
    image: '/research_&_innovation.jpeg',
    color: 'bg-rose-50 border-rose-200',
    accentColor: 'text-rose-700',
    leader: 'Mary Wambui',
    role: 'Chairperson',
    avatar: 'MW',
    profilePic: '#',
    desc: 'Conducting environmental research, monitoring ecosystem health, and developing innovative solutions to local environmental challenges.',
    activities: ['Field Research', 'Data Collection', 'Eco-Innovation', 'Annual Reports'],
  },
]

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-forest relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 5) * 25}%`,
              top: `${Math.floor(i / 5) * 33}%`,
              fontSize: '80px',
              transform: `rotate(${i * 15}deg)`,
            }}
          >
            🌿
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-moss bg-moss/20 px-4 py-1.5 rounded-full mb-4">
            Sub-Committees
          </span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-cream mb-4">
            Activities & Committees
          </h2>
          <div className="w-16 h-1 bg-moss mx-auto rounded-full mb-6" />
          <p className="font-lato text-lg text-cream/70 max-w-2xl mx-auto">
            Seven dedicated committees driving our mission — each led by passionate students committed to their focus area.
          </p>
        </div>

        {/* Committee grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
          {subCommittees.slice(0, 3).map((committee) => (
            <div
              key={committee.id}
              onClick={() => window.location.href = `/activities/${committee.id}`}
              className="bg-white rounded-2xl overflow-hidden card-hover border border-transparent hover:border-moss/30 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={committee.image}
                  alt={committee.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`badge ${committee.accentColor} bg-white/90 text-xs font-lato font-bold px-3 py-1`}>
                    #{committee.id}
                  </span>
                </div>
              </div>

              <div className={`p-6 ${committee.color} border-b`}>
                <h3 className={`font-playfair font-bold text-lg ${committee.accentColor} mb-2`}>
                  {committee.name}
                </h3>
                <div className="flex items-center gap-3">
                  {committee.profilePic ? (
                    <img
                      src={committee.profilePic}
                      alt={`Photo of ${committee.leader}`}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-forest/10 flex items-center justify-center text-forest font-bold text-sm font-lato">
                      {committee.avatar}
                    </div>
                  )}
                  <div>
                    <p className="font-lato font-bold text-sm text-gray-800">{committee.leader}</p>
                    <p className="font-lato text-xs text-gray-400">{committee.role}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="font-lato text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {committee.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {committee.activities.slice(0, 2).map((act) => (
                    <span key={act} className="text-xs font-lato font-medium bg-forest/5 text-forest border border-forest/20 px-3 py-1 rounded-full">
                      {act}
                    </span>
                  ))}
                  {committee.activities.length > 2 && (
                    <span className="text-xs font-lato font-medium bg-forest/5 text-forest border border-forest/20 px-3 py-1 rounded-full">
                      +{committee.activities.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all activities CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <a href="/activities" className="inline-flex items-center gap-2 bg-moss text-forest font-lato font-bold px-8 py-3 rounded-full hover:bg-moss/90 transition-colors">
            View All Activities
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
