'use client'

const posts = [
  {
    title: 'Our Epic Mt. Kenya Summit Attempt',
    excerpt: 'Twenty-three members braved the cold and altitude to reach Point Lenana at 4,985m. Here\'s our incredible story.',
    date: 'Feb 15, 2025',
    category: 'Adventure',
    categoryColor: 'bg-green-100 text-green-700',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
    author: 'Alex Kariuki',
  },
  {
    title: 'Why Every Student Should Join a Nature Club',
    excerpt: 'Beyond the fun activities, being part of a nature club develops skills that employers desperately seek in graduates.',
    date: 'Jan 28, 2025',
    category: 'Insight',
    categoryColor: 'bg-blue-100 text-blue-700',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80',
    author: 'Brenda Wanjiru',
  },
  {
    title: '500 Trees Planted in One Day — Community Impact',
    excerpt: 'How the KarU Nature Club partnered with local schools to plant 500 indigenous trees in the Karatina forest buffer zone.',
    date: 'Jan 10, 2025',
    category: 'Conservation',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80',
    author: 'Peter Kamau',
  },
]

const testimonials = [
  {
    quote: 'Joining KarU Nature Club was one of the best decisions I made at university. The hikes, friendships, and environmental work have shaped who I am.',
    name: 'Lydia Mwangi',
    year: '4th Year, Agriculture',
    avatar: 'LM',
  },
  {
    quote: 'The club helped me discover my passion for wildlife photography. I\'ve now published photos in two environmental magazines!',
    name: 'Brian Ochieng',
    year: '3rd Year, Environmental Science',
    avatar: 'BO',
  },
  {
    quote: 'The leadership skills I gained through the Team Building committee have been invaluable in every aspect of my studies and personal life.',
    name: 'Ann Njeri',
    year: '2nd Year, Forestry',
    avatar: 'AN',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-teal-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Blog */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-forest bg-moss/20 px-4 py-1.5 rounded-full mb-4">
              Stories & Insights
            </span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-forest mb-4">
              Our Blog
            </h2>
            <div className="w-16 h-1 bg-moss mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            {posts.map((post, i) => (
              <a key={i} href={`/blog/${i + 1}`} className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 block hover:shadow-lg transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`badge ${post.categoryColor} text-xs`}>{post.category}</span>
                    <span className="font-lato text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-playfair font-bold text-lg text-forest mb-2 leading-snug">{post.title}</h3>
                  <p className="font-lato text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-forest/10 flex items-center justify-center text-xs font-bold text-forest">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-lato text-xs text-gray-500">{post.author}</span>
                    </div>
                    <span className="font-lato text-xs text-gray-400">{post.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="animate-on-scroll">
          <div className="text-center mb-12">
            <h3 className="font-playfair font-bold text-3xl text-forest mb-3">What Members Say</h3>
            <div className="w-12 h-1 bg-moss mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative">
                {/* Quote mark */}
                <div className="absolute top-4 right-6 text-5xl text-moss/20 font-playfair leading-none select-none">"</div>
                <p className="font-lato text-gray-600 leading-relaxed mb-6 text-sm italic relative z-10">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center font-bold text-sm text-forest">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-lato font-bold text-sm text-gray-800">{t.name}</p>
                    <p className="font-lato text-xs text-gray-400">{t.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
