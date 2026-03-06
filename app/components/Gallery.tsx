'use client'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', alt: 'Mt. Kenya Hike', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=400&q=80', alt: 'Bird watching' },
  { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=80', alt: 'Forest trail' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80', alt: 'Nature walk' },
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80', alt: 'Camping' },
  { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80', alt: 'Tree planting' },
  { src: 'https://images.unsplash.com/photo-1475598322381-f1b499717dda?w=400&q=80', alt: 'Wildlife' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-forest-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-xs font-body font-bold uppercase tracking-widest text-moss-400 bg-moss-500/20 px-4 py-1.5 rounded-full mb-4">
            Our Memories
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-cream mb-4">
            Photo Gallery
          </h2>
          <div className="w-16 h-1 bg-moss-500 mx-auto rounded-full mb-6" />
          <p className="font-body text-lg text-cream/60 max-w-xl mx-auto">
            Moments captured from our adventures, conservation drives, and community events.
          </p>
        </div>

        {/* Grid gallery */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 animate-on-scroll">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${img.span || ''}`}
              style={{ aspectRatio: img.span ? '1' : '1' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-body text-sm text-cream font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Photos CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <a
            href="https://photos.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-cream font-body font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v6l5 3-1 1.73L9 14V7h2z"/>
            </svg>
            View Full Gallery on Google Photos
          </a>
        </div>
      </div>
    </section>
  )
}
