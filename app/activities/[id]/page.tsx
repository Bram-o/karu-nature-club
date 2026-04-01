'use client'

import { useParams } from 'next/navigation'
import Footer from '../../components/Footer'

const subCommittees = [
  {
    id: 1,
    name: 'Hikes & Adventure',
    icon: '🏔️',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    color: 'bg-emerald-50 border-emerald-200',
    accentColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-100',
    leader: 'Jane Wanjiku',
    role: 'Chairperson',
    avatar: 'JW',
    desc: "Organizing mountain hikes, camping expeditions, and adventure trails across Kenya's diverse terrain. From Mt. Kenya day hikes to multi-day Aberdare treks.",
    fullDesc: `Our Hikes & Adventure committee is the heartbeat of KU Outdoor Club's physical activity programme. We plan and execute everything from beginner-friendly nature walks to technical multi-day summit attempts on Mt. Kenya.

Every outing is carefully risk-assessed, with experienced leaders guiding members through Kenya's most spectacular landscapes — high moorlands, bamboo forests, ancient cedar groves, and rocky ridgelines with panoramic views stretching from the Rift Valley to the Indian Ocean coast on clear days.

We welcome everyone, from first-timers lacing up their boots for the very first time to seasoned trekkers seeking new challenges. Safety, camaraderie, and a deep respect for the wilderness are the pillars of everything we do.`,
    activities: ['Mt. Kenya Hikes', 'Camping Trips', 'Nature Trails', 'Rock Climbing'],
    upcomingEvents: [
      { title: 'Mt. Kenya Point Lenana Trek', date: 'April 19–21, 2025', slots: 12 },
      { title: 'Aberdare Moorland Day Hike', date: 'May 3, 2025', slots: 20 },
      { title: 'Hell\'s Gate Rock Climb', date: 'May 17, 2025', slots: 15 },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&q=80',
      'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=600&q=80',
    ],
  },
  {
    id: 2,
    name: 'Conservation & Environment',
    icon: '🌿',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80',
    color: 'bg-green-50 border-green-200',
    accentColor: 'text-green-700',
    badgeBg: 'bg-green-100',
    leader: 'Peter Kamau',
    role: 'Chairperson',
    avatar: 'PK',
    desc: "Leading tree planting campaigns, clean-up drives, and environmental awareness programs to protect Kenya's natural ecosystems.",
    fullDesc: `The Conservation & Environment committee is the environmental conscience of our club. We take direct, measurable action to restore and protect the ecosystems surrounding Karatina and beyond.

Our tree planting campaigns have so far put thousands of indigenous seedlings into degraded hillsides, riparian buffers, and school compounds. Our river and forest clean-up drives remove tonnes of plastic and invasive species each semester.

Beyond hands-on work, we run awareness workshops for local schools and communities, linking everyday behaviour to the health of rivers, forests, and wildlife. We believe conservation is everyone's responsibility — and we make it accessible, joyful, and impactful.`,
    activities: ['Tree Planting', 'Clean-up Drives', 'Wildlife Surveys', 'Eco-Education'],
    upcomingEvents: [
      { title: 'Ragati River Clean-up', date: 'April 12, 2025', slots: 30 },
      { title: 'Indigenous Tree Planting — Aberdare Buffer Zone', date: 'April 26, 2025', slots: 25 },
      { title: 'School Eco-Awareness Workshop', date: 'May 10, 2025', slots: 10 },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
      'https://images.unsplash.com/photo-1534710961216-75c88202f43e?w=600&q=80',
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80',
    ],
  },
  {
    id: 3,
    name: 'Team Building',
    icon: '🤝',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80',
    color: 'bg-teal-50 border-teal-200',
    accentColor: 'text-teal-700',
    badgeBg: 'bg-teal-100',
    leader: 'Sarah Njeri',
    role: 'Chairperson',
    avatar: 'SN',
    desc: 'Building strong bonds among members through structured team activities, leadership workshops, and collaborative challenges in natural settings.',
    fullDesc: `The Team Building committee transforms a collection of individuals into a tight-knit community. We design and facilitate experiences that develop trust, communication, problem-solving, and leadership — all set against the backdrop of Kenya's breathtaking outdoors.

Our retreats blend icebreakers, low-ropes challenges, wilderness problem-solving exercises, and reflective campfire discussions. The result? Members who genuinely look out for one another — on the trail and off it.

We also run a mentorship stream, pairing new members with experienced club leaders to accelerate personal growth and ensure nobody feels alone on their outdoor journey.`,
    activities: ['Leadership Workshops', 'Team Challenges', 'Bonding Retreats', 'Mentorship Programs'],
    upcomingEvents: [
      { title: 'Semester Kick-off Retreat — Ol Pejeta', date: 'April 5–6, 2025', slots: 40 },
      { title: 'Leadership Workshop Series #2', date: 'April 24, 2025', slots: 20 },
      { title: 'New Member Mentorship Pairing', date: 'May 1, 2025', slots: 18 },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80',
    ],
  },
  {
    id: 4,
    name: 'Wildlife & Birding',
    icon: '🦅',
    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=1200&q=80',
    color: 'bg-amber-50 border-amber-200',
    accentColor: 'text-amber-700',
    badgeBg: 'bg-amber-100',
    leader: 'David Mwangi',
    role: 'Chairperson',
    avatar: 'DM',
    desc: "Exploring Kenya's rich wildlife through game drives, bird watching tours, and visits to national parks and wildlife conservancies.",
    fullDesc: `Kenya is one of the world's greatest wildlife destinations, and the Wildlife & Birding committee exists to help our members fully experience and appreciate that extraordinary privilege.

We organise trips to national parks, conservancies, and Important Bird Areas — from the Aberdare National Park right on our doorstep to Lake Nakuru, Samburu, and beyond. Our guided birding walks develop sharp observation skills and a deep familiarity with Kenya's 1,100-plus bird species.

We also contribute citizen-science data to national monitoring programmes, running structured species surveys that feed into Kenya's biodiversity databases. Every sighting counts.`,
    activities: ['Bird Watching', 'Game Drives', 'Species Surveys', 'Wildlife Photography'],
    upcomingEvents: [
      { title: 'Aberdare Birding Transect Walk', date: 'April 13, 2025', slots: 16 },
      { title: 'Lake Nakuru Game Drive', date: 'April 27, 2025', slots: 12 },
      { title: 'Citizen Science Bird Count', date: 'May 11, 2025', slots: 20 },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80',
      'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&q=80',
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&q=80',
    ],
  },
  {
    id: 5,
    name: 'Photography & Media',
    icon: '📸',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=80',
    color: 'bg-blue-50 border-blue-200',
    accentColor: 'text-blue-700',
    badgeBg: 'bg-blue-100',
    leader: 'Grace Muthoni',
    role: 'Chairperson',
    avatar: 'GM',
    desc: 'Documenting our adventures and the natural world through photography, videography, and social media content to inspire others.',
    fullDesc: `The Photography & Media committee is the storytelling engine of KU Outdoor Club. We believe that powerful imagery and authentic storytelling are essential tools for conservation — inspiring people to love and protect what they can see.

Our members develop real skills in composition, natural light, wildlife photography, and video production. We run regular in-field workshops, critique sessions, and editing masterclasses. The best work is exhibited at our annual end-of-year showcase.

Beyond artistic development, we manage the club's social media channels, website content, and documentary projects, ensuring the world sees the incredible work happening right here in Karatina.`,
    activities: ['Nature Photography', 'Video Production', 'Social Media', 'Photo Exhibitions'],
    upcomingEvents: [
      { title: 'Golden Hour Photography Workshop', date: 'April 6, 2025', slots: 14 },
      { title: 'Club Documentary — Pre-production Meeting', date: 'April 20, 2025', slots: 10 },
      { title: 'Annual Photo Exhibition Planning', date: 'May 4, 2025', slots: 8 },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&q=80',
      'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=600&q=80',
      'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?w=600&q=80',
    ],
  },
  {
    id: 6,
    name: 'Community Outreach',
    icon: '🌍',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80',
    color: 'bg-purple-50 border-purple-200',
    accentColor: 'text-purple-700',
    badgeBg: 'bg-purple-100',
    leader: 'James Gitonga',
    role: 'Chairperson',
    avatar: 'JG',
    desc: 'Engaging local communities around Karatina through environmental education, school visits, and partnerships with conservation organisations.',
    fullDesc: `The Community Outreach committee bridges the gap between the university and the surrounding communities of Karatina and the Mt. Kenya region. We believe that lasting conservation requires the active participation of the people who live closest to the land.

We visit local primary and secondary schools with interactive environmental education sessions, bringing nature into classrooms and classrooms into nature. We partner with community-based organisations, women's groups, and local government to co-design projects that address real on-the-ground needs.

Our flagship initiative — the Community Conservation Champions programme — trains local youth as grassroots environmental ambassadors, extending our impact far beyond what the club could achieve alone.`,
    activities: ['School Visits', 'Community Cleanups', 'Eco-Workshops', 'Partnerships'],
    upcomingEvents: [
      { title: 'Karatina Primary Schools Tour', date: 'April 8–9, 2025', slots: 15 },
      { title: 'Community Conservation Champions Training', date: 'April 22, 2025', slots: 20 },
      { title: 'Partnership MOU Signing — KWS', date: 'May 6, 2025', slots: 5 },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80',
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80',
    ],
  },
  {
    id: 7,
    name: 'Research & Innovation',
    icon: '🔬',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80',
    color: 'bg-rose-50 border-rose-200',
    accentColor: 'text-rose-700',
    badgeBg: 'bg-rose-100',
    leader: 'Mary Wambui',
    role: 'Chairperson',
    avatar: 'MW',
    desc: 'Conducting environmental research, monitoring ecosystem health, and developing innovative solutions to local environmental challenges.',
    fullDesc: `The Research & Innovation committee is the analytical backbone of KU Outdoor Club. We design and execute rigorous field studies that produce real data on ecosystem health, biodiversity trends, and the impacts of human activity on the Mt. Kenya landscape.

Our ongoing projects include long-term forest health monitoring plots, water quality testing in Karatina's rivers, and an invasive species mapping initiative covering the Aberdare Buffer Zone. Results are published in our annual State of the Ecosystem report, shared with county government and conservation partners.

We also run our Eco-Innovation Lab — a space where members prototype low-cost solutions to local challenges: drip-irrigation systems for community gardens, upcycled plastic building materials, and early-warning sensors for illegal charcoal burning.`,
    activities: ['Field Research', 'Data Collection', 'Eco-Innovation', 'Annual Reports'],
    upcomingEvents: [
      { title: 'Forest Health Monitoring Field Day', date: 'April 10, 2025', slots: 12 },
      { title: 'Water Quality Sampling — Ragati River', date: 'April 24, 2025', slots: 10 },
      { title: 'Eco-Innovation Lab Open Day', date: 'May 8, 2025', slots: 25 },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80',
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=600&q=80',
    ],
  },
  {
    id: 8,
    name: 'Sports & Fitness',
    icon: '⚽',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80',
    color: 'bg-orange-50 border-orange-200',
    accentColor: 'text-orange-700',
    badgeBg: 'bg-orange-100',
    leader: 'Brian Ochieng',
    role: 'Chairperson',
    avatar: 'BO',
    desc: 'Promoting physical fitness and healthy lifestyles through organised sports events, fitness challenges, and inter-faculty tournaments.',
    fullDesc: `The Sports & Fitness committee keeps our members strong, healthy, and energised for every outdoor challenge. We organise regular fitness sessions, inter-faculty tournaments, and endurance challenges that complement the club's trekking and adventure calendar.

From weekly morning runs around the Karatina campus to full-day sports galas, we believe physical wellness is inseparable from mental wellbeing and environmental stewardship. A fit body enables a curious mind and a determined spirit.

We partner with the university's sports department to access facilities, and we run fitness orientation sessions for new club members to help them build the base fitness needed for the club's more demanding expeditions.`,
    activities: ['Morning Runs', 'Fitness Challenges', 'Sports Tournaments', 'Wellness Workshops'],
    upcomingEvents: [
      { title: 'Inter-Faculty Outdoor Sports Gala', date: 'April 15, 2025', slots: 50 },
      { title: 'Pre-Trek Fitness Bootcamp', date: 'April 29, 2025', slots: 30 },
      { title: 'Wellness & Nutrition Workshop', date: 'May 13, 2025', slots: 20 },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80',
      'https://images.unsplash.com/photo-1535743686920-55e4145369b9?w=600&q=80',
    ],
  },
  {
    id: 9,
    name: 'Cultural Exchange',
    icon: '🎭',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80',
    color: 'bg-indigo-50 border-indigo-200',
    accentColor: 'text-indigo-700',
    badgeBg: 'bg-indigo-100',
    leader: 'Amina Hassan',
    role: 'Chairperson',
    avatar: 'AH',
    desc: "Celebrating Kenya's rich cultural diversity through traditional storytelling, folk music, dance, and cross-community exchange programmes.",
    fullDesc: `The Cultural Exchange committee celebrates the extraordinary human tapestry that lives alongside Kenya's natural wonders. We believe that understanding and respecting diverse cultures is inseparable from respecting diverse ecosystems.

Our events bring together students from different ethnic and regional backgrounds to share food, music, dance, storytelling, and traditional ecological knowledge. Elders from communities around Mt. Kenya are invited to pass on indigenous conservation wisdom that cannot be found in any textbook.

We run exchange visits to rural communities, giving urban students a window into traditional land stewardship, and we organise the club's annual Cultural & Nature Festival — a celebration of Kenya's twin heritage: its people and its wild places.`,
    activities: ['Cultural Nights', 'Elder Knowledge Sessions', 'Community Exchanges', 'Annual Festival'],
    upcomingEvents: [
      { title: 'Kikuyu Elder Storytelling Evening', date: 'April 17, 2025', slots: 35 },
      { title: 'Multi-Cultural Food & Music Night', date: 'May 2, 2025', slots: 60 },
      { title: 'Annual Cultural & Nature Festival Planning', date: 'May 16, 2025', slots: 20 },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&q=80',
      'https://images.unsplash.com/photo-1518611507436-f9221403cca2?w=600&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
    ],
  },
]

export default function ActivityDetail() {
  const params = useParams()
  const id = Number(params?.id)
  const committee = subCommittees.find((c) => c.id === id)

  if (!committee) {
    return (
      <>
        <main className="pt-20 min-h-screen bg-forest flex items-center justify-center">
          <div className="text-center">
            <p className="font-playfair text-4xl text-cream mb-4">404</p>
            <p className="font-lato text-cream/70 mb-8">Committee not found.</p>
            <a
              href="/activities"
              className="inline-flex items-center gap-2 border-2 border-moss text-moss font-lato font-bold px-8 py-3 rounded-full hover:bg-moss/10 transition-colors"
            >
              ← Back to Activities
            </a>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <main className="pt-20 min-h-screen bg-forest">
        {/* ── Hero ── */}
        <div className="relative h-[420px] md:h-[520px] overflow-hidden">
          <img
            src={committee.image}
            alt={committee.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a2a] via-black/40 to-transparent" />

          {/* Back button */}
          <div className="absolute top-6 left-6">
            <a
              href="/activities"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white font-lato font-bold text-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors border border-white/30"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Activities
            </a>
          </div>

          {/* Hero text */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
            <div className="max-w-4xl">
              <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-moss bg-moss/20 px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-moss/30">
                Committee #{committee.id}
              </span>
              <h1 className="font-playfair font-bold text-3xl md:text-5xl text-white mb-3 drop-shadow-lg">
                {committee.icon} {committee.name}
              </h1>
              <p className="font-lato text-white/80 text-base md:text-lg max-w-2xl">
                {committee.desc}
              </p>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="relative max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left column — main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* About */}
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="font-playfair font-bold text-2xl text-forest mb-4">About This Committee</h2>
              <div className="w-10 h-0.5 bg-moss rounded-full mb-6" />
              {committee.fullDesc.split('\n\n').map((para, i) => (
                <p key={i} className="font-lato text-gray-600 leading-relaxed mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </section>

            {/* Activities */}
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="font-playfair font-bold text-2xl text-forest mb-4">What We Do</h2>
              <div className="w-10 h-0.5 bg-moss rounded-full mb-6" />
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {committee.activities.map((act) => (
                  <div
                    key={act}
                    className={`flex items-center gap-3 ${committee.color} border rounded-xl px-4 py-3`}
                  >
                    <span className="text-lg">{committee.icon}</span>
                    <span className={`font-lato font-semibold text-sm ${committee.accentColor}`}>{act}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="font-playfair font-bold text-2xl text-forest mb-4">Gallery</h2>
              <div className="w-10 h-0.5 bg-moss rounded-full mb-6" />
              <div className="grid grid-cols-3 gap-3">
                {committee.gallery.map((src, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden">
                    <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right column — sidebar */}
          <div className="space-y-6">

            {/* Chairperson card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-playfair font-bold text-lg text-forest mb-4">Committee Chair</h3>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center text-forest font-bold text-lg font-lato flex-shrink-0">
                  {committee.avatar}
                </div>
                <div>
                  <p className="font-lato font-bold text-gray-800 text-base">{committee.leader}</p>
                  <p className="font-lato text-sm text-gray-400">{committee.role}</p>
                  <span className={`inline-block mt-1 text-xs font-lato font-bold ${committee.badgeBg} ${committee.accentColor} px-2 py-0.5 rounded-full`}>
                    {committee.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Upcoming events */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-playfair font-bold text-lg text-forest mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {committee.upcomingEvents.map((ev, i) => (
                  <div key={i} className={`rounded-xl p-4 ${committee.color} border`}>
                    <p className={`font-lato font-bold text-sm ${committee.accentColor} mb-1`}>{ev.title}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-lato text-xs text-gray-500 flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {ev.date}
                      </span>
                      <span className="font-lato text-xs text-gray-500">{ev.slots} slots</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-forest rounded-2xl p-6 text-center">
              <p className="font-playfair font-bold text-cream text-lg mb-2">Ready to Join?</p>
              <p className="font-lato text-cream/70 text-sm mb-4">Become part of the {committee.name} committee today.</p>
              <button className="w-full bg-moss text-white font-lato font-bold py-3 rounded-xl hover:bg-moss/90 transition-colors text-sm">
                Express Interest
              </button>
            </div>
          </div>
        </div>

        {/* Back button bottom */}
        <div className="text-center pb-16">
          <a
            href="/activities"
            className="inline-flex items-center gap-2 border-2 border-moss text-moss font-lato font-bold px-8 py-3 rounded-full hover:bg-moss/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to All Activities
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}