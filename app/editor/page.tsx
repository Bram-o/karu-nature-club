'use client'

import { useState } from 'react'

// ── Types ──────────────────────────────────────────────────────────────────
type EditorTab = 'overview' | 'posts' | 'photos' | 'events' | 'blogs'

type Post = {
    id: string
    title: string
    content: string
    status: 'draft' | 'pending' | 'approved' | 'rejected'
    created_at: string
}

type Photo = {
    id: string
    url: string
    caption: string
    folder: string
}

type Event = {
    id: string
    title: string
    description: string
    date: string
    location: string
}

type Blog = {
    id: string
    title: string
    content: string
    status: 'draft' | 'pending' | 'approved' | 'rejected' | 'published'
    created_at: string
}

// ── Mock Data ──────────────────────────────────────────────────────────────
const mockPosts: Post[] = [
    { id: '1', title: 'My Hike to Ngong Hills', content: 'The trail was breathtaking...', status: 'approved', created_at: '2024-09-01' },
    { id: '2', title: 'Urban Birding Guide', content: 'You can spot over 50 species...', status: 'pending', created_at: '2024-09-05' },
    { id: '3', title: 'Draft: Wetlands of Kenya', content: 'Kenya has rich wetland ecosystems...', status: 'draft', created_at: '2024-09-08' },
]

const mockPhotos: Photo[] = [
    { id: '1', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400', caption: 'Morning at Karura', folder: 'Hikes' },
    { id: '2', url: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400', caption: 'African Fish Eagle', folder: 'Birding' },
]

const mockEvents: Event[] = [
    { id: '1', title: 'Nairobi River Cleanup', description: 'Community cleanup event', date: '2024-09-20', location: 'Nairobi River, CBD' },
]

const mockBlogs: Blog[] = [
    { id: '1', title: 'Why Urban Trees Matter', content: 'Trees reduce urban heat...', status: 'published', created_at: '2024-08-20' },
    { id: '2', title: 'Guide to Birdwatching', content: 'Getting started with birding...', status: 'draft', created_at: '2024-09-07' },
    { id: '3', title: 'Karura Forest History', content: 'Karura Forest was gazetted in...', status: 'pending', created_at: '2024-09-09' },
]

const statusColors: Record<string, string> = {
    draft: 'bg-gray-100 text-gray-600',
    pending: 'bg-amber-100 text-amber-700',
    approved: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700',
    published: 'bg-blue-100 text-blue-700',
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function EditorDashboard() {
    const [activeTab, setActiveTab] = useState<EditorTab>('overview')
    const [posts, setPosts] = useState<Post[]>(mockPosts)
    const [photos, setPhotos] = useState<Photo[]>(mockPhotos)
    const [events, setEvents] = useState<Event[]>(mockEvents)
    const [blogs, setBlogs] = useState<Blog[]>(mockBlogs)

    // Post form
    const [showPostForm, setShowPostForm] = useState(false)
    const [editingPost, setEditingPost] = useState<Post | null>(null)
    const [postForm, setPostForm] = useState({ title: '', content: '' })

    // Blog form
    const [showBlogForm, setShowBlogForm] = useState(false)
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
    const [blogForm, setBlogForm] = useState({ title: '', content: '' })

    // Event form
    const [showEventForm, setShowEventForm] = useState(false)
    const [eventForm, setEventForm] = useState({ title: '', description: '', date: '', location: '' })

    // Photo
    const [photoCaption, setPhotoCaption] = useState('')
    const [photoFolder, setPhotoFolder] = useState('General')

    const tabs = [
        { id: 'overview', label: 'Overview', icon: '📊' },
        { id: 'posts', label: 'My Posts', icon: '📝' },
        { id: 'photos', label: 'Photos', icon: '🖼️' },
        { id: 'events', label: 'Events', icon: '📅' },
        { id: 'blogs', label: 'Blogs', icon: '✍️' },
    ]

    // ── Post Handlers ──────────────────────────────────────────────────────
    function handleSavePost(asDraft: boolean) {
        if (!postForm.title || !postForm.content) return
        const status = asDraft ? 'draft' : 'pending'

        if (editingPost) {
            setPosts(posts.map(p => p.id === editingPost.id ? { ...p, ...postForm, status } : p))
            setEditingPost(null)
        } else {
            const newPost: Post = {
                id: Date.now().toString(),
                ...postForm,
                status,
                created_at: new Date().toISOString().split('T')[0],
            }
            setPosts([newPost, ...posts])
        }
        setPostForm({ title: '', content: '' })
        setShowPostForm(false)
    }

    function handleEditPost(post: Post) {
        setEditingPost(post)
        setPostForm({ title: post.title, content: post.content })
        setShowPostForm(true)
    }

    function deletePost(id: string) {
        setPosts(posts.filter(p => p.id !== id))
    }

    // ── Blog Handlers ──────────────────────────────────────────────────────
    function handleSaveBlog(asDraft: boolean) {
        if (!blogForm.title || !blogForm.content) return
        const status = asDraft ? 'draft' : 'pending'

        if (editingBlog) {
            setBlogs(blogs.map(b => b.id === editingBlog.id ? { ...b, ...blogForm, status } : b))
            setEditingBlog(null)
        } else {
            const newBlog: Blog = {
                id: Date.now().toString(),
                ...blogForm,
                status,
                created_at: new Date().toISOString().split('T')[0],
            }
            setBlogs([newBlog, ...blogs])
        }
        setBlogForm({ title: '', content: '' })
        setShowBlogForm(false)
    }

    function handleEditBlog(blog: Blog) {
        setEditingBlog(blog)
        setBlogForm({ title: blog.title, content: blog.content })
        setShowBlogForm(true)
    }

    // ── Event Handlers ─────────────────────────────────────────────────────
    function handleSaveEvent() {
        if (!eventForm.title || !eventForm.date) return
        const newEvent: Event = { id: Date.now().toString(), ...eventForm }
        setEvents([newEvent, ...events])
        setEventForm({ title: '', description: '', date: '', location: '' })
        setShowEventForm(false)
    }

    // ── Photo Handlers ─────────────────────────────────────────────────────
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

    function updateCaption(id: string, caption: string) {
        setPhotos(photos.map(p => p.id === id ? { ...p, caption } : p))
    }

    function deletePhoto(id: string) {
        setPhotos(photos.filter(p => p.id !== id))
    }

    // ── Render ─────────────────────────────────────────────────────────────
    return (
        <div className="min-h-screen bg-gray-50 font-lato">

            {/* Header */}
            <div className="bg-moss text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">✍️</span>
                    <div>
                        <h1 className="font-playfair font-bold text-xl">Editor Dashboard</h1>
                        <p className="text-white/60 text-xs">Nature Club Content Management</p>
                    </div>
                </div>
                <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full">Editor</span>
            </div>

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-52 min-h-screen bg-white border-r border-gray-100 pt-6">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as EditorTab)}
                            className={`w-full flex items-center gap-3 px-5 py-3 text-sm font-bold transition-all ${activeTab === tab.id
                                    ? 'bg-moss/10 text-moss border-r-2 border-moss'
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
                            <h2 className="font-playfair font-bold text-2xl text-forest mb-6">My Overview</h2>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { label: 'My Posts', value: posts.length, icon: '📝', color: 'bg-forest' },
                                    { label: 'My Photos', value: photos.length, icon: '🖼️', color: 'bg-moss' },
                                    { label: 'My Events', value: events.length, icon: '📅', color: 'bg-amber-500' },
                                    { label: 'My Blogs', value: blogs.length, icon: '✍️', color: 'bg-blue-500' },
                                ].map((stat, i) => (
                                    <div key={i} className={`${stat.color} text-white rounded-2xl p-5`}>
                                        <div className="text-3xl mb-1">{stat.icon}</div>
                                        <div className="text-3xl font-bold">{stat.value}</div>
                                        <div className="text-white/70 text-xs mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Status summary */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                                    <h3 className="font-bold text-gray-800 mb-3">Posts Status</h3>
                                    {['draft', 'pending', 'approved', 'rejected'].map(s => (
                                        <div key={s} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${statusColors[s]}`}>{s}</span>
                                            <span className="text-sm font-bold text-gray-700">{posts.filter(p => p.status === s).length}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                                    <h3 className="font-bold text-gray-800 mb-3">Blogs Status</h3>
                                    {['draft', 'pending', 'published', 'rejected'].map(s => (
                                        <div key={s} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${statusColors[s]}`}>{s}</span>
                                            <span className="text-sm font-bold text-gray-700">{blogs.filter(b => b.status === s).length}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── POSTS ── */}
                    {activeTab === 'posts' && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-playfair font-bold text-2xl text-forest">My Posts</h2>
                                <button
                                    onClick={() => { setShowPostForm(true); setEditingPost(null); setPostForm({ title: '', content: '' }) }}
                                    className="bg-forest text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-forest/90"
                                >
                                    + New Post
                                </button>
                            </div>

                            {showPostForm && (
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                                    <h3 className="font-bold text-gray-800 mb-4">{editingPost ? 'Edit Post' : 'Create Post'}</h3>
                                    <input
                                        type="text"
                                        placeholder="Post title"
                                        value={postForm.title}
                                        onChange={e => setPostForm({ ...postForm, title: e.target.value })}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:border-moss"
                                    />
                                    <textarea
                                        placeholder="Write your post content..."
                                        value={postForm.content}
                                        onChange={e => setPostForm({ ...postForm, content: e.target.value })}
                                        rows={6}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-4 focus:outline-none focus:border-moss resize-none"
                                    />
                                    <div className="flex gap-3">
                                        <button onClick={() => handleSavePost(false)} className="bg-forest text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-forest/90">
                                            Submit for Approval
                                        </button>
                                        <button onClick={() => handleSavePost(true)} className="bg-gray-100 text-gray-700 text-sm font-bold px-5 py-2 rounded-full hover:bg-gray-200">
                                            Save as Draft
                                        </button>
                                        <button onClick={() => setShowPostForm(false)} className="text-gray-400 text-sm font-bold px-5 py-2 rounded-full border border-gray-200 hover:bg-gray-50">
                                            Cancel
                                        </button>
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
                                                <p className="text-sm text-gray-500 line-clamp-2">{post.content}</p>
                                                <p className="text-xs text-gray-300 mt-1">{post.created_at}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                {(post.status === 'draft' || post.status === 'rejected') && (
                                                    <button onClick={() => handleEditPost(post)} className="text-xs font-bold px-3 py-1.5 border border-gray-200 rounded-full hover:bg-gray-50">
                                                        Edit
                                                    </button>
                                                )}
                                                <button onClick={() => deletePost(post.id)} className="text-xs font-bold px-3 py-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── PHOTOS ── */}
                    {activeTab === 'photos' && (
                        <div>
                            <h2 className="font-playfair font-bold text-2xl text-forest mb-6">Upload Photos</h2>

                            <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                                <h3 className="font-bold text-gray-800 mb-4">Add New Photo</h3>
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
                                    <label className="flex items-center justify-center gap-2 bg-moss text-white text-sm font-bold px-4 py-3 rounded-xl cursor-pointer hover:bg-moss/90">
                                        📁 Upload Photo
                                        <input type="file" accept="image/*" onChange={handlePhotoUpload} className="sr-only" />
                                    </label>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {photos.map(photo => (
                                    <div key={photo.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                                        <img src={photo.url} alt={photo.caption} className="w-full h-40 object-cover" />
                                        <div className="p-3">
                                            <input
                                                type="text"
                                                value={photo.caption}
                                                onChange={e => updateCaption(photo.id, e.target.value)}
                                                className="w-full text-xs font-bold text-gray-700 border-b border-gray-100 focus:outline-none focus:border-moss pb-1 mb-1"
                                            />
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-gray-400">{photo.folder}</span>
                                                <button onClick={() => deletePhoto(photo.id)} className="text-xs text-red-500 hover:text-red-700 font-bold">
                                                    Delete
                                                </button>
                                            </div>
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
                                <h2 className="font-playfair font-bold text-2xl text-forest">Add Events</h2>
                                <button
                                    onClick={() => setShowEventForm(!showEventForm)}
                                    className="bg-forest text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-forest/90"
                                >
                                    + Add Event
                                </button>
                            </div>

                            {showEventForm && (
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                                    <h3 className="font-bold text-gray-800 mb-4">New Event</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <input type="text" placeholder="Event Title" value={eventForm.title} onChange={e => setEventForm({ ...eventForm, title: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss" />
                                        <input type="date" value={eventForm.date} onChange={e => setEventForm({ ...eventForm, date: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss" />
                                        <input type="text" placeholder="Location" value={eventForm.location} onChange={e => setEventForm({ ...eventForm, location: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss" />
                                        <input type="text" placeholder="Description" value={eventForm.description} onChange={e => setEventForm({ ...eventForm, description: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss" />
                                    </div>
                                    <div className="flex gap-3">
                                        <button onClick={handleSaveEvent} className="bg-forest text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-forest/90">
                                            Submit Event
                                        </button>
                                        <button onClick={() => setShowEventForm(false)} className="text-gray-500 text-sm font-bold px-5 py-2 rounded-full border border-gray-200 hover:bg-gray-50">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3">
                                {events.map(event => (
                                    <div key={event.id} className="bg-white rounded-2xl p-5 border border-gray-100">
                                        <h4 className="font-bold text-gray-800 mb-1">{event.title}</h4>
                                        <p className="text-sm text-gray-500 mb-2">{event.description}</p>
                                        <div className="flex gap-4 text-xs text-gray-400">
                                            <span>📅 {event.date}</span>
                                            <span>📍 {event.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── BLOGS ── */}
                    {activeTab === 'blogs' && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-playfair font-bold text-2xl text-forest">My Blogs</h2>
                                <button
                                    onClick={() => { setShowBlogForm(true); setEditingBlog(null); setBlogForm({ title: '', content: '' }) }}
                                    className="bg-forest text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-forest/90"
                                >
                                    + New Blog
                                </button>
                            </div>

                            {showBlogForm && (
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                                    <h3 className="font-bold text-gray-800 mb-4">{editingBlog ? 'Edit Blog' : 'Write Blog'}</h3>
                                    <input
                                        type="text"
                                        placeholder="Blog title"
                                        value={blogForm.title}
                                        onChange={e => setBlogForm({ ...blogForm, title: e.target.value })}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:border-moss"
                                    />
                                    <textarea
                                        placeholder="Write your blog content..."
                                        value={blogForm.content}
                                        onChange={e => setBlogForm({ ...blogForm, content: e.target.value })}
                                        rows={8}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-4 focus:outline-none focus:border-moss resize-none"
                                    />
                                    <div className="flex gap-3">
                                        <button onClick={() => handleSaveBlog(false)} className="bg-forest text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-forest/90">
                                            Submit for Approval
                                        </button>
                                        <button onClick={() => handleSaveBlog(true)} className="bg-gray-100 text-gray-700 text-sm font-bold px-5 py-2 rounded-full hover:bg-gray-200">
                                            Save as Draft
                                        </button>
                                        <button onClick={() => setShowBlogForm(false)} className="text-gray-400 text-sm font-bold px-5 py-2 rounded-full border border-gray-200">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            )}

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
                                                <p className="text-sm text-gray-500 line-clamp-2">{blog.content}</p>
                                                <p className="text-xs text-gray-300 mt-1">{blog.created_at}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                {(blog.status === 'draft' || blog.status === 'rejected') && (
                                                    <button onClick={() => handleEditBlog(blog)} className="text-xs font-bold px-3 py-1.5 border border-gray-200 rounded-full hover:bg-gray-50">
                                                        Edit
                                                    </button>
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