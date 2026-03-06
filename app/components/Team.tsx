'use client'

const team = [
  { name: 'Alex Kariuki', role: 'Club President', avatar: 'AK', color: 'bg-forest-100', twitter: '#', linkedin: '#' },
  { name: 'Brenda Wanjiru', role: 'Vice President', avatar: 'BW', color: 'bg-moss-100', twitter: '#', linkedin: '#' },
  { name: 'Collins Mugo', role: 'Secretary General', avatar: 'CM', color: 'bg-earth-100', twitter: '#', linkedin: '#' },
  { name: 'Diana Njoki', role: 'Treasurer', avatar: 'DN', color: 'bg-blue-100', twitter: '#', linkedin: '#' },
  { name: 'Edwin Mwenda', role: 'Publicity & Media', avatar: 'EM', color: 'bg-amber-100', twitter: '#', linkedin: '#' },
  { name: 'Faith Wanjiku', role: 'Events Coordinator', avatar: 'FW', color: 'bg-rose-100', twitter: '#', linkedin: '#' },
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-xs font-body font-bold uppercase tracking-widest text-moss-600 bg-moss-100 px-4 py-1.5 rounded-full mb-4">
            Leadership
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-forest-700 mb-4">
            Meet Our Team
          </h2>
          <div className="w-16 h-1 bg-moss-500 mx-auto rounded-full mb-6" />
          <p className="font-body text-lg text-gray-500 max-w-xl mx-auto">
            Passionate student leaders driving the KarU Nature Club's vision and activities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 animate-on-scroll">
          {team.map((member, i) => (
            <div key={i} className="card-hover text-center group">
              {/* Avatar */}
              <div className={`w-20 h-20 mx-auto rounded-2xl ${member.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <span className="font-display font-bold text-xl text-forest-700">{member.avatar}</span>
              </div>
              <h4 className="font-display font-bold text-sm text-forest-800 mb-1">{member.name}</h4>
              <p className="font-body text-xs text-gray-400 mb-3">{member.role}</p>
              {/* Social icons */}
              <div className="flex justify-center gap-2">
                <a href={member.twitter} className="w-7 h-7 rounded-full bg-gray-100 hover:bg-sky-100 hover:text-sky-600 flex items-center justify-center transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.74-8.86L2.25 2.25h6.93l4.25 5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href={member.linkedin} className="w-7 h-7 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 flex items-center justify-center transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Full team CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <a href="#" className="inline-flex items-center gap-2 border-2 border-forest-300 text-forest-700 font-body font-bold px-8 py-3 rounded-full hover:bg-forest-50 transition-colors">
            View All Members
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
