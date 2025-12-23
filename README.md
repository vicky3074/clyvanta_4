# Clyvanta Website

**Production-ready Next.js 14 website for Clyvanta Inc. - Strategic Technology Consultancy**

## 🚀 Live Site

- **Production**: [www.clyvanta.com](https://www.clyvanta.com)
- **Repository**: [github.com/vicky3074/clyvanta_4](https://github.com/vicky3074/clyvanta_4)

---

## 📦 Tech Stack

| Component | Version |
|-----------|---------|
| **Framework** | Next.js 14.2.18 (App Router) |
| **React** | 18.3.1 |
| **TypeScript** | 5.6.3 |
| **Styling** | Tailwind CSS 3.4.17 |
| **Animations** | Framer Motion 11.11.17 |
| **CMS** | Sanity v3 (Headless CMS) |
| **Analytics** | Google Analytics 4 + Vercel Speed Insights |
| **Cookie Consent** | CookieYes |
| **Forms** | Web3Forms |
| **Deployment** | Vercel + Cloudflare CDN |

---

## 🎨 Design System

### Typography
- **Headings**: Manrope Bold (700)
- **Body**: Inter (400, 600)

### Color Palette
- **Primary**: Orange gradient (`from-orange-500 via-orange-600 to-red-500`)
- **Background**: Slate-950 (dark theme throughout)
- **Text**: White/Blue-100 on dark
- **Accents**: Orange-400/500 for CTAs

---

## 🛠️ Development

### Local Setup

```bash
# Navigate to project
cd clyvanta-website

# Install dependencies
npm install

# Run development server
npm run dev

# Access at http://localhost:3000
```

### Docker Development (Recommended)

```bash
# Build image
docker build -t clyvanta-web .

# Run container
docker run -d -p 3000:3000 --name clyvanta-dev clyvanta-web

# Rebuild after changes
docker stop clyvanta-dev && docker rm clyvanta-dev
docker build -t clyvanta-web .
docker run -d -p 3000:3000 --name clyvanta-dev clyvanta-web
```

### Build for Production

```bash
npm run build    # Creates optimized production build
npm start        # Serves production build locally
```

---

## 📁 Project Structure

```
clyvanta_4/
├── clyvanta-website/
│   ├── app/                   # Next.js App Router
│   │   ├── page.tsx          # Homepage
│   │   ├── contact/          # Contact page
│   │   ├── privacy/          # Privacy policy (CMS-powered)
│   │   ├── terms/            # Terms of service (CMS-powered)
│   │   └── studio/           # Sanity Studio (CMS admin)
│   │       └── [[...index]]/
│   │           └── page.tsx
│   ├── components/           # React components
│   │   ├── Header.tsx        # Fixed navigation
│   │   ├── Footer.tsx        # Footer with social links
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Capabilities.tsx  # Services showcase
│   │   ├── ContactForm.tsx   # Contact form (Web3Forms)
│   │   ├── PortableText.tsx  # Sanity rich text renderer
│   │   └── ...
│   ├── lib/
│   │   └── sanity.ts         # Sanity client & queries
│   ├── sanity/               # Sanity CMS configuration
│   │   └── schemas/
│   │       ├── index.ts
│   │       └── legalPage.ts  # Schema for legal pages
│   ├── public/images/        # Logos and assets
│   ├── middleware.ts         # Pathname routing for CMS
│   ├── sanity.config.ts      # Sanity Studio config
│   ├── .npmrc                # Legacy peer deps for Sanity
│   ├── Dockerfile
│   └── package.json
└── README.md
```

---

## 📄 Key Pages

### Homepage (`/`)
- Hero with service pillars (Data & AI, Product & Cloud, Digital Transformation)
- Capabilities overview
- Who We Help (partners showcase)
- How We Work (4-step process)
- Value Proposition
- Final CTA

### Contact Page (`/contact`)
- Two-column layout (2/5 info, 3/5 form)
- Contact cards: Email, Phone, Location, Social links
- Web3Forms integration
- Fields: Full Name, Work Email, Phone (optional), Company (optional), Message

### Legal Pages (CMS-Powered)
- `/privacy` - Privacy Policy (managed via Sanity CMS)
- `/terms` - Terms of Service (managed via Sanity CMS)

### CMS Admin
- `/studio` - Sanity Studio (web-based content editor)
  - Edit Privacy Policy and Terms of Service
  - Rich text editing with PortableText
  - Access: https://clyvanta.com/studio

---

## 🔧 Key Features

### Design & Performance
- ✅ Fully responsive (mobile-first)
- ✅ Dark theme throughout
- ✅ Smooth scroll navigation with header offset
- ✅ Framer Motion animations
- ✅ SEO optimized with meta tags
- ✅ WCAG accessibility compliant

### Content Management
- ✅ **Sanity CMS v3** - Headless CMS for content management
- ✅ **Web-based Studio** - Edit content at `/studio` route
- ✅ **PortableText** - Rich text editing with custom styling
- ✅ **Privacy & Terms** - Legal pages managed via CMS

### Analytics & Tracking
- ✅ Google Analytics 4 tracking
- ✅ Vercel Speed Insights
- ✅ CookieYes cookie consent (dark theme)

### Integrations
- ✅ **Web3Forms** - Contact form with spam protection
- ✅ Social links (LinkedIn, X)
- ✅ Cloudflare CDN - WWW to non-WWW redirect

---

## 🔗 Configuration

### Environment Variables

**IMPORTANT**: All credentials are now stored in environment variables for security.

1. **Copy the template file**:
   ```bash
   cp clyvanta-website/.env.example clyvanta-website/.env.local
   ```

2. **Fill in your credentials** in `.env.local`:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
   - `NEXT_PUBLIC_SANITY_DATASET` - Dataset name (usually 'production')
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics measurement ID
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` - Web3Forms contact form key
   - `NEXT_PUBLIC_WEB3FORMS_NEWSLETTER_KEY` - Web3Forms newsletter key
   - `NEXT_PUBLIC_COOKIEYES_CLIENT_ID` - CookieYes client ID

3. **NEVER commit `.env.local`** - It's already in `.gitignore`

4. **For production deployment** (Vercel):
   - Add all environment variables in Vercel dashboard
   - Settings → Environment Variables → Add each variable

### Encrypted Credentials (git-crypt)

All project credentials are stored in an **encrypted file** that's safe to commit to Git.

**Location**: `secrets/CREDENTIALS.md` (encrypted with git-crypt)

**What's inside**:
- All environment variables
- GitHub SSH keys
- Deployment credentials
- Setup instructions for new developers

**To access on a new machine**:
1. Get unlock key from **Apple Passwords**: "Git-crypt Key - Vicky3074/Clyvanta_4"
2. Unlock the repository:
   ```bash
   # Decode and save unlock key
   echo "[BASE64_KEY_FROM_APPLE_PASSWORDS]" | base64 -d > ~/clyvanta-unlock.key

   # Unlock repository
   cd clyvanta_4
   git-crypt unlock ~/clyvanta-unlock.key

   # View all credentials
   cat secrets/CREDENTIALS.md
   ```

**Security**:
- ✅ Encrypted in Git (safe to push to GitHub)
- ✅ Unlock key stored in Apple Passwords (synced via iCloud)
- ✅ Also backed up in Bitwarden (optional)

### Sanity CMS
- **Studio URL**: `https://clyvanta.com/studio`
- **CORS Origins**:
  - `http://localhost:3000` (development)
  - `https://clyvanta.com` (production)
- **Free Tier Limits**:
  - 10,000 documents
  - 2 users
  - 500MB assets

### Analytics
- **Google Analytics**: Configured via environment variable in `app/layout.tsx`
- **Speed Insights**: Vercel component added to track performance

### Form Submission
- **Service**: Web3Forms
- **Endpoint**: `https://api.web3forms.com/submit`
- **Spam Protection**: Honeypot field included
- **Fields**: Full Name, Work Email, Phone (optional), Company (optional), Message

### Cookie Consent
- **Service**: CookieYes
- **Theme**: Custom dark theme with orange accents

### Cloudflare CDN
- **Page Rule 1**: Force HTTPS on all `clyvanta.com` URLs
- **Page Rule 2**: Redirect `www.clyvanta.com/*` → `https://clyvanta.com/$1` (301)

---

## 🚢 Deployment

### Automatic Deployment
Every push to `main` triggers automatic Vercel deployment:

```bash
git add .
git commit -m "feat: update feature"
git push origin main
# Deploys automatically to www.clyvanta.com
```

### Vercel Settings
- **Root Directory**: `./clyvanta-website`
- **Framework**: Next.js
- **Build Command**: `next build`
- **Node Version**: 20.x

---

## 🔗 Important Links

### Contact Information
- **Email**: hello@clyvanta.com
- **Phone**: +1 (647) 490-9955
- **Location**: Toronto, Canada

### Social Media
- **LinkedIn**: [linkedin.com/company/clyvant-tech](https://www.linkedin.com/company/clyvant-tech)
- **X (Twitter)**: [x.com/Clyvanta](https://x.com/Clyvanta)

---

## 📝 Recent Updates

### December 23, 2025
- ✅ **Security Hardening**: Migrated all credentials to environment variables
- ✅ **git-crypt Integration**: Encrypted credentials vault in `secrets/CREDENTIALS.md`
- ✅ **Separate Web3Forms Keys**: Contact form and newsletter use dedicated keys
- ✅ **Content Update**: Refined ValueProposition with McKinsey statistics
- ✅ **Sanity CMS Integration**: Added headless CMS for content management
- ✅ **Sanity Studio**: Web-based editor at `/studio` route
- ✅ **CMS-Powered Legal Pages**: Privacy Policy and Terms of Service now editable via CMS
- ✅ **PortableText Renderer**: Custom rich text component with site styling
- ✅ **Middleware**: Conditional Header/Footer exclusion for studio routes
- ✅ **Cloudflare Redirect**: WWW to non-WWW permanent redirect

### December 22, 2024
- ✅ Web3Forms contact form integration
- ✅ Vercel Speed Insights
- ✅ Social links (LinkedIn, X) to Footer and Contact
- ✅ Redesigned Contact page (consultative approach)
- ✅ CookieYes cookie consent with dark theme
- ✅ Google Analytics 4

### December 21, 2024
- ✅ Complete dark theme redesign
- ✅ Initial Next.js 14 setup

---

## 🐛 Troubleshooting

### Port 3000 in use
```bash
lsof -i :3000
kill -9 <PID>
```

### Docker issues
```bash
docker stop clyvanta-dev && docker rm clyvanta-dev
docker build -t clyvanta-web .
docker run -d -p 3000:3000 --name clyvanta-dev clyvanta-web
```

### Dependencies issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Sanity CMS issues
```bash
# Clear Sanity cache
rm -rf .sanity

# Restart dev server
npm run dev

# Access studio at http://localhost:3000/studio
```

### Build fails on Vercel (Sanity peer dependencies)
- **Solution**: `.npmrc` file with `legacy-peer-deps=true` is already configured
- This allows Sanity v3 to work with Next.js 14 despite peer dependency warnings

---

## 🎯 Content Management Workflow

### Editing Legal Pages

1. **Access Sanity Studio**:
   - Production: `https://clyvanta.com/studio`
   - Local: `http://localhost:3000/studio`

2. **Edit Content**:
   - Click "Legal Page" in the sidebar
   - Select "Privacy Policy" or "Terms of Service"
   - Edit title, content, or update date
   - Rich text editor with formatting options

3. **Publish Changes**:
   - Click "Publish" button
   - Changes appear immediately on the website
   - No deployment needed!

### Future CMS Expansion

To make homepage content editable via CMS:
- Create new schemas for Hero, Stats, Testimonials
- Update components to fetch from Sanity
- All within free tier limits (10,000 docs)

---

## 📄 License

ISC - Clyvanta Inc.

---

**Last Updated**: December 23, 2024
