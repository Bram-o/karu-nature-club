'use client'

import { useState, useEffect } from 'react'
import { getCurrentUser } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import {
    LayoutDashboard, User, Calendar, PenTool, LogOut, Menu, X, Bell,
    CheckCircle, Clock, QrCode, Medal, Star, TrendingUp, Users, MapPin,
    Backpack, AlertCircle, Award, Leaf, Flame, Heart, FileText, Vote, Phone
} from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────────
type MemberTab = 'overview' | 'profile' | 'events' | 'gamification' | 'resources' | 'contributions'

interface Event {
    id: string
    title: string
    date: string
    location: string
    status: 'registered' | 'upcoming' | 'past'
    capacity: number
    enrolled: number
    gearNotes: string
    meetingPoint: string
    type: 'hike' | 'cleanup' | 'birdwatching' | 'camping'
}

interface ActivityItem {
    id: string
    user: string
    action: string
    time: string
    icon: any
    color: string
}

interface Badge {
    id: string
    name: string
    description: string
    icon: any
    earned: boolean
}

// ── Mock Data ──────────────────────────────────────────────────────────────
const mockEvents: Event[] = [
    { id: '1', title: 'Karura Forest Clean-up', date: 'Oct 15, 2023 - 08:00 AM', location: 'Karura Forest', status: 'registered', capacity: 30, enrolled: 30, gearNotes: 'Gloves and trash bags provided. Bring water.', meetingPoint: 'Gate A', type: 'cleanup' },
    { id: '2', title: 'Ngong Hills Hike', date: 'Oct 22, 2023 - 06:00 AM', location: 'Ngong Hills', status: 'upcoming', capacity: 20, enrolled: 12, gearNotes: 'Sturdy hiking boots, 2L water, snacks.', meetingPoint: 'Kencom Bus Station', type: 'hike' },
    { id: '3', title: 'Dawn Birdwatching', date: 'Nov 05, 2023 - 05:30 AM', location: 'Nairobi National Park', status: 'upcoming', capacity: 15, enrolled: 14, gearNotes: 'Binoculars, warm jacket.', meetingPoint: 'Main Gate', type: 'birdwatching' },
]

const mockPastEvents: Event[] = [
    { id: '4', title: 'Mt. Longonot Hike', date: 'Sep 10, 2023', location: 'Mt. Longonot', status: 'past', capacity: 25, enrolled: 25, gearNotes: '', meetingPoint: '', type: 'hike' },
]

const mockActivityFeed: ActivityItem[] = [
    { id: '1', user: 'Sarah K.', action: 'earned the "Trailblazer" badge!', time: '2 hours ago', icon: Flame, color: 'text-orange-500 bg-orange-100' },
    { id: '2', user: 'Club Admin', action: 'posted new photos from Mt. Longonot.', time: '5 hours ago', icon: User, color: 'text-blue-500 bg-blue-100' },
    { id: '3', user: '12 members', action: 'signed up for Ngong Hills Hike.', time: '1 day ago', icon: Users, color: 'text-green-500 bg-green-100' },
]

const mockBadges: Badge[] = [
    { id: 'b1', name: 'First Steps', description: 'Attended your first club event.', icon: CheckCircle, earned: true },
    { id: 'b2', name: 'Early Bird', description: 'Attended a 5:30 AM birdwatching trip.', icon: Clock, earned: false },
    { id: 'b3', name: 'Trailblazer', description: 'Completed 5 major hikes.', icon: Flame, earned: false },
    { id: 'b4', name: 'Eco Warrior', description: 'Participated in 3 clean-up drives.', icon: Leaf, earned: true },
]

// ── Main Component ─────────────────────────────────────────────────────────
export default function MemberDashboard() {
    const router = useRouter()
    const [isLoadingAuth, setIsLoadingAuth] = useState(true)
    const [userEmail, setUserEmail] = useState<string>('')
    const [userName, setUserName] = useState<string>('Jane Member')

    // Local State for interactiveness
    const [events, setEvents] = useState<Event[]>(mockEvents)
    const [activeTab, setActiveTab] = useState<MemberTab>('overview')
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [points, setPoints] = useState(250)
    
    // Derived Gamification
    const nextTierPoints = 500
    const currentTier = points >= 500 ? 'Oak' : points >= 200 ? 'Sapling' : 'Sprout'
    const progress = Math.min((points / nextTierPoints) * 100, 100)

    useEffect(() => {
        const checkAuth = async () => {
            const user = await getCurrentUser()
            if (!user) {
                router.push('/login')
                return
            }
            setUserEmail(user.email || 'member@example.com')
            setIsLoadingAuth(false)
        }
        checkAuth()
    }, [router])

    const handleLogout = () => router.push('/')

    const handleRSVP = (eventId: string) => {
        setEvents(events.map(ev => {
            if (ev.id === eventId && ev.status === 'upcoming') {
                return { ...ev, status: 'registered', enrolled: ev.enrolled + 1 }
            }
            return ev
        }))
        setPoints(p => p + 10) // Gamification feedback!
    }

    const renderSidebar = () => (
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-forest text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex items-center justify-between h-16 px-6 bg-forest-dark border-b border-forest-light">
                <span className="text-xl font-bold font-playfair flex items-center gap-2">
                    <Leaf size={24} className="text-moss" /> Member Hub
                </span>
                <button className="lg:hidden text-gray-300 hover:text-white" onClick={() => setSidebarOpen(false)}>
                    <X size={24} />
                </button>
            </div>
            <nav className="p-4 space-y-2 mt-2">
                {[
                    { id: 'overview', icon: LayoutDashboard, label: 'Dashboard' },
                    { id: 'profile', icon: User, label: 'My Profile' },
                    { id: 'events', icon: Calendar, label: 'Activities & Events' },
                    { id: 'gamification', icon: Award, label: 'Badges & Rank' },
                    { id: 'resources', icon: FileText, label: 'Resources' },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => { setActiveTab(item.id as MemberTab); setSidebarOpen(false) }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === item.id ? 'bg-moss text-white shadow-md' : 'text-gray-300 hover:bg-forest-light hover:text-white'}`}
                    >
                        <item.icon size={20} className={activeTab === item.id ? 'text-white' : 'text-gray-400'} />
                        <span className="font-medium text-sm">{item.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    )

    const renderOverview = () => (
        <div className="space-y-6 animate-fadeIn">
            {/* Top Row: Welcome & Digital Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-3xl font-bold text-forest font-playfair">Welcome back, {userName}!</h2>
                    <p className="text-gray-600">Ready for your next adventure in nature? Check out what's happening.</p>
                    
                    {/* Transparency Widget */}
                    <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl flex items-start gap-4">
                        <Heart className="text-emerald-500 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-emerald-900">Your Impact</h4>
                            <p className="text-sm text-emerald-700 mt-1">
                                Your current membership dues have directly funded <strong>2 forest clean-ups</strong> and helped buy <strong>15 new saplings</strong> this semester. Thank you!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Digital Membership Card */}
                <div className="bg-gradient-to-br from-forest to-forest-dark p-6 rounded-3xl text-white shadow-lg relative overflow-hidden flex flex-col items-center text-center">
                    <div className="absolute top-[-20px] right-[-20px] opacity-10">
                        <Leaf size={120} />
                    </div>
                    <p className="text-forest-light text-xs font-bold uppercase tracking-widest mb-2">Membership Card</p>
                    <div className="w-20 h-20 bg-white rounded-2xl p-2 mb-4 shadow-inner">
                        <QrCode className="w-full h-full text-forest" />
                    </div>
                    <h3 className="font-bold font-playfair text-xl">{userName}</h3>
                    <p className="text-sm text-gray-300 mt-1">Tier: <span className="font-bold text-moss capitalize">{currentTier}</span></p>
                    <div className="mt-4 pt-4 border-t border-forest-light w-full flex justify-between text-xs">
                        <span>Valid Thru: 12/2024</span>
                        <span className="text-green-400 font-bold">Active</span>
                    </div>
                </div>
            </div>

            {/* Bottom Row: Activity Feed & Quick Next Event */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-forest font-playfair mb-4 flex items-center gap-2">
                        <Bell size={20} className="text-moss" /> Community Feed
                    </h3>
                    <div className="space-y-4">
                        {mockActivityFeed.map(feed => (
                            <div key={feed.id} className="flex gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${feed.color}`}>
                                    <feed.icon size={18} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-800"><span className="font-bold">{feed.user}</span> {feed.action}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{feed.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-forest font-playfair mb-4">Up Next For You</h3>
                    {events.filter(e => e.status === 'registered').slice(0, 1).map(event => (
                        <div key={event.id} className="border border-gray-100 bg-gray-50 p-4 rounded-xl">
                            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-2 py-1 rounded-md mb-3 inline-block">Registered</span>
                            <h4 className="font-bold text-lg text-gray-900">{event.title}</h4>
                            <div className="space-y-2 mt-3 text-sm text-gray-600">
                                <p className="flex items-center gap-2"><Calendar size={16} /> {event.date}</p>
                                <p className="flex items-center gap-2"><MapPin size={16} /> Meet at: {event.meetingPoint}</p>
                            </div>
                            <button className="mt-4 w-full bg-forest text-white py-2 rounded-lg font-bold hover:bg-forest-dark transition-colors flex justify-center items-center gap-2">
                                <CheckCircle size={18} /> Check In (Arrived)
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    const renderEvents = () => (
        <div className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-forest font-playfair mb-2">Activities & Events</h2>
            <p className="text-gray-600 mb-8">RSVP for upcoming adventures. Earn points for every event you attend!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                    <div key={event.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                                    event.status === 'registered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                }`}>
                                    {event.status}
                                </span>
                                <span className="text-sm font-medium text-gray-500">
                                    {event.enrolled}/{event.capacity} Filled
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>
                            
                            <div className="space-y-2 text-sm text-gray-600 mb-4">
                                <p className="flex items-center gap-2"><Calendar size={16} className="text-gray-400" /> {event.date}</p>
                                <p className="flex items-center gap-2"><MapPin size={16} className="text-gray-400" /> {event.location}</p>
                                <p className="flex items-start gap-2"><Backpack size={16} className="text-gray-400 shrink-0 mt-0.5" /> <span>{event.gearNotes}</span></p>
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-100 bg-gray-50">
                            {event.status === 'registered' ? (
                                <button disabled className="w-full py-2.5 rounded-xl font-bold bg-gray-200 text-gray-500 cursor-not-allowed">
                                    You are Registered
                                </button>
                            ) : event.enrolled >= event.capacity ? (
                                <button disabled className="w-full py-2.5 rounded-xl font-bold bg-red-100 text-red-600 cursor-not-allowed">
                                    Event Full
                                </button>
                            ) : (
                                <button onClick={() => handleRSVP(event.id)} className="w-full py-2.5 rounded-xl font-bold bg-moss text-white hover:bg-forest transition-colors shadow-sm">
                                    RSVP Now (+10 pts)
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="text-2xl font-bold text-forest font-playfair mt-12 mb-4">Past Events Archive</h3>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {mockPastEvents.map(event => (
                    <div key={event.id} className="p-4 flex items-center justify-between border-b border-gray-100 last:border-0 hover:bg-gray-50">
                        <div>
                            <p className="font-bold text-gray-900">{event.title}</p>
                            <p className="text-sm text-gray-500">{event.date} • {event.location}</p>
                        </div>
                        <button className="text-sm font-bold text-moss hover:text-forest underline">View Photos</button>
                    </div>
                ))}
            </div>
        </div>
    )

    const renderGamification = () => (
        <div className="space-y-8 animate-fadeIn max-w-4xl">
            <div>
                <h2 className="text-3xl font-bold text-forest font-playfair mb-2">Badges & Rank</h2>
                <p className="text-gray-600">Level up your nature journey. Attend events and contribute to earn rewards!</p>
            </div>

            {/* Progress Section */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Current Rank</p>
                        <h3 className="text-4xl font-bold text-forest font-playfair capitalize">{currentTier}</h3>
                    </div>
                    <div className="text-right">
                        <p className="text-3xl font-bold text-moss">{points} <span className="text-lg text-gray-400 font-medium">pts</span></p>
                        <p className="text-sm text-gray-500">{nextTierPoints - points} points to {currentTier === 'Sprout' ? 'Sapling' : 'Oak'}</p>
                    </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-4 mb-2 overflow-hidden">
                    <div className="bg-moss h-4 rounded-full transition-all duration-1000 ease-out" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-xs text-gray-400 text-center uppercase tracking-wider">Sprout → Sapling → Oak</p>
            </div>

            {/* Badges Grid */}
            <div>
                <h3 className="text-xl font-bold text-forest mb-4">Your Badges</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {mockBadges.map(badge => (
                        <div key={badge.id} className={`p-6 rounded-2xl border text-center transition-all ${badge.earned ? 'bg-white border-green-200 shadow-sm' : 'bg-gray-50 border-gray-200 opacity-60 grayscale'}`}>
                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${badge.earned ? 'bg-green-100 text-moss' : 'bg-gray-200 text-gray-500'}`}>
                                <badge.icon size={32} />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">{badge.name}</h4>
                            <p className="text-xs text-gray-500 leading-tight">{badge.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mini Leaderboard */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-forest mb-4 flex items-center gap-2"><Medal className="text-amber-500" /> Top Members This Semester</h3>
                <div className="space-y-3">
                    {['Alex M.', userName, 'David W.'].map((name, idx) => (
                        <div key={name} className={`flex items-center justify-between p-3 rounded-xl ${name === userName ? 'bg-green-50 border border-green-100' : ''}`}>
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-gray-400 w-4">{idx + 1}.</span>
                                <span className={name === userName ? 'font-bold text-forest' : 'text-gray-700'}>{name} {name === userName && '(You)'}</span>
                            </div>
                            <span className="font-bold text-moss">{idx === 0 ? 320 : idx === 1 ? points : 210} pts</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    const renderResources = () => (
        <div className="space-y-6 animate-fadeIn max-w-4xl">
            <h2 className="text-3xl font-bold text-forest font-playfair mb-6">Resources & Community</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-forest mb-4">Resource Library</h3>
                    <ul className="space-y-3">
                        {['Kenya Birds Species Guide.pdf', 'Beginner Hiking Checklist.pdf', 'Club Safety Guidelines 2023.pdf'].map(doc => (
                            <li key={doc} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                                <div className="flex items-center gap-3 text-gray-700 group-hover:text-forest">
                                    <FileText size={18} className="text-gray-400 group-hover:text-moss" />
                                    <span className="text-sm font-medium">{doc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-forest mb-4 flex items-center gap-2"><Vote className="text-moss" size={20} /> Next Destination Poll</h3>
                    <p className="text-sm text-gray-600 mb-4">Where should we go for our end-of-year camping trip?</p>
                    <div className="space-y-2">
                        {['Mt. Kenya (Sirimon Route)', 'Hell\'s Gate National Park', 'Aberdare Ranges'].map(opt => (
                            <button key={opt} className="w-full text-left px-4 py-3 border border-gray-200 rounded-xl hover:border-moss hover:bg-green-50 transition-colors text-sm font-medium text-gray-700">
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-forest text-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
                <div>
                    <h3 className="text-xl font-bold font-playfair">Need Help?</h3>
                    <p className="text-forest-light text-sm mt-1">Contact the club leadership for membership queries or event details.</p>
                </div>
                <button className="bg-white text-forest px-6 py-2.5 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-sm flex items-center gap-2 whitespace-nowrap">
                    <Phone size={18} /> Message Leadership
                </button>
            </div>
        </div>
    )

    // ── Render ─────────────────────────────────────────────────────────────
    if (isLoadingAuth) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center font-lato">
                <p className="text-moss font-bold text-xl animate-pulse flex items-center gap-2">🌿 Loading Hub...</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 font-lato flex">
            {renderSidebar()}
            
            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6 justify-between lg:justify-end shadow-sm z-10">
                    <button className="lg:hidden text-gray-500 hover:text-forest transition-colors" onClick={() => setSidebarOpen(true)}>
                        <Menu size={24} />
                    </button>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
                            <Star className="text-amber-400" size={16} fill="currentColor" />
                            <span className="text-sm font-bold text-forest">{points}</span>
                        </div>
                        <div className="w-9 h-9 bg-forest text-white rounded-full flex items-center justify-center font-bold font-playfair shadow-inner">
                            {userName.charAt(0)}
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-6 md:p-8">
                    <div className="max-w-6xl mx-auto">
                        {activeTab === 'overview' && renderOverview()}
                        {activeTab === 'profile' && (
                            <div className="space-y-6 animate-fadeIn max-w-2xl">
                                <h2 className="text-3xl font-bold text-forest font-playfair mb-6">My Profile</h2>
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-3xl">
                                            <User size={40} />
                                        </div>
                                        <div>
                                            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition-colors">
                                                Change Avatar
                                            </button>
                                        </div>
                                    </div>
                                    <form className="space-y-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                            <input type="text" defaultValue={userName} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-moss focus:border-transparent" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Interests</label>
                                            <div className="flex gap-2 mt-2">
                                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Hiking</span>
                                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Birdwatching</span>
                                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium border border-dashed border-gray-300 hover:bg-gray-200 cursor-pointer">+ Add</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">Bio</label>
                                            <textarea rows={4} defaultValue="Lover of nature, always looking for the next peak to climb!" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-moss focus:border-transparent" />
                                        </div>
                                        <button type="button" className="bg-moss text-white px-6 py-3 rounded-xl font-bold hover:bg-forest transition-colors shadow-sm">
                                            Save Changes
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                        {activeTab === 'events' && renderEvents()}
                        {activeTab === 'gamification' && renderGamification()}
                        {activeTab === 'resources' && renderResources()}
                    </div>
                </div>
            </main>
        </div>
    )
}
