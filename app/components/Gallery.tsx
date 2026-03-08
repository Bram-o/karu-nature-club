'use client'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', alt: 'Mt. Kenya Hike', span: 'col-span-2 row-span-2', photoLink: 'https://photos.app.goo.gl/ZFSH1S4g5aChpDeAA' },
  { src: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=400&q=80', alt: 'Itundu Waterfalls', photoLink: 'https://photos.app.goo.gl/3UKSfAcdytTybpx36' },
  { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=80', alt: 'Upendo Rescue Centre Visit', photoLink: 'https://photos.app.goo.gl/X7f2BE4vcF9nFXnm6' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80', alt: 'Gitunduti Cleanup Drive', photoLink: 'https://photos.app.goo.gl/Unps3Q94Mi4fFdDbA' },
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80', alt: 'World Wetlands Day', photoLink: 'https://photos.app.goo.gl/6qDbwgi2eUtKbUEZ8' },
  { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80', alt: 'Itiati Team Building', photoLink: 'https://photos.app.goo.gl/3c6Fg1iW5kSuof226' },
  { src: 'https://images.unsplash.com/photo-1475598322381-f1b499717dda?w=400&q=80', alt: 'Wednesday Weekly Meetings', photoLink: 'https://photos.app.goo.gl/JQ7HbFmF92nXbEHD6' },
  { src: 'https://images.unsplash.com/photo-1475598322381-f1b499717dda?w=400&q=80', alt: 'Nyambene Hills Hike', photoLink: 'https://photos.app.goo.gl/dGEpzz4zdzMeAfad6' },
  { src: 'https://images.unsplash.com/photo-1475598322381-f1b499717dda?w=400&q=80', alt: 'Good Faith Childrens Home', photoLink: 'https://photos.app.goo.gl/iFe9gJBwjqDYEXx98' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-moss bg-moss/20 px-4 py-1.5 rounded-full mb-4">
            Our Memories
          </span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-cream mb-4">
            Photo Gallery
          </h2>
          <div className="w-16 h-1 bg-moss mx-auto rounded-full mb-6" />
          <p className="font-lato text-lg text-cream/60 max-w-xl mx-auto">
            Moments captured from our adventures, conservation drives, and community events.
          </p>
        </div>

        {/* Grid gallery */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 animate-on-scroll">
          {galleryImages.map((img, i) => (
            <a
              key={i}
              href={img.photoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${img.span || ''}`}
              style={{ aspectRatio: img.span ? '1' : '1' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-cream"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                  <p className="font-lato text-sm text-cream font-medium">{img.alt}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        
      </div>
    </section>
  )
}
