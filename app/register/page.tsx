
import RegisterForm from './RegisterForm'

export default function RegisterPage() {
  return (
    <div>

      <main className="pt-20">
        <section className="py-24 pb-32 sm:pb-24 bg-cream min-h-screen relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <div className="text-center mb-16">
              <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-forest bg-moss/20 px-4 py-1.5 rounded-full mb-4">
                Join the Club
              </span>
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-forest mb-4">
                Registration Portal
              </h2>
              <div className="w-16 h-1 bg-moss mx-auto rounded-full mb-6"></div>
              <p className="font-lato text-lg text-gray-500 max-w-xl mx-auto">
                Become a member of KarU Nature Club and start your journey into Kenya&apos;s natural world.
              </p>
            </div>

            <RegisterForm />

          </div>
        </section>
      </main>

    </div>
  )
}