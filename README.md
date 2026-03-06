# KarU Nature Club — Next.js Website

A full-featured website for the **Karatina University Nature Club**, built with Next.js 14, TypeScript, and Tailwind CSS.

---

## 🌿 Features

- **Preloader** — Animated leaf logo preloader on page entry
- **Dynamic Navigation** — Glassmorphism navbar with smooth scroll, active state, and mobile hamburger menu
- **Hero Carousel** — Auto-advancing image carousel with overlay text, CTA buttons, and stats bar
- **About Section** — Club intro, mission, and "Why Join Us" 6-card grid
- **Activities & Sub-Committees** — 7 interactive committee cards with leader profiles and expandable details
- **Team Section** — Leadership grid with social media links
- **Events Section** — Event cards with images, categories, registration links, and Google Photos links
- **Gallery** — Masonry-style photo grid with Google Photos link
- **Registration Portal** — Full form with M-Pesa & Family Bank payment options + resource downloads
- **Blog & Testimonials** — Latest posts and member testimonials
- **Footer** — Social media (Twitter, FB, Instagram, LinkedIn, TikTok, WhatsApp Channel), contact info, privacy/terms links
- **Floating WhatsApp** — Direct executive DM button
- **Back to Top** — Smooth scroll-to-top button
- **Admin Announcement Banner** — Dismissable banner for club announcements
- **Scroll Animations** — Elements animate in as you scroll
- **SEO Metadata** — OpenGraph, Twitter cards, and meta tags configured

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
karu-nature-club/
├── app/
│   ├── layout.tsx              # Root layout with metadata & Google Fonts
│   ├── page.tsx                # Main page assembling all sections
│   ├── globals.css             # Global styles + Tailwind directives
│   └── components/
│       ├── Preloader.tsx       # Animated preloader
│       ├── Navbar.tsx          # Sticky glassmorphism navbar
│       ├── HeroCarousel.tsx    # Hero section with image carousel
│       ├── About.tsx           # About + Why Join Us
│       ├── Activities.tsx      # 7 sub-committee cards
│       ├── Team.tsx            # Leadership team
│       ├── Events.tsx          # Events grid with Google Photos links
│       ├── Gallery.tsx         # Photo gallery
│       ├── Registration.tsx    # Registration form + payments
│       ├── Blog.tsx            # Blog posts + testimonials
│       ├── Footer.tsx          # Footer with social media + contact
│       ├── FloatingButtons.tsx # WhatsApp float + back-to-top
│       └── ScrollAnimations.tsx# Intersection observer for animations
├── public/                     # Static assets (add favicon here)
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#2C5F2D` (Forest Green) |
| Secondary | `#97BC62` (Moss) |
| Background | `#F8F5EE` (Cream) |
| Accent | `#8B6914` (Earth) |
| Font Display | Playfair Display (serif) |
| Font Body | Lato (sans-serif) |

---

## ⚙️ Customization

- **Images**: Replace Unsplash URLs in component files with actual club photos
- **Contact Info**: Update phone, email, and address in `Footer.tsx`
- **Payment Details**: Update M-Pesa Pay Bill and Family Bank account in `Registration.tsx`
- **WhatsApp Number**: Update the wa.me link in `FloatingButtons.tsx` and `Footer.tsx`
- **Google Photos**: Replace `#` href with actual Google Photos album links in `Events.tsx` and `Gallery.tsx`
- **Social Media**: Update social media links in `Footer.tsx`
- **Announcement Banner**: Edit the banner text in `FloatingButtons.tsx`

---

## 📦 Dependencies

- `next` — Framework
- `react` / `react-dom` — UI library
- `tailwindcss` — Utility-first CSS
- `lucide-react` — Icon library
- `framer-motion` — Animations (optional enhancement)
- `clsx` — Conditional class utility

---

## 🌐 Deployment

Deploy on [Vercel](https://vercel.com) (recommended for Next.js):

```bash
npm install -g vercel
vercel
```

Or build and deploy to any Node.js-compatible host.

---

**© 2025 Karatina University Nature Club** — Ken Ndiki
