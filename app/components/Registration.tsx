'use client'
import { useState } from 'react'

export default function Registration() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', regNumber: '', course: '', year: '', committee: '', paymentMethod: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const resources = [
    { name: 'Club Constitution 2024.pdf', size: '340 KB', icon: '📄' },
    { name: 'Member Handbook.pdf', size: '1.2 MB', icon: '📖' },
    { name: 'Hike Safety Guidelines.pdf', size: '210 KB', icon: '⛑️' },
    { name: 'Conservation Charter.pdf', size: '480 KB', icon: '🌿' },
  ]

  return (
    <section id="register" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-xs font-lato font-bold uppercase tracking-widest text-forest bg-moss/20 px-4 py-1.5 rounded-full mb-4">
            Join the Club
          </span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-forest mb-4">
            Registration Portal
          </h2>
          <div className="w-16 h-1 bg-moss mx-auto rounded-full mb-6" />
          <p className="font-lato text-lg text-gray-500 max-w-xl mx-auto">
            Become a member of KarU Nature Club and start your journey into Kenya's natural world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 animate-on-scroll">
          {/* Registration Form */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-playfair font-bold text-2xl text-forest mb-6">Member Registration</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🌿</div>
                  <h4 className="font-playfair font-bold text-xl text-forest mb-2">Welcome to the Club!</h4>
                  <p className="font-lato text-gray-500">Your registration has been received. We&apos;ll contact you via email within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-moss font-lato font-bold text-sm hover:text-forest transition-colors">
                    ← Register another member
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-lato text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="John Kamau"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-lato text-sm text-gray-800 placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block font-lato text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Reg. Number *</label>
                      <input
                        type="text"
                        name="regNumber"
                        required
                        value={form.regNumber}
                        onChange={handleChange}
                        placeholder="KU/2022/00123"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-lato text-sm text-gray-800 placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-lato text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@student.karu.ac.ke"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-lato text-sm text-gray-800 placeholder:text-gray-300"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-lato text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+254 712 345 678"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-lato text-sm text-gray-800 placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block font-lato text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Year of Study *</label>
                      <select
                        name="year"
                        required
                        value={form.year}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-lato text-sm text-gray-800 bg-white"
                      >
                        <option value="">Select year</option>
                        {['1st Year', '2nd Year', '3rd Year', '4th Year', 'Postgraduate'].map(y => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-lato text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Preferred Sub-Committee</label>
                    <select
                      name="committee"
                      value={form.committee}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-lato text-sm text-gray-800 bg-white"
                    >
                      <option value="">Select a committee</option>
                      {['Hikes & Adventure', 'Conservation & Environment', 'Team Building', 'Wildlife & Birding', 'Photography & Media', 'Community Outreach', 'Research & Innovation'].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Payment options */}
                  <div>
                    <label className="block font-lato text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Payment Method (Ksh 200 / semester)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'mpesa', label: 'M-Pesa', detail: 'Pay Bill: 123456', icon: '📱' },
                        { id: 'family', label: 'Family Bank', detail: 'Acc: 0987654321', icon: '🏦' },
                      ].map((pm) => (
                        <label key={pm.id} className={`flex items-center gap-3 border-2 rounded-xl p-4 cursor-pointer transition-all ${form.paymentMethod === pm.id ? 'border-moss bg-moss/5' : 'border-gray-200 hover:border-moss/30'}`}>
                          <input type="radio" name="paymentMethod" value={pm.id} onChange={handleChange} className="sr-only" />
                          <span className="text-xl">{pm.icon}</span>
                          <div>
                            <p className="font-lato font-bold text-sm text-gray-800">{pm.label}</p>
                            <p className="font-lato text-xs text-gray-400">{pm.detail}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-forest text-cream font-lato font-bold py-4 rounded-full hover:bg-forest/90 transition-colors text-sm tracking-wide"
                  >
                    Complete Registration
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Resources + Info */}
          <div className="space-y-8">
            {/* Membership benefits */}
            <div className="bg-forest rounded-2xl p-8 text-cream">
              <h3 className="font-playfair font-bold text-xl mb-6">Membership Includes</h3>
              <ul className="space-y-3">
                {[
                  'Full access to all club activities and events',
                  'Priority registration for limited hikes & trips',
                  'Official KarU Nature Club member t-shirt',
                  'Access to member-only resources & guides',
                  'Certificate of membership for your portfolio',
                  'WhatsApp communication group access',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-lato text-sm text-cream/80">
                    <span className="w-5 h-5 rounded-full bg-moss flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resource downloads */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-playfair font-bold text-xl text-forest mb-6">Resource Downloads</h3>
              <div className="space-y-3">
                {resources.map((res, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-2xl">{res.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-lato font-bold text-sm text-gray-800 truncate">{res.name}</p>
                      <p className="font-lato text-xs text-gray-400">{res.size}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-moss transition-colors flex-shrink-0">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
