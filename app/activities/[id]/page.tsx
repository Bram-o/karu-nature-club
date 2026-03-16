const subCommittees = [
  {
    id: 1,
    name: 'Hikes & Adventure',
    image: '/hiking_and_adventure.jpeg',
    color: 'bg-emerald-50 border-emerald-200',
    accentColor: 'text-emerald-700',
    leader: 'Jane Wanjiku',
    role: 'Chairperson',
    avatar: 'JW',
    profilePic: 'https://i.pravatar.cc/150?img=32',
    desc: 'Organizing mountain hikes, camping expeditions, and adventure trails across Kenya\'s diverse terrain. From Mt. Kenya day hikes to multi-day Aberdare treks, our committee ensures every member discovers the thrill of outdoor adventure while learning about responsible tourism and environmental stewardship.',
    activities: ['Mt. Kenya Hikes', 'Camping Trips', 'Nature Trails', 'Rock Climbing'],
    fullDesc: 'The Hikes & Adventure Committee is dedicated to providing unforgettable outdoor experiences that challenge both body and mind. We organize regular hikes to Kenya\'s most spectacular locations, from the snow-capped peaks of Mt. Kenya to the lush forests of the Aberdare Range. Our experienced guides ensure safety while teaching participants about local flora, fauna, and conservation efforts. Whether you\'re a seasoned hiker or just starting your outdoor journey, we have adventures tailored to every skill level. Join us in exploring Kenya\'s natural wonders and creating memories that will last a lifetime.',
    achievements: ['Successfully organized 15 major hikes in 2024', 'Zero accidents in over 200 hiking expeditions', 'Trained 50+ new hikers', 'Partnered with local conservation groups']
  },
  {
    id: 2,
    name: 'Conservation & Environment',
    image: '/conservation.jpeg',
    color: 'bg-green-50 border-green-200',
    accentColor: 'text-green-700',
    leader: 'Peter Kamau',
    role: 'Chairperson',
    avatar: 'PK',
    profilePic: 'https://i.pravatar.cc/150?img=35',
    desc: 'Leading tree planting campaigns, clean-up drives, and environmental awareness programs to protect Kenya\'s natural ecosystems.',
    activities: ['Tree Planting', 'Clean-up Drives', 'Wildlife Surveys', 'Eco-Education'],
    fullDesc: 'Our Conservation & Environment Committee works tirelessly to protect and restore Kenya\'s precious natural resources. Through community tree planting initiatives, we have helped establish new forests and rehabilitate degraded lands. Our clean-up drives remove tons of waste from our local ecosystems annually, while our wildlife surveys provide crucial data for conservation efforts. We also run educational programs in local schools, teaching the next generation about environmental stewardship and sustainable living practices.',
    achievements: ['Planted over 10,000 trees in 2024', 'Organized 25+ clean-up drives', 'Conducted 12 wildlife surveys', 'Reached 5,000+ students through education programs']
  },
  {
    id: 3,
    name: 'Team Building',
    image: '/team_building.jpeg',
    color: 'bg-teal-50 border-teal-200',
    accentColor: 'text-teal-700',
    leader: 'Sarah Njeri',
    role: 'Chairperson',
    avatar: 'SN',
    profilePic: 'https://i.pravatar.cc/150?img=12',
    desc: 'Building strong bonds among members through structured team activities, leadership workshops, and collaborative challenges in natural settings.',
    activities: ['Leadership Workshops', 'Team Challenges', 'Bonding Retreats', 'Mentorship Programs'],
    fullDesc: 'The Team Building Committee focuses on fostering strong relationships and developing leadership skills within our club community. Through carefully designed activities in natural settings, we help members build trust, communication, and collaboration skills. Our leadership workshops equip students with essential skills for their future careers, while our mentorship programs connect experienced members with newcomers. Every activity is designed to strengthen our community while promoting personal growth and environmental awareness.',
    achievements: ['Conducted 20+ leadership workshops', 'Organized 8 team building retreats', 'Mentored 100+ new members', 'Achieved 95% member satisfaction rate']
  },
  {
    id: 4,
    name: 'Birding',
    image: '/birding.jpeg',
    color: 'bg-amber-50 border-amber-200',
    accentColor: 'text-amber-700',
    leader: 'David Mwangi',
    role: 'Chairperson',
    avatar: 'DM',
    desc: 'Exploring Kenya\'s rich wildlife through game drives, bird watching tours, and visits to national parks and wildlife conservancies.',
    activities: ['Bird Watching', 'Game Drives', 'Species Surveys', 'Wildlife Photography'],
    fullDesc: 'Kenya\'s incredible biodiversity is showcased through our Wildlife & Birding Committee\'s activities. We organize safaris to renowned national parks and hidden gems, providing opportunities to witness the "Big Five" and countless other species. Our bird watching expeditions have recorded over 300 species in the Karatina region alone. Through citizen science initiatives, we contribute valuable data to conservation organizations while educating members about wildlife protection and habitat preservation.',
    achievements: ['Recorded 450+ bird species', 'Organized 30+ wildlife safaris', 'Contributed data to 5 conservation projects', 'Trained 75 wildlife photographers']
  },
  {
    id: 5,
    name: 'Photography & Media',
    image: 'photo_&_media.jpeg',
    color: 'bg-blue-50 border-blue-200',
    accentColor: 'text-blue-700',
    leader: 'Grace Muthoni',
    role: 'Chairperson',
    avatar: 'GM',
    desc: 'Documenting our adventures and the natural world through photography, videography, and social media content to inspire others.',
    activities: ['Nature Photography', 'Video Production', 'Social Media', 'Photo Exhibitions'],
    fullDesc: 'The Photography & Media Committee captures the beauty and importance of our natural world, sharing it with the Karatina community and beyond. Our photographers document every club activity, creating stunning visuals that inspire environmental action. We produce videos showcasing our conservation efforts and organize exhibitions that highlight Kenya\'s natural heritage. Through strategic social media campaigns, we raise awareness about environmental issues and attract new members passionate about nature conservation.',
    achievements: ['Produced 50+ promotional videos', 'Organized 6 photo exhibitions', 'Reached 50,000+ social media followers', 'Won 3 regional photography awards']
  },
  {
    id: 6,
    name: 'Community Outreach',
    image: '/community.jpeg',
    color: 'bg-purple-50 border-purple-200',
    accentColor: 'text-purple-700',
    leader: 'James Gitonga',
    role: 'Chairperson',
    avatar: 'JG',
    desc: 'Engaging local communities around Karatina through environmental education, school visits, and partnerships with conservation organizations.',
    activities: ['School Visits', 'Community Cleanups', 'Eco-Workshops', 'Partnerships'],
    fullDesc: 'Our Community Outreach Committee bridges the gap between the university and local communities, fostering environmental awareness and action. We visit local schools to educate young minds about conservation, organize community clean-up drives, and collaborate with local organizations on environmental projects. By building these partnerships, we amplify our impact and create sustainable change in the Karatina region. Our work ensures that environmental consciousness becomes a community-wide movement.',
    achievements: ['Visited 25+ local schools', 'Partnered with 8 community organizations', 'Conducted 40+ eco-workshops', 'Engaged 3,000+ community members']
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
    desc: 'Conducting environmental research, monitoring ecosystem health, and developing innovative solutions to local environmental challenges.',
    activities: ['Field Research', 'Data Collection', 'Eco-Innovation', 'Annual Reports'],
    fullDesc: 'The Research & Innovation Committee advances our understanding of local environmental issues through scientific research and innovative solutions. We conduct field studies on water quality, soil health, biodiversity, and climate impacts in the Karatina region. Our data informs conservation strategies and policy recommendations. We also develop innovative approaches to environmental challenges, from low-cost water filtration systems to community-based monitoring tools. Our annual environmental reports provide valuable insights for stakeholders and decision-makers.',
    achievements: ['Published 12 research papers', 'Developed 3 innovative conservation tools', 'Monitored 50+ environmental sites', 'Influenced 2 local environmental policies']
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
    desc: 'Conducting environmental research, monitoring ecosystem health, and developing innovative solutions to local environmental challenges.',
    activities: ['Field Research', 'Data Collection', 'Eco-Innovation', 'Annual Reports'],
    fullDesc: 'The Research & Innovation Committee advances our understanding of local environmental issues through scientific research and innovative solutions. We conduct field studies on water quality, soil health, biodiversity, and climate impacts in the Karatina region. Our data informs conservation strategies and policy recommendations. We also develop innovative approaches to environmental challenges, from low-cost water filtration systems to community-based monitoring tools. Our annual environmental reports provide valuable insights for stakeholders and decision-makers.',
    achievements: ['Published 12 research papers', 'Developed 3 innovative conservation tools', 'Monitored 50+ environmental sites', 'Influenced 2 local environmental policies']
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
    desc: 'Conducting environmental research, monitoring ecosystem health, and developing innovative solutions to local environmental challenges.',
    activities: ['Field Research', 'Data Collection', 'Eco-Innovation', 'Annual Reports'],
    fullDesc: 'The Research & Innovation Committee advances our understanding of local environmental issues through scientific research and innovative solutions. We conduct field studies on water quality, soil health, biodiversity, and climate impacts in the Karatina region. Our data informs conservation strategies and policy recommendations. We also develop innovative approaches to environmental challenges, from low-cost water filtration systems to community-based monitoring tools. Our annual environmental reports provide valuable insights for stakeholders and decision-makers.',
    achievements: ['Published 12 research papers', 'Developed 3 innovative conservation tools', 'Monitored 50+ environmental sites', 'Influenced 2 local environmental policies']
  },
]

interface PageProps {
  params: {
    id: string
  }
}

export default function SubcommitteePage({ params }: PageProps) {
  const committee = subCommittees.find(c => c.id === parseInt(params.id))

  if (!committee) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Committee Not Found</h1>
          <a href="/activities" className="text-green-600 hover:text-green-700">← Back to Activities</a>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={committee.image}
          alt={committee.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-2">{committee.name}</h1>
              <span className={`badge ${committee.accentColor} bg-white/20 text-white text-sm px-4 py-2`}>
                Committee #{committee.id}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Leader Section */}
        <div className={`bg-white rounded-2xl p-8 mb-8 shadow-lg border ${committee.color} border-l-4`}>
          <div className="flex items-center gap-6">
            {committee.profilePic ? (
              <img
                src={committee.profilePic}
                alt={`Photo of ${committee.leader}`}
                className="w-20 h-20 rounded-full object-cover"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-forest/10 flex items-center justify-center text-forest font-bold text-2xl font-lato">
                {committee.avatar}
              </div>
            )}
            <div>
              <h2 className="text-2xl font-playfair font-bold text-forest mb-1">Led by {committee.leader}</h2>
              <p className={`text-lg ${committee.accentColor} font-medium`}>{committee.role}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-playfair font-bold text-forest mb-6">About Our Committee</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">{committee.fullDesc}</p>
        </div>

        {/* Key Activities */}
        <div className={`bg-white rounded-2xl p-8 mb-8 shadow-lg ${committee.color}`}>
          <h2 className="text-2xl font-playfair font-bold text-forest mb-6">Key Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {committee.activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${committee.accentColor.replace('text-', 'bg-')}`}></div>
                <span className="font-lato font-medium text-gray-700">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-playfair font-bold text-forest mb-6">2024 Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {committee.achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 ${committee.accentColor}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-lato text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-playfair font-bold mb-4">Join Our Committee</h2>
            <p className="mb-6 opacity-90">Be part of something bigger. Contribute to Kenya's environmental future.</p>
            <a
              href="/register"
              className="inline-flex items-center gap-2 bg-white text-green-600 font-lato font-bold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              Get Involved
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Back button */}
        <div className="text-center mt-12">
          <a href="/activities" className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 font-lato font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to All Activities
          </a>
        </div>
      </div>
    </main>
  )
}