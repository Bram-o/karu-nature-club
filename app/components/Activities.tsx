'use client'
import { useState } from 'react'

const subCommittees = [
  {
    id: 1,
    name: 'Hikes & Adventure',
    icon: '🏔️',
    color: 'bg-emerald-50 border-emerald-200',
    accentColor: 'text-emerald-700',
    leader: 'Jane Wanjiku',
    role: 'Chairperson',
    avatar: 'JW',
    desc: 'Organizing mountain hikes, camping expeditions, and adventure trails across Kenya\'s diverse terrain. From Mt. Kenya day hikes to multi-day Aberdare treks.',
    activities: ['Mt. Kenya Hikes', 'Camping Trips', 'Nature Trails', 'Rock Climbing'],
  },
  {
    id: 2,
    name: 'Conservation & Environment',
    icon: '🌿',
    color: 'bg-green-50 border-green-200',
    accentColor: 'text-green-700',
    leader: 'Peter Kamau',
    role: 'Chairperson',
    avatar: 'PK',
    desc: 'Leading tree planting campaigns, clean-up drives, and environmental awareness programs to protect Kenya\'s natural ecosystems.',
    activities: ['Tree Planting', 'Clean-up Drives', 'Wildlife Surveys', 'Eco-Education'],
  },
  {
    id: 3,
    name: 'Team Building',
    icon: '🤝',
    color: 'bg-teal-50 border-teal-200',
    accentColor: 'text-teal-700',
    leader: 'Sarah Njeri',
    role: 'Chairperson',
    avatar: 'SN',
    desc: 'Building strong bonds among members through structured team activities, leadership workshops, and collaborative challenges in natural settings.',
    activities: ['Leadership Workshops', 'Team Challenges', 'Bonding Retreats', 'Mentorship Programs'],
  },
  {
    id: 4,
    name: 'Wildlife & Birding',
    icon: '🦅',
    color: 'bg-amber-50 border-amber-200',
    accentColor: 'text-amber-700',
    leader: 'David Mwangi',
    role: 'Chairperson',
    avatar: 'DM',
    desc: 'Exploring Kenya\'s rich wildlife through game drives, bird watching tours, and visits to national parks and wildlife conservancies.',
    activities: ['Bird Watching', 'Game Drives', 'Species Surveys', 'Wildlife Photography'],
  },
  {
    id: 5,
    name: 'Photography & Media',
    icon: '📸',
    color: 'bg-blue-50 border-blue-200',
    accentColor: 'text-blue-700',
    leader: 'Grace Muthoni',
    role: 'Chairperson',
    avatar: 'GM',
    desc: 'Documenting our adventures and the natural world through photography, videography, and social media content to inspire others.',
    activities: ['Nature Photography', 'Video Production', 'Social Media', 'Photo Exhibitions'],
  },
  {
    id: 6,
    name: 'Community Outreach',
    icon: '🌍',
    color: 'bg-purple-50 border-purple-200',
    accentColor: 'text-purple-700',
    leader: 'James Gitonga',
    role: 'Chairperson',
    avatar: 'JG',
    desc: 'Engaging local communities around Karatina through environmental education, school visits, and partnerships with conservation organizations.',
    activities: ['School Visits', 'Community Cleanups', 'Eco-Workshops', 'Partnerships'],
  },
  {
    id: 7,
    name: 'Research & Innovation',
    icon: '🔬',
    color: 'bg-rose-50 border-rose-200',
    accentColor: 'text-rose-700',
    leader: 'Mary Wambui',
    role: 'Chairperson',
    avatar: 'MW',
    desc: 'Conducting environmental research, monitoring ecosystem health, and developing innovative solutions to local environmental challenges.',
    activities: ['Field Research', 'Data Collection', 'Eco-Innovation', 'Annual Reports'],
  },
  {
    id: 8,
    name: 'Research & Innovation',
    icon: '🔬',
    color: 'bg-rose-50 border-rose-200',
    accentColor: 'text-rose-700',
    leader: 'Mary Wambui',
    role: 'Chairperson',
    avatar: 'MW',
    desc: 'Conducting environmental research, monitoring ecosystem health, and developing innovative solutions to local environmental challenges.',
    activities: ['Field Research', 'Data Collection', 'Eco-Innovation', 'Annual Reports'],
  },
  {
    id: 9,
    name: 'Research & Innovation',
    icon: '🔬',
    color: 'bg-rose-50 border-rose-200',
    accentColor: 'text-rose-700',
    leader: 'Mary Wambui',
    role: 'Chairperson',
    avatar: 'MW',
    desc: 'Conducting environmental research, monitoring ecosystem health, and developing innovative solutions to local environmental challenges.',
    activities: ['Field Research', 'Data Collection', 'Eco-Innovation', 'Annual Reports'],
  },
]

export default function Activities() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="activities" className="py-24 bg-forest-700 relative overflow-hidden">
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
          <span className="inline-block text-xs font-body font-bold uppercase tracking-widest text-moss-400 bg-moss-500/20 px-4 py-1.5 rounded-full mb-4">
            Sub-Committees
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-cream mb-4">
            Activities & Committees
          </h2>
          <div className="w-16 h-1 bg-moss-500 mx-auto rounded-full mb-6" />
          <p className="font-body text-lg text-cream/70 max-w-2xl mx-auto">
            Seven dedicated committees driving our mission — each led by passionate students committed to their focus area.
          </p>
        </div>

        {/* Committee grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
          {subCommittees.map((committee) => (
            <div
              key={committee.id}
              className={`bg-white rounded-2xl overflow-hidden card-hover cursor-pointer border ${
                active === committee.id ? 'ring-2 ring-moss-500' : 'border-transparent'
              }`}
              onClick={() => setActive(active === committee.id ? null : committee.id)}
            >
              <div className={`p-6 ${committee.color} border-b`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{committee.icon}</span>
                  <span className={`badge ${committee.accentColor} bg-white/60 text-xs`}>
                    #{committee.id}
                  </span>
                </div>
                <h3 className={`font-display font-bold text-lg ${committee.accentColor}`}>
                  {committee.name}
                </h3>
              </div>

              <div className="p-6">
                {/* Leader */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-forest-100 flex items-center justify-center text-forest-700 font-bold text-sm font-body">
                    {committee.avatar}
                  </div>
                  <div>
                    <p className="font-body font-bold text-sm text-gray-800">{committee.leader}</p>
                    <p className="font-body text-xs text-gray-400">{committee.role}</p>
                  </div>
                </div>

                <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                  {committee.desc}
                </p>

                {/* Expanded activities */}
                {active === committee.id && (
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <p className="font-body text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Key Activities</p>
                    <div className="flex flex-wrap gap-2">
                      {committee.activities.map((act) => (
                        <span key={act} className="text-xs font-body font-medium bg-forest-50 text-forest-700 border border-forest-200 px-3 py-1 rounded-full">
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button className={`mt-4 text-xs font-body font-bold ${committee.accentColor} flex items-center gap-1 hover:gap-2 transition-all`}>
                  {active === committee.id ? 'Show less' : 'View details'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={active === committee.id ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
