'use client'

import Footer from '../components/Footer'

const patrons = [
  { name: 'Dr.Kimuyu', role: 'Patron', avatar: 'DK', image: '#', color: 'bg-emerald-100', email: '#', linkedin: '#' },
  { name: 'Joseph Wanjau', role: 'Assistant Patron', avatar: 'JW', image: '#', color: 'bg-emerald-100', email: '#', linkedin: '#' },
]

const friends = [
  { name: 'David Wainaina', role: 'Member', avatar: 'DW', image: '#', color: 'bg-slate-100', email: '#', linkedin: '#' },
  { name: 'Caroline Wangari', role: 'Member', avatar: 'CW', image: '#', color: 'bg-slate-100', email: '#', linkedin: '#' },
]

const leaders = [
  { name: 'Mark Lairenge', role: 'Club President', avatar: 'ML', image: '#', color: 'bg-forest/10', email: '#', linkedin: '#' },
  { name: 'Faith Mumbi', role: 'Vice President', avatar: 'FM', image: '#', color: 'bg-moss/20', email: '#', linkedin: '#' },
  { name: 'Harun Wainaina', role: 'Organizing Secretary', avatar: 'HW', image: '#', color: 'bg-earth/20', email: '#', linkedin: '#' },
  { name: 'David Mugo', role: 'Treasurer', avatar: 'DM', image: '#', color: 'bg-blue-100', email: '#', linkedin: '#' },
  { name: 'Mary Macharia', role: 'Secretary', avatar: 'MM', image: '#', color: 'bg-amber-100', email: '#', linkedin: '#' },
  { name: 'Irene Kimani', role: 'Vice Secretary', avatar: 'IK', image: '#', color: 'bg-rose-100', email: '#', linkedin: '#' },
  { name: 'Stephen Kingori', role: 'Editor', avatar: 'SK', image: '#', color: 'bg-teal-100', email: '#', linkedin: '#' },
  { name: 'Ken Ndiki', role: 'Vice Editor', avatar: 'KN', image: '#', color: 'bg-indigo-100', email: '#', linkedin: '#' },
  { name: 'Pierrajoy Wangechi', role: 'EX Official', avatar: 'PW', image: '#', color: 'bg-yellow-100', email: '#', linkedin: '#' },
  { name: 'Godwin Kigen', role: 'EX Official', avatar: 'GK', image: '#', color: 'bg-pink-100', email: '#', linkedin: '#' },
]

const subCommitteeLeaders = [
  { name: 'Christine Mwangi', role: 'Chairperson', avatar: 'CM', image: '#', color: 'bg-slate-100', email: '#', linkedin: '#' },
  { name: 'Bramuel Mulupi', role: 'Chairperson', avatar: 'BM', image: '#', color: 'bg-slate-100', email: '#', linkedin: '#' },
  { name: 'Brian Kipkemoi', role: 'Chairperson', avatar: 'BK', image: '#', color: 'bg-slate-100', email: '#', linkedin: '#' },
  { name: 'Douglas Kirianki', role: 'Chairperson', avatar: 'DK', image: '#', color: 'bg-slate-100', email: '#', linkedin: '#' },
  { name: 'Margret Wambui', role: 'Chairperson', avatar: 'MW', image: '#', color: 'bg-slate-100', email: '#', linkedin: '#' },
  { name: 'Dennis Mulinge', role: 'Chairperson', avatar: 'DM', image: '#', color: 'bg-slate-100', email: '#', linkedin: '#' },

]

export default function AllTeamPage() {
  return (
    <>
      <main className="pt-20 min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-green-700 bg-green-100 px-4 py-1.5 rounded-full mb-4">
              Leadership
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-forest mb-4">
              Meet Our Team
            </h1>
            <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-6" />
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate student leaders driving the KarU Nature Club's vision and activities.
            </p>
          </div>

          {/* Patrons */}
          <div className="mb-16">
            <h2 className="text-2xl font-playfair font-bold text-forest mb-8">Patrons</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {patrons.map((member, i) => (
                <div key={i} className="card-hover text-center group">
                  <div className={`w-24 h-24 mx-auto rounded-2xl ${member.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md border border-green-200`}>
                    <span className="font-playfair font-bold text-2xl text-forest">{member.avatar}</span>
                  </div>
                  <h4 className="font-playfair font-bold text-base text-forest mb-1">{member.name}</h4>
                  <p className="font-lato text-sm text-gray-500 mb-4">{member.role}</p>
                  <div className="flex justify-center gap-2">
                    <a href={member.email} className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 hover:text-green-700 text-green-600 flex items-center justify-center transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </a>
                    <a href={member.linkedin} className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 hover:text-green-700 text-green-600 flex items-center justify-center transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Freinds of the Club */}
          <div className="mb-16">
            <h2 className="text-2xl font-playfair font-bold text-forest mb-8">Friends of the Club</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {friends.map((friends, i) => (
                <div key={i} className="card-hover text-center group">
                  <div className={`w-24 h-24 mx-auto rounded-2xl ${friends.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md border border-green-200`}>
                    <span className="font-playfair font-bold text-2xl text-forest">{friends.avatar}</span>
                  </div>
                  <h4 className="font-playfair font-bold text-base text-forest mb-1">{friends.name}</h4>
                  <p className="font-lato text-sm text-gray-500 mb-4">{friends.role}</p>
                  <div className="flex justify-center gap-2">
                    <a href={friends.email} className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 hover:text-green-700 text-green-600 flex items-center justify-center transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </a>
                    <a href={friends.linkedin} className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 hover:text-green-700 text-green-600 flex items-center justify-center transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Leaders */}
          <div className="mb-16">
            <h2 className="text-2xl font-playfair font-bold text-forest mb-8">Leaders</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {leaders.map((member, i) => (
                <div key={i} className="card-hover text-center group">
                  <div className={`w-24 h-24 mx-auto rounded-2xl ${member.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md border border-green-200`}>
                    <span className="font-playfair font-bold text-2xl text-forest">{member.avatar}</span>
                  </div>
                  <h4 className="font-playfair font-bold text-base text-forest mb-1">{member.name}</h4>
                  <p className="font-lato text-sm text-gray-500 mb-4">{member.role}</p>
                  <div className="flex justify-center gap-2">
                    <a href={member.email} className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 hover:text-green-700 text-green-600 flex items-center justify-center transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </a>
                    <a href={member.linkedin} className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 hover:text-green-700 text-green-600 flex items-center justify-center transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Committee Leaders */}
          <div className="mb-16">
            <h2 className="text-2xl font-playfair font-bold text-forest mb-8">Friends of the Club</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {subCommitteeLeaders.map((subCommitteeLeaders, i) => (
                <div key={i} className="card-hover text-center group">
                  <div className={`w-24 h-24 mx-auto rounded-2xl ${subCommitteeLeaders.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md border border-green-200`}>
                    <span className="font-playfair font-bold text-2xl text-forest">{subCommitteeLeaders.avatar}</span>
                  </div>
                  <h4 className="font-playfair font-bold text-base text-forest mb-1">{subCommitteeLeaders.name}</h4>
                  <p className="font-lato text-sm text-gray-500 mb-4">{subCommitteeLeaders.role}</p>
                  <div className="flex justify-center gap-2">
                    <a href={subCommitteeLeaders.email} className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 hover:text-green-700 text-green-600 flex items-center justify-center transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </a>
                    <a href={subCommitteeLeaders.linkedin} className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 hover:text-green-700 text-green-600 flex items-center justify-center transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back button */}
          <div className="text-center">
            <a href="/#team" className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 font-lato font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
