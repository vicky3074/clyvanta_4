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
| **Analytics** | Google Analytics 4 + Vercel Speed Insights |
| **Cookie Consent** | CookieYes |
| **Forms** | Web3Forms |
| **Deployment** | Vercel + GitHub Actions |

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
│   │   ├── privacy/          # Privacy policy
│   │   └── terms/            # Terms of service
│   ├── components/           # React components
│   │   ├── Header.tsx        # Fixed navigation
│   │   ├── Footer.tsx        # Footer with social links
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Capabilities.tsx  # Services showcase
│   │   ├── ContactForm.tsx   # Contact form
│   │   └── ...
│   ├── public/images/        # Logos and assets
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

### Legal
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

---

## 🔧 Key Features

- ✅ Fully responsive (mobile-first)
- ✅ Dark theme throughout
- ✅ Smooth scroll navigation with header offset
- ✅ Framer Motion animations
- ✅ Google Analytics 4 tracking
- ✅ Vercel Speed Insights
- ✅ CookieYes cookie consent (dark theme)
- ✅ Social links (LinkedIn, X)
- ✅ Web3Forms contact form
- ✅ SEO optimized
- ✅ WCAG accessibility compliant

---

## 🔗 Configuration

### Analytics
- **Google Analytics**: ID `G-Q97BH5E9XE` (configured in `app/layout.tsx`)
- **Speed Insights**: Vercel component added to track performance

### Form Submission
- **Service**: Web3Forms
- **Access Key**: `57daab8f-2a1f-419d-952d-22cb97c96213`
- **Endpoint**: `https://api.web3forms.com/submit`
- **Spam Protection**: Honeypot field included

### Cookie Consent
- **Service**: CookieYes
- **Client ID**: `a900971ae185298bc6253a21fac1c9b4`
- **Theme**: Custom dark theme with orange accents

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

- **Dec 22, 2024**: Added Vercel Speed Insights
- **Dec 22, 2024**: Added social links (LinkedIn, X) to Footer and Contact
- **Dec 22, 2024**: Redesigned Contact page (consultative approach)
- **Dec 22, 2024**: Integrated CookieYes with dark theme
- **Dec 22, 2024**: Added Google Analytics 4
- **Dec 21, 2024**: Complete dark theme redesign
- **Dec 21, 2024**: Initial Next.js 14 setup

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

---

## 📄 License

ISC - Clyvanta Inc.

---

**Last Updated**: December 22, 2024
