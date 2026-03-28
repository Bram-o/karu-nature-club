
export default function ContactPage() {
  return (
    <>
      <main className="pt-20 min-h-screen bg-gray-900 flex flex-col">
        <div className="max-w-2xl mx-auto px-6 py-24 text-center flex-1 flex flex-col justify-center">
          <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-moss bg-moss/20 px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-cream mb-4">Contact Us</h1>
          <div className="w-16 h-1 bg-moss mx-auto rounded-full mb-8" />
          <div className="space-y-6 text-left bg-white/5 rounded-2xl p-8 border border-white/10">
            {[
              { icon: '📍', label: 'Address', value: 'Karatina University, P.O. Box 1957-10101, Karatina, Kenya' },
              { icon: '📧', label: 'Email', value: 'karunatureclub@gmail.com' },
              { icon: '📞', label: 'Phone', value: '+254 758223340' },
              { icon: '🕐', label: 'Meetings', value: 'Every Wednesday, 4:00 PM — CF1 Tuition Block' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-lato font-bold text-xs uppercase tracking-widest text-moss mb-1">{item.label}</p>
                  <p className="font-lato text-cream/80 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="font-lato text-cream/40 text-sm mt-8">
            You can also reach us via our social media channels below.
          </p>
        </div>
      </main>

    </>
  )
}
