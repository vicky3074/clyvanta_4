# Clyvanta Website

**One-page premium website for Clyvanta Inc. - Strategic Technology Consultancy**

---

## 🚀 Quick Start

```bash
cd clyvanta-website
npm install
npm run dev
```

Open http://localhost:3000

---

## 📦 Tech Stack

**Framework:** Next.js 14.2.18 + React 18.3.1 + TypeScript 5.6.3
**Styling:** Tailwind CSS 3.4.17
**Animations:** Framer Motion 11.11.17
**Forms:** Web3Forms API
**Hosting:** Vercel (free tier)

**Node Version Required:** 18.18.0 or 20.x LTS

---

## 🔐 Web3Forms Configuration

**Access Key:** `57daab8f-2a1f-419d-952d-22cb97c96213`

**✅ Client-Side Implementation:** Web3Forms is designed for client-side use. The access key can be safely included in your HTML/JSX - it only allows sending emails to your registered email address.

**No environment variables needed** - access key is included directly in the contact form component.

---

## 🎨 Design Assets

**Logos:** `/Users/vicky/Desktop/Vicky/Clyvanta Logo/Final - Clyvanta logo/`
- Header: `1.svg` or `3.svg`
- Colors: Extract from SVG (blue gradient + orange accent)

**Contact Info:**
- Email: hello@clyvanta.com
- Phone: +1 (647) 490-9955
- Location: Toronto, Canada

---

## 📄 Website Structure

Single-page scroll layout:
1. Hero Section
2. Value Proposition
3. Services (3 pillars)
4. How We Work (4 steps)
5. Why Clyvanta (5 differentiators)
6. Case Study
7. Industries
8. Final CTA
9. Footer

**Additional Pages:**
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)

**Components:**
- Floating contact widget (bottom-right)
- Footer contact form

---

## ⚡ Build & Deploy

```bash
# Development
npm run dev

# Production build (static export)
npm run build

# Deploy to Vercel
vercel

# Or deploy static 'out' folder to any host
```

**No environment variables needed** - fully static site with client-side form handling

---

## 🎯 Key Features

✅ Professional animations (Framer Motion)
✅ Mobile-first responsive design
✅ Secure form handling (server-side)
✅ Static export for fast loading
✅ SEO optimized

---

## 📝 Content Source

See `WEBSITE_COPY.md` for all website content (copy-paste ready)

---

## 🔧 Important Notes

**Framer Motion:**
- Requires `'use client'` directive in Next.js 14 App Router
- Compatible with React 18.3.1

**Web3Forms:**
- Client-side implementation (recommended by Web3Forms)
- Direct POST to `https://api.web3forms.com/submit`
- Access key is safe to include in client-side code
- Built-in spam protection on Web3Forms servers

**Static Export:**
- Configured with `output: "export"` in next.config.js
- No server-side routes needed
- Can deploy to any static hosting (Vercel, Netlify, GitHub Pages, etc.)

---

## 📞 Support

**Email:** hello@clyvanta.com
**Phone:** +1 (647) 490-9955

---

*Last updated: December 18, 2024*
