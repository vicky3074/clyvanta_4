# Clyvanta Project - AI Assistant Instructions

**Last Updated**: December 23, 2025

---

## 🎯 Project Overview

**Clyvanta** is a strategic technology consultancy website built with Next.js 14, focusing on production-ready AI systems and enterprise software delivery.

- **Live Site**: https://www.clyvanta.com
- **Repository**: https://github.com/vicky3074/clyvanta_4
- **Owner**: Vignesh (vicky3074)
- **Framework**: Next.js 14.2.18 with App Router
- **Deployment**: Vercel (automatic on push to main)

---

## 🔐 Security & Credentials

### Environment Variables (6 Total)

**Local Development**: `clyvanta-website/.env.local` (git-ignored)

**Production (Vercel)**: All 6 variables configured in dashboard
1. `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity CMS project ID
2. `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset (production)
3. `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics tracking ID
4. `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` - Contact form submissions
5. `NEXT_PUBLIC_WEB3FORMS_NEWSLETTER_KEY` - Newsletter subscriptions
6. `NEXT_PUBLIC_COOKIEYES_CLIENT_ID` - Cookie consent banner

### Encrypted Credentials Vault

**Location**: `secrets/CREDENTIALS.md` (encrypted with git-crypt)

**What's inside**:
- All environment variable values
- GitHub SSH keys
- Deployment credentials
- Complete setup instructions

**To access**:
1. Get unlock key from Apple Passwords: "Git-crypt Key - Vicky3074/Clyvanta_4"
2. Unlock: `git-crypt unlock /path/to/key`
3. Read: `cat secrets/CREDENTIALS.md`

**IMPORTANT**:
- ✅ This file is encrypted in Git (safe to push)
- ✅ Unlock key stored in Apple Passwords (synced via iCloud)
- ❌ NEVER commit `.env.local` (already git-ignored)

---

## 📁 Project Structure

```
Clyvanta_4/
├── clyvanta-website/          # Main Next.js application
│   ├── app/                   # Next.js App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── contact/           # Contact page
│   │   ├── privacy/           # Privacy policy (Sanity CMS)
│   │   ├── terms/             # Terms of service (Sanity CMS)
│   │   └── studio/            # Sanity Studio (CMS admin)
│   ├── components/            # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx         # Includes newsletter form
│   │   ├── Hero.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── ContactForm.tsx    # Contact page form
│   │   └── ...
│   ├── lib/
│   │   └── sanity.ts          # Sanity client config
│   ├── .env.local             # Local credentials (git-ignored)
│   └── .env.example           # Template for developers
├── secrets/
│   └── CREDENTIALS.md         # Encrypted vault (git-crypt)
├── .gitattributes             # git-crypt encryption rules
├── README.md                  # Public documentation
└── CLAUDE.md                  # This file (AI instructions)
```

---

## 🎨 Design System

### Typography
- **Headings**: Manrope Bold (700) - `.heading-display`, `.heading-section`
- **Body**: Inter (400, 600) - `.text-intro`, `.text-body`

### Colors
- **Primary Gradient**: `from-orange-500 via-orange-600 to-red-500`
- **Background**: `slate-950` (dark theme)
- **Text**: `white`, `blue-100`
- **Highlights**: `clyvanta-blue-cyan` (#06B6D4) - for stats/data
- **Semantic**: Defined in `tailwind.config.js`

### Key Classes
- `.section-large` - Standard section padding
- `.bg-section-blue` - Dark section background
- `.eyebrow` - Small uppercase labels

---

## 🔧 Development Workflow

### Local Development
```bash
cd clyvanta-website
npm install
npm run dev  # Runs on http://localhost:3000
```

### Making Changes
1. Edit files in `clyvanta-website/`
2. Test locally at http://localhost:3000
3. Commit with conventional commits format:
   ```
   feat: add new feature
   fix: resolve bug
   sec: security improvements
   docs: update documentation
   ```
4. Push to main → Auto-deploys to Vercel

### Important Notes
- ✅ **Always test locally first** before pushing
- ✅ **Use environment variables** - never hardcode credentials
- ✅ **Follow existing patterns** - check similar components first
- ❌ **Never commit** `.env.local` or real credentials
- ❌ **Don't break** existing functionality without discussing

---

## 📝 Content Management

### Sanity CMS
- **Studio URL**: https://clyvanta.com/studio
- **What's in CMS**: Privacy Policy, Terms of Service
- **Client**: Configured in `lib/sanity.ts`
- **Usage**: Legal pages fetch content from Sanity at build time

### Static Content
- **Homepage sections**: Hardcoded in components (Hero, ValueProposition, etc.)
- **To update**: Edit component files directly

---

## 🎯 Key Features & Integrations

### Forms (Web3Forms)
- **Contact Form** (`/contact`): Uses `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- **Newsletter** (Footer): Uses `NEXT_PUBLIC_WEB3FORMS_NEWSLETTER_KEY`
- **Dashboard**: https://web3forms.com (check submissions)

### Analytics
- **Google Analytics**: Configured in `app/layout.tsx`
- **Vercel Speed Insights**: Included in layout

### Cookie Consent (CookieYes)
- **Banner**: Appears on first visit
- **Theme**: Custom dark theme with orange buttons
- **Styling**: Defined in `globals.css`

---

## 🚨 Common Tasks

### Adding New Environment Variable
1. Add to `.env.local` (local development)
2. Add to `.env.example` (template for others)
3. Add to Vercel dashboard (production)
4. Update `secrets/CREDENTIALS.md` (backup)
5. Update this file (CLAUDE.md)
6. Update README.md

### Updating ValueProposition Content
- **File**: `components/ValueProposition.tsx`
- **Current**: 2 paragraphs about production platforms + McKinsey stats
- **Highlights**: Use `text-clyvanta-blue-cyan` for statistics
- **Ask before**: Making major content changes

### Checking Deployment Status
- **Vercel**: https://vercel.com/vicky3074s-projects/clyvanta-4
- **Git log**: `git log --oneline -5`
- **Test**: Visit https://clyvanta.com

---

## 🔍 Troubleshooting

### Environment Variables Not Working
1. Check `.env.local` exists and has all 6 variables
2. Restart dev server: `npm run dev`
3. For production: Check Vercel dashboard → Environment Variables

### Form Not Submitting
1. Check Web3Forms key is correct in `.env.local` or Vercel
2. Check browser console for errors
3. Test in incognito window (cache issues)

### Sanity CMS Not Loading
1. Check `NEXT_PUBLIC_SANITY_PROJECT_ID` is set
2. Visit Sanity dashboard: https://sanity.io/manage
3. Check CORS origins include your domain

### Deployment Failed
1. Check Vercel dashboard for build logs
2. Test build locally: `npm run build`
3. Check all environment variables are set in Vercel

---

## 💡 Best Practices

### Code Style
- ✅ TypeScript with proper types
- ✅ Functional components with hooks
- ✅ Tailwind CSS for styling (no inline styles)
- ✅ Responsive design (mobile-first)
- ✅ Accessibility (WCAG compliance)

### Git Commits
- ✅ Use conventional commit format
- ✅ One logical change per commit
- ✅ Test before committing
- ✅ Include co-authored-by for AI assistance:
  ```
  Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
  ```

### Security
- ✅ All credentials in environment variables
- ✅ Never log sensitive data
- ✅ Use HTTPS for all external requests
- ✅ Keep dependencies updated

---

## 📚 Additional Resources

- **Main README**: `README.md` (public documentation)
- **Encrypted Vault**: `secrets/CREDENTIALS.md` (full credentials)
- **Vercel Dashboard**: https://vercel.com/vicky3074s-projects/clyvanta-4
- **Sanity Studio**: https://clyvanta.com/studio
- **Live Site**: https://www.clyvanta.com

---

## 🤖 For AI Assistants

### When Starting a New Session
1. Read this file first (CLAUDE.md)
2. Check README.md for technical details
3. If need credentials: Ask user to unlock `secrets/CREDENTIALS.md`
4. Review recent commits: `git log --oneline -10`

### Before Making Changes
1. Read existing code to understand patterns
2. Test locally first
3. Ask user if uncertain about design/content decisions
4. Follow existing coding standards

### After Making Changes
1. Test thoroughly in browser
2. Check for console errors
3. Verify responsive design (mobile/desktop)
4. Commit with proper message format
5. Confirm deployment completed successfully

---

**Remember**: This is a production website for a real business. Quality and security matter. When in doubt, ask the user before making significant changes.
