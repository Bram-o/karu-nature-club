'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUser, getUserRole } from '@/lib/auth'
import { useRouter } from 'next/navigation'

// ── Types ──────────────────────────────────────────────────────────────────
type Tab = 'overview' | 'roles' | 'announcements' | 'events' | 'posts' | 'gallery' | 'blogs'

type Member = {
    id: string
    full_name: string
    email: string
    phone: string
    role?: string
    payment_status: string
}

type Announcement = {
    id: string
    title: string
    message: string
    active: boolean
    created_at: string
}

type Event = {
    id: string
    title: string
    description: string
    date: string
    location: string
    attendees?: string[]
}

type Post = {
    id: string
    title: string
    content: string
    author: string
    status: 'pending' | 'approved' | 'rejected'
    created_at: string
}

type Blog = {
    id: string
    title: string
    content: string
    author: string
    status: 'draft' | 'pending' | 'published' | 'rejected'
    created_at: string
}

type Photo = {
    id: string
    url: string
    caption: string
    folder: string
}

// ── Mock Data ──────────────────────────────────────────────────────────────
const mockMembers: Member[] = [
    { id: '1', full_name: 'Jane Wanjiku', email: 'jane@karu.ac.ke', phone: '0712345678', role: 'member', payment_status: 'paid' },
    { id: '2', full_name: 'Brian Otieno', email: 'brian@karu.ac.ke', phone: '0723456789', role: 'editor', payment_status: 'paid' },
    { id: '3', full_name: 'Amina Hassan', email: 'amina@karu.ac.ke', phone: '0734567890', role: 'admin', payment_status: 'paid' },
]

const mockAnnouncements: Announcement[] = [
    { id: '1', title: 'Welcome New Members!', message: 'We are excited to welcome all new members for this semester.', active: true, created_at: '2024-09-01' },
    { id: '2', title: 'Hike This Weekend', message: 'Join us for a hike at Karura Forest this Saturday at 7am.', active: false, created_at: '2024-09-05' },
]

const mockEvents: Event[] = [
    { id: '1', title: 'Karura Forest Hike', description: 'Monthly nature hike', date: '2024-09-14', location: 'Karura Forest, Nairobi', attendees: ['Jane Wanjiku', 'Brian Otieno'] },
    { id: '2', title: 'Tree Planting Drive', description: 'Annual tree planting event', date: '2024-10-05', location: 'KARU Campus', attendees: ['Amina Hassan'] },
]

const mockPosts: Post[] = [
    { id: '1', title: 'My First Hike Experience', content: 'It was an amazing experience...', author: 'Jane Wanjiku', status: 'pending', created_at: '2024-09-02' },
    { id: '2', title: 'Why Conservation Matters', content: 'Conservation is key to...', author: 'Brian Otieno', status: 'approved', created_at: '2024-09-03' },
    { id: '3', title: 'Birds of Nairobi', content: 'Did you know Nairobi has over 600 bird species...', author: 'Amina Hassan', status: 'rejected', created_at: '2024-09-04' },
]

const mockBlogs: Blog[] = [
    { id: '1', title: 'The Secret Life of Urban Trees', content: 'Trees in cities do more than...', author: 'Brian Otieno', status: 'pending', created_at: '2024-09-06' },
    { id: '2', title: 'GIS in Conservation', content: 'Geographic Information Systems help...', author: 'Jane Wanjiku', status: 'draft', created_at: '2024-09-07' },
    { id: '3', title: 'Wetlands of Kenya', content: 'Kenya has over 50 wetlands...', author: 'Amina Hassan', status: 'published', created_at: '2024-09-01' },
]

const mockPhotos: Photo[] = [
    { id: '1', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400', caption: 'Karura Forest Hike', folder: 'Hikes' },
    { id: '2', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400', caption: 'Tree Planting 2024', folder: 'Events' },
    { id: '3', url: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400', caption: 'Bird Watching Session', folder: 'Birding' },
]

// ── Helpers ────────────────────────────────────────────────────────────────
const statusColors: Record<string, string> = {
    pending: 'bg-amber-100 text-amber-700',
    approved: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700',
    published: 'bg-blue-100 text-blue-700',
    draft: 'bg-gray-100 text-gray-600',
    paid: 'bg-green-100 text-green-700',
    unpaid: 'bg-red-100 text-red-700',
}

const roleColors: Record<string, string> = {
    admin: 'bg-purple-100 text-purple-700',
    editor: 'bg-blue-100 text-blue-700',
    member: 'bg-gray-100 text-gray-600',
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function AdminDashboard() {
    const router = useRouter()
    const [isLoadingAuth, setIsLoadingAuth] = useState(true)

    useEffect(() => {
        const checkAuth = async () => {
            const user = await getCurrentUser()
            if (!user) {
                router.push('/login')
                return
            }
            const role = await getUserRole(user.id)
            if (role !== 'admin') {
                router.push('/')
                return
            }
            setIsLoadingAuth(false)
        }
        checkAuth()
    }, [router])

    const [activeTab, setActiveTab] = useState<Tab>('overview')
    const [members, setMembers] = useState<Member[]>(mockMembers)
    const [announcements, setAnnouncements] = useState<Announcement[]>(mockAnnouncements)
    const [events, setEvents] = useState<Event[]>(mockEvents)
    const [posts, setPosts] = useState<Post[]>(mockPosts)
    const [blogs, setBlogs] = useState<Blog[]>(mockBlogs)
    const [photos, setPhotos] = useState<Photo[]>(mockPhotos)
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
    const [editingPost, setEditingPost] = useState<Post | null>(null)

    // Announcement form
    const [annForm, setAnnForm] = useState({ title: '', message: '' })
    const [showAnnForm, setShowAnnForm] = useState(false)

    // Event form
    const [eventForm, setEventForm] = useState({ title: '', description: '', date: '', location: '' })
    const [showEventForm, setShowEventForm] = useState(false)
    const [editingEvent, setEditingEvent] = useState<Event | null>(null)

    // Photo
    const [photoCaption, setPhotoCaption] = useState('')
    const [photoFolder, setPhotoFolder] = useState('General')

    const tabs = [
        { id: 'overview', label: 'Overview', icon: '📊' },
        { id: 'roles', label: 'Roles', icon: '👥' },
        { id: 'announcements', label: 'Announcements', icon: '📢' },
        { id: 'events', label: 'Events', icon: '📅' },
        { id: 'posts', label: 'Posts', icon: '📝' },
        { id: 'gallery', label: 'Gallery', icon: '🖼️' },
        { id: 'blogs', label: 'Blogs', icon: '✍️' },
    ]

    // ── Announcement Handlers ──────────────────────────────────────────────
    function handleAddAnnouncement() {
        if (!annForm.title || !annForm.message) return
        const newAnn: Announcement = {
            id: Date.now().toString(),
            title: annForm.title,
            message: annForm.message,
            active: true,
            created_at: new Date().toISOString().split('T')[0],
        }
        setAnnouncements([newAnn, ...announcements])
        setAnnForm({ title: '', message: '' })
        setShowAnnForm(false)
    }

    function toggleAnnouncement(id: string) {
        setAnnouncements(announcements.map(a => a.id === id ? { ...a, active: !a.active } : a))
    }

    function deleteAnnouncement(id: string) {
        setAnnouncements(announcements.filter(a => a.id !== id))
    }

    // ── Event Handlers ─────────────────────────────────────────────────────
    function handleSaveEvent() {
        if (!eventForm.title || !eventForm.date) return
        if (editingEvent) {
            setEvents(events.map(e => e.id === editingEvent.id ? { ...e, ...eventForm } : e))
            setEditingEvent(null)
        } else {
            const newEvent: Event = { id: Date.now().toString(), ...eventForm, attendees: [] }
            setEvents([newEvent, ...events])
        }
        setEventForm({ title: '', description: '', date: '', location: '' })
        setShowEventForm(false)
    }

    function handleEditEvent(event: Event) {
        setEditingEvent(event)
        setEventForm({ title: event.title, description: event.description, date: event.date, location: event.location })
        setShowEventForm(true)
    }

    function deleteEvent(id: string) {
        setEvents(events.filter(e => e.id !== id))
    }

    // ── Post Handlers ──────────────────────────────────────────────────────
    function updatePostStatus(id: string, status: 'approved' | 'rejected') {
        setPosts(posts.map(p => p.id === id ? { ...p, status } : p))
    }

    function deletePost(id: string) {
        setPosts(posts.filter(p => p.id !== id))
    }

    function saveEditedPost() {
        if (!editingPost) return
        setPosts(posts.map(p => p.id === editingPost.id ? editingPost : p))
        setEditingPost(null)
    }

    // ── Blog Handlers ──────────────────────────────────────────────────────
    function updateBlogStatus(id: string, status: 'published' | 'rejected') {
        setBlogs(blogs.map(b => b.id === id ? { ...b, status } : b))
    }

    // ── Role Handlers ──────────────────────────────────────────────────────
    function updateRole(id: string, role: string) {
        setMembers(members.map(m => m.id === id ? { ...m, role } : m))
    }

    // ── Photo Handlers ─────────────────────────────────────────────────────
    function deletePhoto(id: string) {
        setPhotos(photos.filter(p => p.id !== id))
    }

    function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (!file) return
        const url = URL.createObjectURL(file)
        const newPhoto: Photo = {
            id: Date.now().toString(),
            url,
            caption: photoCaption || file.name,
            folder: photoFolder,
        }
        setPhotos([newPhoto, ...photos])
        setPhotoCaption('')
    }

    // ── Render ─────────────────────────────────────────────────────────────
    if (isLoadingAuth) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center font-lato">
                <p className="text-forest font-bold">Loading...</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 font-lato">

            {/* Header */}
            <div className="bg-forest text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">🌿</span>
                    <div>
                        <h1 className="font-playfair font-bold text-xl">Admin Dashboard</h1>
                        <p className="text-white/60 text-xs">Nature Club Management</p>
                    </div>
                </div>
                <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full">Admin</span>
            </div>

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-52 min-h-screen bg-white border-r border-gray-100 pt-6">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as Tab)}
                            className={`w-full flex items-center gap-3 px-5 py-3 text-sm font-bold transition-all ${activeTab === tab.id
                                    ? 'bg-forest/10 text-forest border-r-2 border-forest'
                                    : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            <span>{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">

                    {/* ── OVERVIEW ── */}
                    {activeTab === 'overview' && (
                        <div>
                            <h2 className="font-playfair font-bold text-2xl text-forest mb-6">Overview</h2>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { label: 'Total Members', value: members.length, icon: '👥', color: 'bg-forest' },
                                    { label: 'Active Events', value: events.length, icon: '📅', color: 'bg-moss' },
                                    { label: 'Pending Posts', value: posts.filter(p => p.status === 'pending').length, icon: '📝', color: 'bg-amber-500' },
                                    { label: 'Pending Blogs', value: blogs.filter(b => b.status === 'pending').length, icon: '✍️', color: 'bg-blue-500' },
                                ].map((stat, i) => (
                                    <div key={i} className={`${stat.color} text-white rounded-2xl p-5`}>
                                        <div className="text-3xl mb-1">{stat.icon}</div>
                                        <div className="text-3xl font-bold">{stat.value}</div>
                                        <div className="text-white/70 text-xs mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                                <h3 className="font-playfair font-bold text-lg text-forest mb-4">Recent Members</h3>
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="text-left text-gray-400 text-xs uppercase border-b border-gray-100">
                                            <th className="pb-3">Name</th>
                                            <th className="pb-3">Email</th>
                                            <th className="pb-3">Role</th>
                                            <th className="pb-3">Payment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {members.map(m => (
                                            <tr key={m.id} className="border-b border-gray-50">
                                                <td className="py-3 font-bold text-gray-800">{m.full_name}</td>
                                                <td className="py-3 text-gray-500">{m.email}</td>
                                                <td className="py-3">
                                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${roleColors[m.role || 'member']}`}>
                                                        {m.role || 'member'}
                                                    </span>
                                                </td>
                                                <td className="py-3">
                                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${statusColors[m.payment_status]}`}>
                                                        {m.payment_status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* ── ROLES ── */}
                    {activeTab === 'roles' && (
                        <div>
                            <h2 className="font-playfair font-bold text-2xl text-forest mb-6">Assign Roles</h2>
                            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50">
                                        <tr className="text-left text-gray-400 text-xs uppercase">
                                            <th className="px-6 py-4">Member</th>
                                            <th className="px-6 py-4">Email</th>
                                            <th className="px-6 py-4">Current Role</th>
                                            <th className="px-6 py-4">Change Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {members.map(m => (
                                            <tr key={m.id} className="border-t border-gray-100">
                                                <td className="px-6 py-4 font-bold text-gray-800">{m.full_name}</td>
                                                <td className="px-6 py-4 text-gray-500">{m.email}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${roleColors[m.role || 'member']}`}>
                                                        {m.role || 'member'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <select
                                                        value={m.role || 'member'}
                                                        onChange={e => updateRole(m.id, e.target.value)}
                                                        className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 bg-white focus:outline-none focus:border-moss"
                                                    >
                                                        <option value="member">Member</option>
                                                        <option value="editor">Editor</option>
                                                        <option value="admin">Admin</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* ── ANNOUNCEMENTS ── */}
                    {activeTab === 'announcements' && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-playfair font-bold text-2xl text-forest">Announcements</h2>
                                <button
                                    onClick={() => setShowAnnForm(!showAnnForm)}
                                    className="bg-forest text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-forest/90 transition-colors"
                                >
                                    + New Announcement
                                </button>
                            </div>

                            {showAnnForm && (
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                                    <h3 className="font-bold text-gray-800 mb-4">Create Announcement</h3>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        value={annForm.title}
                                        onChange={e => setAnnForm({ ...annForm, title: e.target.value })}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:border-moss"
                                    />
                                    <textarea
                                        placeholder="Message"
                                        value={annForm.message}
                                        onChange={e => setAnnForm({ ...annForm, message: e.target.value })}
                                        rows={3}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-4 focus:outline-none focus:border-moss resize-none"
                                    />
                                    <div className="flex gap-3">
                                        <button onClick={handleAddAnnouncement} className="bg-forest text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-forest/90">
                                            Publish
                                        </button>
                                        <button onClick={() => setShowAnnForm(false)} className="text-gray-500 text-sm font-bold px-5 py-2 rounded-full border border-gray-200 hover:bg-gray-50">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3">
                                {announcements.map(ann => (
                                    <div key={ann.id} className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-bold text-gray-800">{ann.title}</h4>
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${ann.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                                    {ann.active ? 'Active' : 'Inactive'}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500">{ann.message}</p>
                                            <p className="text-xs text-gray-300 mt-1">{ann.created_at}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => toggleAnnouncement(ann.id)} className="text-xs font-bold px-3 py-1.5 border border-gray-200 rounded-full hover:bg-gray-50">
                                                {ann.active ? 'Deactivate' : 'Activate'}
                                            </button>
                                            <button onClick={() => deleteAnnouncement(ann.id)} className="text-xs font-bold px-3 py-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── EVENTS ── */}
                    {activeTab === 'events' && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-playfair font-bold text-2xl text-forest">Events</h2>
                                <button
                                    onClick={() => { setShowEventForm(true); setEditingEvent(null); setEventForm({ title: '', description: '', date: '', location: '' }) }}
                                    className="bg-forest text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-forest/90"
                                >
                                    + New Event
                                </button>
                            </div>

                            {showEventForm && (
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                                    <h3 className="font-bold text-gray-800 mb-4">{editingEvent ? 'Edit Event' : 'Create Event'}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <input type="text" placeholder="Event Title" value={eventForm.title} onChange={e => setEventForm({ ...eventForm, title: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss" />
                                        <input type="date" value={eventForm.date} onChange={e => setEventForm({ ...eventForm, date: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss" />
                                        <input type="text" placeholder="Location" value={eventForm.location} onChange={e => setEventForm({ ...eventForm, location: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss" />
                                        <input type="text" placeholder="Description" value={eventForm.description} onChange={e => setEventForm({ ...eventForm, description: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss" />
                                    </div>
                                    <div className="flex gap-3">
                                        <button onClick={handleSaveEvent} className="bg-forest text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-forest/90">
                                            {editingEvent ? 'Save Changes' : 'Create Event'}
                                        </button>
                                        <button onClick={() => setShowEventForm(false)} className="text-gray-500 text-sm font-bold px-5 py-2 rounded-full border border-gray-200 hover:bg-gray-50">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Attendees Modal */}
                            {selectedEvent && (
                                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
                                        <h3 className="font-playfair font-bold text-xl text-forest mb-4">
                                            {selectedEvent.title} — Attendees
                                        </h3>
                                        {selectedEvent.attendees && selectedEvent.attendees.length > 0 ? (
                                            <ul className="space-y-2 mb-4">
                                                {selectedEvent.attendees.map((a, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                                        <span className="w-6 h-6 bg-forest/10 text-forest rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                                                        {a}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-400 text-sm mb-4">No attendees yet.</p>
                                        )}
                                        <button onClick={() => setSelectedEvent(null)} className="bg-forest text-white text-sm font-bold px-5 py-2 rounded-full w-full">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3">
                                {events.map(event => (
                                    <div key={event.id} className="bg-white rounded-2xl p-5 border border-gray-100">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-1">{event.title}</h4>
                                                <p className="text-sm text-gray-500 mb-1">{event.description}</p>
                                                <div className="flex gap-4 text-xs text-gray-400">
                                                    <span>📅 {event.date}</span>
                                                    <span>📍 {event.location}</span>
                                                    <span>👥 {event.attendees?.length || 0} attendees</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button onClick={() => setSelectedEvent(event)} className="text-xs font-bold px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100">
                                                    Attendees
                                                </button>
                                                <button onClick={() => handleEditEvent(event)} className="text-xs font-bold px-3 py-1.5 border border-gray-200 rounded-full hover:bg-gray-50">
                                                    Edit
                                                </button>
                                                <button onClick={() => deleteEvent(event.id)} className="text-xs font-bold px-3 py-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── POSTS ── */}
                    {activeTab === 'posts' && (
                        <div>
                            <h2 className="font-playfair font-bold text-2xl text-forest mb-6">Manage Posts</h2>

                            {editingPost && (
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                                    <h3 className="font-bold text-gray-800 mb-4">Edit Post</h3>
                                    <input
                                        type="text"
                                        value={editingPost.title}
                                        onChange={e => setEditingPost({ ...editingPost, title: e.target.value })}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:border-moss"
                                    />
                                    <textarea
                                        value={editingPost.content}
                                        onChange={e => setEditingPost({ ...editingPost, content: e.target.value })}
                                        rows={4}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-4 focus:outline-none focus:border-moss resize-none"
                                    />
                                    <div className="flex gap-3">
                                        <button onClick={saveEditedPost} className="bg-forest text-white text-sm font-bold px-5 py-2 rounded-full">Save</button>
                                        <button onClick={() => setEditingPost(null)} className="text-gray-500 text-sm font-bold px-5 py-2 rounded-full border border-gray-200">Cancel</button>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3">
                                {posts.map(post => (
                                    <div key={post.id} className="bg-white rounded-2xl p-5 border border-gray-100">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-bold text-gray-800">{post.title}</h4>
                                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${statusColors[post.status]}`}>
                                                        {post.status}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-500 mb-1 line-clamp-2">{post.content}</p>
                                                <p className="text-xs text-gray-300">By {post.author} · {post.created_at}</p>
                                            </div>
                                            <div className="flex flex-wrap gap-2 justify-end">
                                                {post.status === 'pending' && (
                                                    <>
                                                        <button onClick={() => updatePostStatus(post.id, 'approved')} className="text-xs font-bold px-3 py-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100">Approve</button>
                                                        <button onClick={() => updatePostStatus(post.id, 'rejected')} className="text-xs font-bold px-3 py-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100">Reject</button>
                                                    </>
                                                )}
                                                <button onClick={() => setEditingPost(post)} className="text-xs font-bold px-3 py-1.5 border border-gray-200 rounded-full hover:bg-gray-50">Edit</button>
                                                <button onClick={() => deletePost(post.id)} className="text-xs font-bold px-3 py-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── GALLERY ── */}
                    {activeTab === 'gallery' && (
                        <div>
                            <h2 className="font-playfair font-bold text-2xl text-forest mb-6">Gallery</h2>

                            {/* Upload */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                                <h3 className="font-bold text-gray-800 mb-4">Upload Photo</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <input
                                        type="text"
                                        placeholder="Caption"
                                        value={photoCaption}
                                        onChange={e => setPhotoCaption(e.target.value)}
                                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss"
                                    />
                                    <select
                                        value={photoFolder}
                                        onChange={e => setPhotoFolder(e.target.value)}
                                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-moss"
                                    >
                                        <option>General</option>
                                        <option>Hikes</option>
                                        <option>Events</option>
                                        <option>Birding</option>
                                        <option>Tree Planting</option>
                                    </select>
                                    <label className="flex items-center justify-center gap-2 bg-forest text-white text-sm font-bold px-4 py-3 rounded-xl cursor-pointer hover:bg-forest/90">
                                        📁 Choose File
                                        <input type="file" accept="image/*" onChange={handlePhotoUpload} className="sr-only" />
                                    </label>
                                </div>
                            </div>

                            {/* Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {photos.map(photo => (
                                    <div key={photo.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 group">
                                        <div className="relative">
                                            <img src={photo.url} alt={photo.caption} className="w-full h-40 object-cover" />
                                            <button
                                                onClick={() => deletePhoto(photo.id)}
                                                className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-xs font-bold text-gray-700 truncate">{photo.caption}</p>
                                            <p className="text-xs text-gray-400">{photo.folder}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── BLOGS ── */}
                    {activeTab === 'blogs' && (
                        <div>
                            <h2 className="font-playfair font-bold text-2xl text-forest mb-6">Blog Approvals</h2>
                            <div className="space-y-3">
                                {blogs.map(blog => (
                                    <div key={blog.id} className="bg-white rounded-2xl p-5 border border-gray-100">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-bold text-gray-800">{blog.title}</h4>
                                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${statusColors[blog.status]}`}>
                                                        {blog.status}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-500 mb-1 line-clamp-2">{blog.content}</p>
                                                <p className="text-xs text-gray-300">By {blog.author} · {blog.created_at}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                {blog.status === 'pending' && (
                                                    <>
                                                        <button onClick={() => updateBlogStatus(blog.id, 'published')} className="text-xs font-bold px-3 py-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100">
                                                            Publish
                                                        </button>
                                                        <button onClick={() => updateBlogStatus(blog.id, 'rejected')} className="text-xs font-bold px-3 py-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100">
                                                            Reject
                                                        </button>
                                                    </>
                                                )}
                                                {blog.status === 'published' && (
                                                    <span className="text-xs font-bold px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full">
                                                        ✓ Published
                                                    </span>
                                                )}
                                                {blog.status === 'draft' && (
                                                    <span className="text-xs text-gray-400 px-3 py-1.5">Draft — waiting for submission</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </main>
            </div>
        </div>
    )
}