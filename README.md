# Interface Innovations – Site

A minimal compliance‑ready site for App Store / Play Store submissions.

**Live Site:** [https://interfaceinnovations.llc](https://interfaceinnovations.llc)

## Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Deployment

### Current Deployment: Vercel

The site is deployed on Vercel's free tier with automatic HTTPS and global CDN.

**Production URL:** https://interfaceinnovations-6yjtoxo44-avant-vernon-iis-projects.vercel.app

#### Deploy via CLI

```bash
# Install Vercel CLI globally (one-time setup)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

#### Custom Domain Setup

The custom domain `interfaceinnovations.llc` is configured with the following DNS records:

**DNS Provider:** Squarespace

```
Type: A
Host: @
Data: 76.76.21.21

Type: CNAME
Host: www
Data: cname.vercel-dns.com
```

#### Add/Update Domain

```bash
# Add domain to project
vercel domains add interfaceinnovations.llc

# Check domain status
vercel domains ls
```

### Alternative Deployment Options

<details>
<summary>Deploy to Netlify</summary>

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy to production
netlify deploy --prod
```

**Settings:**
- Build command: `npm run build`
- Publish directory: `.next`
- Framework: Next.js

</details>

## Customize

Before deploying, update:

- [ ] Update business address in `/app/support/page.tsx` (currently placeholder)
- [x] Add your company icons to `/public/icon.png` (512×512) and `/public/apple-touch-icon.png` (180×180) ✅
- [ ] Verify all email addresses are correct (`@interfaceinnovations.llc`)
- [ ] Domain is already set to `interfaceinnovations.llc` in `/app/layout.tsx` ✅
- [ ] Review and customize hero message in `/app/page.tsx` if needed

## Site Structure

### One-Pager Home Page
The main site (/) is now a beautiful single-page experience with sections:
- **Hero**: Eye-catching introduction with call-to-action
- **About**: Company values and approach (Focused, Secure, Supportive)
- **Contact**: Support and business inquiries

### Required Compliance Pages
✅ `/support` - Customer support contact information  
✅ `/privacy` - Privacy policy  
✅ `/delete-account` - Account deletion instructions  
✅ `/terms` - Terms of service

## Tech Stack

- **Next.js 15.5** (App Router with Turbo mode)
- **TypeScript 5.9** (strict mode)
- **Tailwind CSS 3.4** (with dark mode)
- **React 19**

## Structure

```text
app/
├── globals.css          # Global styles + Tailwind + smooth scroll
├── layout.tsx           # Root layout with nav/footer
├── page.tsx             # One-pager home (hero, about, contact)
├── support/page.tsx     # Support contact (compliance)
├── privacy/page.tsx     # Privacy policy (compliance)
├── delete-account/page.tsx  # Account deletion (compliance)
└── terms/page.tsx       # Terms of service (compliance)

components/
├── NavBar.tsx           # Sticky nav with anchor links (Home, About, Contact)
└── Footer.tsx           # Site footer
```

## License

© 2025 Interface Innovations LLC. All rights reserved.
