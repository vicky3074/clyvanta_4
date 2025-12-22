# Clyvanta Website

**Strategic Technology Consultancy - Premium One-Page Website**

## 🎉 Project Status: LIVE & OPERATIONAL

✅ Next.js 14 + TypeScript
✅ Docker-based development environment
✅ Tailwind CSS + Framer Motion
✅ Git repository: [github.com/vicky3074/clyvanta_4](https://github.com/vicky3074/clyvanta_4)
✅ Production site: [clyvanta-4.vercel.app](https://clyvanta-4.vercel.app)

---

## 🚀 Quick Start (Docker - Recommended)

**Prerequisites:**
- Docker Desktop installed and running
- No Node.js installation required!

```bash
# Navigate to project
cd clyvanta-website

# Build Docker image
docker build -t clyvanta-web .

# Run container
docker run -d -p 3000:3000 --name clyvanta-dev clyvanta-web

# Open http://localhost:3000
```

**Docker Management:**
```bash
# Stop container
docker stop clyvanta-dev

# Start container
docker start clyvanta-dev

# View logs
docker logs clyvanta-dev

# Restart after code changes
docker stop clyvanta-dev && docker rm clyvanta-dev
docker build -t clyvanta-web .
docker run -d -p 3000:3000 --name clyvanta-dev clyvanta-web
```

---

## 💻 Alternative: Local Development (Without Docker)

**⚠️ Important:** This project requires **Node.js 20 LTS**. Node 24+ has compatibility issues.

### Setup with fnm (Fast Node Manager)

```bash
# Install fnm
brew install fnm

# Install Node 20
fnm install 20
fnm use 20

# Install dependencies
cd clyvanta-website
npm install

# Start development server
npm run dev
```

---

## 📦 Tech Stack

| Component | Version |
|-----------|---------|
| **Framework** | Next.js 14.2.18 |
| **React** | 18.3.1 |
| **TypeScript** | 5.6.3 |
| **Styling** | Tailwind CSS 3.4.17 |
| **Animations** | Framer Motion 11.11.17 |
| **Forms** | Web3Forms API |
| **Hosting** | Vercel (Production) |
| **Development** | Docker (Node 20 Alpine) |

---

## 🏗️ Project Structure

```
clyvanta_4/
├── clyvanta-website/          # Main Next.js application
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── privacy/page.tsx   # Privacy policy
│   │   └── terms/page.tsx     # Terms of service
│   ├── components/            # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Capabilities.tsx   # Services section
│   │   ├── HowWeWork.tsx      # Process section
│   │   ├── WhoWeHelp.tsx      # Target audience
│   │   ├── ValueProposition.tsx
│   │   ├── FinalCTA.tsx       # Call-to-action
│   │   ├── Footer.tsx         # Footer
│   │   └── FloatingWidget.tsx # Contact widget
│   ├── public/                # Static assets
│   ├── Dockerfile             # Docker configuration
│   ├── .dockerignore          # Docker ignore rules
│   ├── package.json           # Dependencies
│   ├── tailwind.config.js     # Tailwind configuration
│   └── tsconfig.json          # TypeScript configuration
├── Images/                    # Project images
└── README.md                  # This file
```

---

## 🎨 Design System

### Colors
```javascript
'clyvanta-blue-dark': '#1E40AF'    // Primary blue
'clyvanta-blue-cyan': '#06B6D4'    // Accent cyan
'clyvanta-orange': '#F97316'        // CTA orange
```

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** Bold, large sizes
- **Body:** Regular weight, optimized line height

---

## 📄 Website Sections

1. **Hero** - Main headline with 3 service pillars
2. **Value Proposition** - Core differentiators
3. **Capabilities** - Detailed service offerings
4. **Who We Help** - Target audience segments
5. **How We Work** - 4-step process
6. **Final CTA** - Call-to-action section
7. **Footer** - Contact information

**Additional Pages:**
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

---

## 🔐 Forms & Contact

**Web3Forms Integration:**
- **Access Key:** `57daab8f-2a1f-419d-952d-22cb97c96213`
- Client-side implementation (secure by design)
- No backend required
- Built-in spam protection

**Contact Information:**
- Email: hello@clyvanta.com
- Phone: +1 (647) 490-9955
- Location: Toronto, Canada

---

## 🚢 Deployment

### Automatic Deployment (Vercel)

**Every push to `main` automatically deploys to production:**

```bash
git add .
git commit -m "feat: update hero section"
git push origin main
# Vercel auto-deploys in ~1-2 minutes
```

**Live Site:** https://clyvanta-4.vercel.app

**Vercel Configuration:**
- Root Directory: `./clyvanta-website`
- Framework: Next.js
- Build Command: `next build`
- Output Directory: `out`
- Node Version: 20.x

### Manual Build

```bash
cd clyvanta-website
npm run build
# Creates static 'out/' folder
```

---

## 🔧 Development Workflow

### Making Changes

1. **Start Docker container** (if not running):
   ```bash
   docker start clyvanta-dev
   ```

2. **Edit code** in your IDE (changes require rebuild for Docker)

3. **Rebuild and restart** to see changes:
   ```bash
   docker stop clyvanta-dev && docker rm clyvanta-dev
   docker build -t clyvanta-web .
   docker run -d -p 3000:3000 --name clyvanta-dev clyvanta-web
   ```

4. **Push to production**:
   ```bash
   git add .
   git commit -m "feat: your change"
   git push origin main
   ```

### Hot Reload (Local Development Only)

For faster development with hot reload, use local development instead of Docker:
```bash
npm run dev
# Changes appear instantly without rebuild
```

---

## 📚 Git Configuration

**Repository:** https://github.com/vicky3074/clyvanta_4
**SSH Key:** `/Users/vicky/Desktop/Vicky/Ventures/Keys/git-ssh/git-ssh-master-key`

Git is pre-configured with SSH authentication. Just use normal git commands.

---

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Find and kill process on port 3000
lsof -i :3000
kill -9 <PID>

# Or use different port with Docker
docker run -d -p 3001:3000 --name clyvanta-dev clyvanta-web
# Access at http://localhost:3001
```

### Docker Container Won't Start

```bash
# Remove existing container
docker stop clyvanta-dev && docker rm clyvanta-dev

# Rebuild and restart
docker build -t clyvanta-web .
docker run -d -p 3000:3000 --name clyvanta-dev clyvanta-web
```

### Node Version Issues (Local Development)

**Error:** Module not found, compilation errors
**Solution:** Use Node 20 LTS (not Node 24)

```bash
fnm use 20
node --version  # Should show v20.x.x
```

---

## 📊 Performance

- **Build Time:** ~7 seconds (Docker)
- **Dev Server Ready:** ~1.4 seconds
- **Page Load:** < 2 seconds (static export)
- **Bundle Size:** Optimized with Next.js automatic code splitting

---

## 🎯 Next Steps

**Development Roadmap:**
- [ ] Content updates and refinements
- [ ] Additional case studies
- [ ] Blog section implementation
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Custom domain setup

---

## 📞 Support & Contact

**Technical Issues:** Open an issue on [GitHub](https://github.com/vicky3074/clyvanta_4/issues)
**Business Inquiries:** hello@clyvanta.com
**Phone:** +1 (647) 490-9955

---

## 📝 Notes

- **Why Docker?** Node 24 on macOS has [known npm freezing issues](https://github.com/npm/cli/issues/8368). Docker provides a stable, isolated environment.
- **Framer Motion:** Requires `'use client'` directive in Next.js 14 App Router
- **Static Export:** Configured for optimal performance and hosting flexibility

---

*Last updated: December 21, 2024*
