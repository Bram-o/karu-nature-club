'use client'

const events = [
  {
    id: 1,
    title: 'Mt. Kenya Day Hike',
    date: 'March 22, 2025',
    time: '5:00 AM – 8:00 PM',
    category: 'Hike',
    categoryColor: 'bg-green-100 text-green-700',
    location: 'Mt. Kenya National Park',
    desc: 'A challenging but rewarding day hike to Point Lenana with breathtaking views of Kenya\'s highest mountain.',
    spots: '25 spots left',
    spotsColor: 'text-amber-600',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    photosLink: '#',
    fullDesc: 'Embark on an unforgettable journey to the roof of Kenya! This full-day adventure takes you to Point Lenana (4,985m), the third-highest peak on Mt. Kenya and the only one accessible without technical climbing equipment. Our experienced guides will lead you through diverse ecosystems, from lush montane forests to alpine meadows dotted with giant lobelias and groundsels. The panoramic views from the summit stretch across the Kenyan countryside, offering a perspective that will forever change how you see our beautiful country. This hike combines physical challenge with natural wonder, making it perfect for both seasoned adventurers and those taking their first steps into high-altitude hiking.',
    itinerary: [
      '5:00 AM - Departure from Karatina',
      '8:00 AM - Arrival at Mt. Kenya National Park gate',
      '9:00 AM - Begin ascent through montane forest',
      '12:00 PM - Lunch at Met Station',
      '1:00 PM - Continue to Point Lenana',
      '3:00 PM - Summit and photo session',
      '4:00 PM - Begin descent',
      '8:00 PM - Return to Karatina'
    ],
    requirements: ['Good physical fitness', 'Hiking boots', 'Warm clothing', 'Day pack', 'Water bottle', 'Sunscreen'],
    cost: 'KSh 3,500 (includes park fees, guide, and transport)',
    difficulty: 'Moderate to Challenging'
  },
  {
    id: 2,
    title: 'Earth Day Tree Planting',
    date: 'April 22, 2025',
    time: '8:00 AM – 1:00 PM',
    category: 'Conservation',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    location: 'Karatina Town Forest',
    desc: 'Annual Earth Day celebration with community tree planting targeting 500 indigenous trees for local reforestation.',
    spots: 'Open to all',
    spotsColor: 'text-green-600',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    photosLink: '#',
    fullDesc: 'Join us for our annual Earth Day celebration where we combine environmental action with community spirit! This year, we\'re planting 500 indigenous trees in the Karatina Town Forest, contributing to local reforestation efforts and creating a greener future for our community. Working alongside local environmental experts and community members, participants will learn about native tree species, proper planting techniques, and the importance of urban forestry. This event brings together students, local residents, and environmental organizations in a shared commitment to environmental stewardship. Whether you\'re a tree-planting veteran or trying it for the first time, your participation will make a real difference in restoring Kenya\'s forests.',
    itinerary: [
      '8:00 AM - Welcome and registration',
      '8:30 AM - Safety briefing and tree species introduction',
      '9:00 AM - Tree planting begins',
      '11:00 AM - Break and refreshments',
      '11:30 AM - Continue planting',
      '1:00 PM - Event conclusion and certificates'
    ],
    requirements: ['Comfortable clothing', 'Closed-toe shoes', 'Hat/sunscreen', 'Water bottle', 'Gardening gloves (provided)'],
    cost: 'Free (refreshments provided)',
    difficulty: 'Easy'
  },
  {
    id: 3,
    title: 'Bird Watching Safari',
    date: 'May 10, 2025',
    time: '6:00 AM – 4:00 PM',
    category: 'Wildlife',
    categoryColor: 'bg-amber-100 text-amber-700',
    location: 'Aberdare National Park',
    desc: 'A guided birding expedition to spot over 100 bird species in the diverse Aberdare ecosystem, with expert ornithologists.',
    spots: '15 spots left',
    spotsColor: 'text-red-500',
    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800&q=80',
    photosLink: '#',
    fullDesc: 'Discover the incredible avian diversity of the Aberdare Mountains on this specialized bird watching safari! Led by experienced ornithologists, this full-day expedition will introduce you to over 100 bird species in one of Kenya\'s most biodiverse regions. From colorful sunbirds and turacos to majestic eagles and secretive forest birds, the Aberdare ecosystem hosts an incredible variety of feathered inhabitants. Participants will learn bird identification techniques, bird call recognition, and the ecological roles birds play in forest ecosystems. Whether you\'re a seasoned birder or just discovering the joy of bird watching, this safari offers the perfect blend of education, adventure, and natural beauty.',
    itinerary: [
      '6:00 AM - Early departure from Karatina',
      '8:00 AM - Arrival at Aberdare National Park',
      '8:30 AM - Bird watching begins at lower altitudes',
      '10:00 AM - Move to mid-altitude forest zones',
      '12:00 PM - Lunch and bird species review',
      '1:00 PM - Continue birding in different habitats',
      '3:00 PM - Final bird count and departure',
      '4:00 PM - Return to Karatina'
    ],
    requirements: ['Binoculars (can be borrowed)', 'Field guide book', 'Comfortable walking shoes', 'Light rain jacket', 'Notebook and pen'],
    cost: 'KSh 2,800 (includes park fees and guide)',
    difficulty: 'Easy to Moderate'
  },
  {
    id: 4,
    title: 'Campus Photography Contest',
    date: 'May 25, 2025',
    time: '9:00 AM – 5:00 PM',
    category: 'Media',
    categoryColor: 'bg-blue-100 text-blue-700',
    location: 'KarU Campus',
    desc: 'Showcase your best nature photography from the semester for a chance to win prizes and be featured in our annual magazine.',
    spots: 'Open to all',
    spotsColor: 'text-green-600',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
    photosLink: '#',
    fullDesc: 'Unleash your inner wildlife photographer! This annual photography contest celebrates the natural beauty of Kenya as captured through the lenses of KarU students. Whether you\'ve been documenting our club activities, exploring local wildlife, or capturing the stunning landscapes of our region, this is your chance to showcase your work. Professional photographers and photography enthusiasts will judge entries based on composition, technical skill, and the story told through each image. Winners will receive prizes, have their work featured in our annual magazine, and gain recognition within the photography community. This event not only celebrates artistic talent but also raises awareness about Kenya\'s natural heritage.',
    itinerary: [
      '9:00 AM - Registration and entry submission opens',
      '10:00 AM - Photography workshop with professional photographer',
      '12:00 PM - Lunch break',
      '1:00 PM - Photo walk around campus',
      '3:00 PM - Judging begins',
      '4:00 PM - Awards ceremony',
      '5:00 PM - Exhibition closes'
    ],
    requirements: ['Digital photos (up to 5 entries per person)', 'Camera or smartphone', 'Basic photography knowledge preferred but not required'],
    cost: 'KSh 500 entry fee (includes workshop and lunch)',
    difficulty: 'Easy'
  },
]

interface PageProps {
  params: {
    id: string
  }
}

export default function EventPage({ params }: PageProps) {
  const event = events.find(e => e.id === parseInt(params.id))

  if (!event) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <a href="/events" className="text-green-600 hover:text-green-700">← Back to Events</a>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <div className="mb-4">
            <span className={`badge ${event.categoryColor} bg-white/20 text-white text-sm px-4 py-2 mb-4 block w-fit`}>
              {event.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-2">{event.title}</h1>
            <div className="flex flex-wrap gap-6 text-sm opacity-90">
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {event.date}
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {event.time}
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {event.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Description */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-playfair font-bold text-forest mb-6">Event Details</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">{event.fullDesc}</p>
          <div className="flex items-center gap-4">
            <span className={`badge ${event.categoryColor} text-sm px-4 py-2`}>{event.category}</span>
            <span className={`font-lato font-bold ${event.spotsColor}`}>{event.spots}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Itinerary */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-playfair font-bold text-forest mb-6">Itinerary</h2>
            <div className="space-y-3">
              {event.itinerary.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span className="font-lato text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-playfair font-bold text-forest mb-6">What to Bring</h2>
            <div className="space-y-3">
              {event.requirements.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-lato text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <h3 className="font-playfair font-bold text-forest mb-2">Cost</h3>
            <p className="text-green-600 font-bold text-lg">{event.cost}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <h3 className="font-playfair font-bold text-forest mb-2">Difficulty</h3>
            <p className="text-amber-600 font-bold text-lg">{event.difficulty}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <h3 className="font-playfair font-bold text-forest mb-2">Availability</h3>
            <p className={`font-bold text-lg ${event.spotsColor}`}>{event.spots}</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-playfair font-bold mb-4">Ready to Join?</h2>
            <p className="mb-6 opacity-90">Secure your spot for this amazing experience!</p>
            <a
              href="/register"
              className="inline-flex items-center gap-2 bg-white text-green-600 font-lato font-bold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              Register Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Back button */}
        <div className="text-center mt-12">
          <a href="/events" className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 font-lato font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to All Events
          </a>
        </div>
      </div>
    </main>
  )
}