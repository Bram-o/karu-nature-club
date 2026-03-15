'use client'

const team = [
  { name: 'Mark Lairenge', role: 'Club President', avatar: 'ML', image: '#', color: 'bg-forest/10', email: '#', linkedin: '#' },
  { name: 'Faith Mumbi', role: 'Vice President', avatar: 'FM', image: '#', color: 'bg-moss/20', email: '#', linkedin: '#' },
  { name: 'Harun Wainaina', role: 'Organizing Secretary', avatar: 'HW', image: '#', color: 'bg-earth/20', email: '#', linkedin: '#' },
  { name: 'David mugo', role: 'Treasurer', avatar: 'DM', image: '#', color: 'bg-blue-100', email: '#', linkedin: '#' },
  { name: 'Mary Macharia', role: 'Secretary', avatar: 'MM', image: '#', color: 'bg-amber-100', email: '#', linkedin: '#' },
  { name: 'Irene Kimani', role: 'Vice Secretary', avatar: 'IK', image: '#', color: 'bg-rose-100', email: '#', linkedin: '#' },
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-emerald-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-forest bg-moss/20 px-4 py-1.5 rounded-full mb-4">
            Leadership
          </span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-forest mb-4">
            Meet Our Team
          </h2>
          <div className="w-16 h-1 bg-moss mx-auto rounded-full mb-6" />
          <p className="font-lato text-lg text-gray-500 max-w-xl mx-auto">
            Passionate student leaders driving the KarU Nature Club's vision and activities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 animate-on-scroll">
          {team.map((member, i) => (
            <div key={i} className="card-hover text-center group">
              {/* Avatar with Image */}
              <div className={`w-20 h-20 mx-auto rounded-2xl overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className={`w-20 h-20 ${member.color} flex items-center justify-center hidden`}>
                  <span className="font-playfair font-bold text-xl text-forest">{member.avatar}</span>
                </div>
              </div>
              <h4 className="font-playfair font-bold text-sm text-forest mb-1">{member.name}</h4>
              <p className="font-lato text-xs text-gray-400 mb-3">{member.role}</p>
              {/* Social icons */}
              <div className="flex justify-center gap-2">
                <a href={member.email} className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-gray-700 flex items-center justify-center transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
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
          <a href="/team" className="inline-flex items-center gap-2 border-2 border-forest/30 text-forest font-lato font-bold px-8 py-3 rounded-full hover:bg-forest/5 transition-colors">
            View All Members
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
