# Interface Innovations – Site

A minimal compliance‑ready site for App Store / Play Store submissions.

## Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push to GitHub
2. Import the repo at [https://vercel.com/new](https://vercel.com/new)
3. Framework: **Next.js** (auto-detected)
4. No extra build settings needed
5. (Optional) Set `NEXT_TELEMETRY_DISABLED=1` environment variable

## Deploy to Netlify

- Build command: `npm run build`
- Publish directory: `.next`
- Framework: Next.js

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
