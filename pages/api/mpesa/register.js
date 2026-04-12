'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type FormState = {
    fullName: string
    email: string
    phone: string
    regNumber: string
    course: string
    year: string
    committee: string
    paymentMethod: string
}

const resources = [
    { name: 'Club Constitution 2024.pdf', size: '340 KB', icon: '📄' },
    { name: 'Hike Safety Guidelines.pdf', size: '210 KB', icon: '⛑️' },
    { name: 'Conservation Charter.pdf', size: '480 KB', icon: '🌿' },
]

const membershipBenefits = [
    'Full access to all club activities and events',
    'Priority registration for limited hikes & trips',
    'Access to member-only resources & guides',
    'Certificate of membership for your portfolio',
    'WhatsApp communication group access',
]

const yearOptions = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Postgraduate']

const committeeOptions = [
    'Hikes & Adventure',
    'Art, Design & Catering',
    'Team Building',
    'Editorial, Research & Innovation',
    'Tree Planting, Clean-up and Mentorship',
    'Welfare',
    'Debate and First Aid',
    'Birding & GIS',
    'Dance',
]

const paymentMethods = [
    { id: 'mpesa', label: 'M-Pesa', detail: 'Pay Bill Business no:222111 Account no:011957', icon: '📱' },
    { id: 'family', label: 'Family Bank', detail: 'Acc: 0987654321', icon: '🏦' },
]

export default function RegisterForm() {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState < 'success' | 'error' | 'info' > ('info')

    const [form, setForm] = useState < FormState > ({
        fullName: '',
        email: '',
        phone: '',
        regNumber: '',
        course: '',
        year: '',
        committee: '',
        paymentMethod: '',
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setMessage('')

        // Guard: payment method must be selected
        if (!form.paymentMethod) {
            setMessage('❌ Please select a payment method before submitting.')
            setMessageType('error')
            return
        }

        setLoading(true)

        try {
            // ── 1. Save member record to Supabase ─────────────────────────
            const { data: member, error: insertError } = await supabase
                .from('members')
                .insert([
                    {
                        full_name: form.fullName,
                        email: form.email,
                        phone: form.phone,
                        reg_number: form.regNumber,
                        course: form.course,
                        year: form.year,
                        committee: form.committee,
                        payment_method: form.paymentMethod,
                        payment_status: 'pending',
                    },
                ])
                .select()
                .single()

            if (insertError) throw new Error(insertError.message)

            // ── 2. Handle each payment method ─────────────────────────────
            if (form.paymentMethod === 'mpesa') {

                // Normalise phone → 254XXXXXXXXX
                const raw = form.phone.replace(/\s+/g, '').replace(/-/g, '')
                const normalisedPhone = raw.startsWith('+254')
                    ? raw.slice(1)
                    : raw.startsWith('254')
                        ? raw
                        : raw.startsWith('0')
                            ? '254' + raw.slice(1)
                            : raw

                // Trigger STK Push via our API route
                const res = await fetch('/api/mpesa/stkpush', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        phone: normalisedPhone,
                        amount: 200,
                        memberId: member.id,
                    }),
                })

                const data = await res.json()
                if (!res.ok) throw new Error(data.error || 'STK Push failed. Please try again.')

                setMessage('📱 M-Pesa prompt sent to your phone! Enter your PIN to complete payment.')
                setMessageType('success')

            } else {
                // Family Bank — manual payment
                setMessage(
                    '🏦 Registration saved! Please deposit Ksh 200 to Family Bank Acc: 0987654321 and send proof to the club email.'
                )
                setMessageType('info')
            }

            setSubmitted(true)

        } catch (err: any) {
            setMessage(`❌ ${err.message}`)
            setMessageType('error')
        } finally {
            setLoading(false)
        }
    }

    function handleReset() {
        setSubmitted(false)
        setMessage('')
        setForm({
            fullName: '',
            email: '',
            phone: '',
            regNumber: '',
            course: '',
            year: '',
            committee: '',
            paymentMethod: '',
        })
    }

    const messageClass =
        messageType === 'success'
            ? 'bg-green-50 text-green-700 border border-green-200'
            : messageType === 'error'
                ? 'bg-red-50 text-red-700 border border-red-200'
                : 'bg-blue-50 text-blue-700 border border-blue-200'

    return (
        <div className="grid lg:grid-cols-2 gap-12">

            {/* ── Left — Form ──────────────────────────────────────────────── */}
            <div>
                <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-gray-100">
                    <h3 className="font-playfair font-bold text-2xl text-forest mb-6">
                        Member Registration
                    </h3>

                    {submitted ? (
                        /* Success screen */
                        <div className="text-center py-12">
                            <div className="text-5xl mb-4">🌿</div>
                            <h4 className="font-playfair font-bold text-xl text-forest mb-2">
                                Welcome to the Club!
                            </h4>
                            <p className="font-lato text-gray-500 mb-4">
                                Your registration has been received. We&apos;ll contact you via email within 24 hours.
                            </p>

                            {message && (
                                <p className={`font-lato text-sm rounded-xl px-4 py-3 mb-6 text-left ${messageClass}`}>
                                    {message}
                                </p>
                            )}

                            <button
                                onClick={handleReset}
                                className="text-moss font-lato font-bold text-sm hover:text-forest transition-colors"
                            >
                                &larr; Register another member
                            </button>
                        </div>
                    ) : (
                        /* Registration form */
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Full Name + Reg Number */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-lato text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        value={form.fullName}
                                        onChange={handleChange}
                                        placeholder="John Kamau"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-lato text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-moss transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block font-lato text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                                        Reg. Number *
                                    </label>
                                    <input
                                        type="text"
                                        name="regNumber"
                                        required
                                        value={form.regNumber}
                                        onChange={handleChange}
                                        placeholder="E10O/2022F/29"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-lato text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-moss transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block font-lato text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="john@student.karu.ac.ke"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-lato text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-moss transition-colors"
                                />
                            </div>

                            {/* Phone + Year */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-lato text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+254 712 345 678"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-lato text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-moss transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block font-lato text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                                        Year of Study *
                                    </label>
                                    <select
                                        name="year"
                                        required
                                        value={form.year}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-lato text-sm text-gray-800 bg-white focus:outline-none focus:border-moss transition-colors"
                                    >
                                        <option value="">Select year</option>
                                        {yearOptions.map((y) => (
                                            <option key={y} value={y}>{y}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Course */}
                            <div>
                                <label className="block font-lato text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                                    Course *
                                </label>
                                <input
                                    type="text"
                                    name="course"
                                    required
                                    value={form.course}
                                    onChange={handleChange}
                                    placeholder="e.g. BSc Environmental Science"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-lato text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-moss transition-colors"
                                />
                            </div>

                            {/* Committee */}
                            <div>
                                <label className="block font-lato text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                                    Preferred Sub-Committee
                                </label>
                                <select
                                    name="committee"
                                    value={form.committee}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-lato text-sm text-gray-800 bg-white focus:outline-none focus:border-moss transition-colors"
                                >
                                    <option value="">Select a committee</option>
                                    {committeeOptions.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Payment Method */}
                            <div>
                                <label className="block font-lato text-xs font-bold uppercase tracking-wider text-black mb-3">
                                    Payment Method (Ksh 200 / semester) *
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {paymentMethods.map((pm) => (
                                        <label
                                            key={pm.id}
                                            className={
                                                'flex items-center gap-3 border-2 rounded-xl p-4 cursor-pointer transition-all ' +
                                                (form.paymentMethod === pm.id
                                                    ? 'border-moss bg-moss/5'
                                                    : 'border-gray-200 hover:border-moss/30')
                                            }
                                        >
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value={pm.id}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <span className="text-xl">{pm.icon}</span>
                                            <div>
                                                <p className="font-lato font-bold text-sm text-gray-800">{pm.label}</p>
                                                <p className="font-lato text-xs text-gray-400">{pm.detail}</p>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Feedback message */}
                            {message && (
                                <p className={`font-lato text-sm rounded-xl px-4 py-3 ${messageClass}`}>
                                    {message}
                                </p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-forest text-cream font-lato font-bold py-4 rounded-full hover:bg-forest/90 transition-colors text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Processing...' : 'Complete Registration'}
                            </button>

                        </form>
                    )}
                </div>
            </div>

            {/* ── Right — Benefits + Downloads (unchanged) ─────────────────── */}
            <div className="space-y-8">

                <div className="bg-forest rounded-2xl p-5 sm:p-8 text-cream">
                    <h3 className="font-playfair font-bold text-xl mb-6">Membership Includes</h3>
                    <ul className="space-y-3">
                        {membershipBenefits.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 font-lato text-sm text-cream/80">
                                <span className="w-5 h-5 rounded-full bg-moss flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-100 shadow-sm">
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
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}