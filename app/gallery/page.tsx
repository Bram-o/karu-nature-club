'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type GalleryImage = {
  src: string
  alt: string
  span: string
  photoLink: string
}

const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/mt-kenya-hike.jpg',
    alt: 'Mt. Kenya Hike',
    span: 'col-span-2 row-span-2',
    photoLink: 'https://photos.app.goo.gl/ZFSH1S4g5aChpDeAA',
  },
  {
    src: '/gallery/itundu-waterfalls.jpg',
    alt: 'Itundu Waterfalls',
    span: '',
    photoLink: 'https://photos.app.goo.gl/3UKSfAcdytTybpx36',
  },
  {
    src: '/gallery/upendo-rescue-centre.jpg',
    alt: 'Upendo Rescue Centre Visit',
    span: '',
    photoLink: 'https://photos.app.goo.gl/X7f2BE4vcF9nFXnm6',
  },
  {
    src: '/gallery/gitunduti-cleanup-drive.jpg',
    alt: 'Gitunduti Cleanup Drive',
    span: '',
    photoLink: 'https://photos.app.goo.gl/Unps3Q94Mi4fFdDbA',
  },
  {
    src: '/gallery/world-wetlands-day.jpg',
    alt: 'World Wetlands Day',
    span: '',
    photoLink: 'https://photos.app.goo.gl/6qDbwgi2eUtKbUEZ8',
  },
  {
    src: '/gallery/itiati-team-building.jpg',
    alt: 'Itiati Team Building',
    span: '',
    photoLink: 'https://photos.app.goo.gl/3c6Fg1iW5kSuof226',
  },
  {
    src: '/gallery/wednesday-weekly-meetings.jpg',
    alt: 'Wednesday Weekly Meetings',
    span: '',
    photoLink: 'https://photos.app.goo.gl/JQ7HbFmF92nXbEHD6',
  },
  {
    src: '/gallery/nyambene-hills-hike.jpg',
    alt: 'Nyambene Hills Hike',
    span: '',
    photoLink: 'https://photos.app.goo.gl/dGEpzz4zdzMeAfad6',
  },
  {
    src: '/gallery/St. Stephen-childrens-home.jpg',
    alt: 'St. Stephen Childrens Home',
    span: '',
    photoLink: 'https://photos.app.goo.gl/DezzmGiCxSBB7pt99',
  },
]

function GalleryCard({ img }: { img: GalleryImage }) {
  const baseClass = 'relative overflow-hidden rounded-xl group cursor-pointer'
  const className = img.span ? baseClass + ' ' + img.span : baseClass

  return (
    <a
      href={img.photoLink}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{ aspectRatio: '1' }}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
        <div className="flex flex-col items-center gap-2">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-cream"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          <p className="font-lato text-xs sm:text-sm text-cream font-medium text-center leading-tight">
            {img.alt}
          </p>
        </div>
      </div>
    </a>
  )
}

export default function GalleryPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-gray-900 min-h-screen overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">
              <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-moss bg-moss/20 px-4 py-1.5 rounded-full mb-4">
                Our Memories
              </span>
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-cream mb-4">
                Photo Gallery
              </h2>
              <div className="w-16 h-1 bg-moss mx-auto rounded-full mb-6"></div>
              <p className="font-lato text-lg text-cream/60 max-w-xl mx-auto">
                Moments captured from our adventures, conservation drives, and community events.
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {galleryImages.map((img, i) => (
                <GalleryCard key={i} img={img} />
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}