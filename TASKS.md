# walander.co - Tasks

**Project:** walander.co Portfolio Site  
**Last Updated:** 2026-04-11  
**Status:** Planning

---

## Phase 1: Setup & Foundation

### TASK-1: Initialize Next.js Project
**Priority:** P0  
**Status:** Not Started  
**Owner:** Richard/CTO

- [ ] Initialize Next.js 15 with TypeScript
  ```bash
  npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir
  ```
- [ ] Install shadcn/ui
  ```bash
  npx shadcn@latest init
  ```
- [ ] Install additional dependencies
  - framer-motion
  - lucide-react (icons)
  - next-themes (dark mode)
- [ ] Setup basic folder structure
  - app/
  - components/
  - lib/
  - public/images/
- [ ] Configure tailwind.config.ts
- [ ] Setup base layout and metadata

---

### TASK-2: Firebase Configuration
**Priority:** P0  
**Status:** Not Started  
**Owner:** Richard

- [ ] Install Firebase CLI globally
  ```bash
  npm install -g firebase-tools
  ```
- [ ] Login to Firebase
  ```bash
  firebase login
  ```
- [ ] Initialize Firebase in project
  ```bash
  firebase init hosting
  ```
- [ ] Configure firebase.json for Next.js static export
- [ ] Test deployment to Firebase
- [ ] Setup custom domain (walander.co)

---

### TASK-3: GitHub Actions CI/CD
**Priority:** P0  
**Status:** Not Started  
**Owner:** CTO

- [ ] Create `.github/workflows/deploy.yml`
- [ ] Configure build steps:
  - Checkout code
  - Install dependencies
  - Build Next.js (static export)
  - Deploy to Firebase Hosting
- [ ] Setup Firebase service account for CI
- [ ] Configure preview channels for PRs
- [ ] Test full deployment pipeline

---

## Phase 2: Design & Components

### TASK-4: Design System Setup
**Priority:** P0  
**Status:** Not Started  
**Owner:** Richard

- [ ] Choose color palette (neutral + accent)
- [ ] Define typography scale
- [ ] Setup Tailwind custom colors/fonts
- [ ] Create base components:
  - Button
  - Card
  - Section wrapper
  - Navigation
  - Footer
- [ ] Implement dark mode support

---

### TASK-5: Layout Components
**Priority:** P1  
**Status:** Not Started  
**Owner:** Richard

- [ ] Create root layout (app/layout.tsx)
  - Metadata setup
  - Navigation component
  - Footer component
  - Theme provider
- [ ] Create page layouts
- [ ] Responsive navigation (mobile menu)

---

## Phase 3: Pages & Content

### TASK-6: Home Page
**Priority:** P0  
**Status:** Not Started  
**Owner:** Richard

- [ ] Hero section
  - Name and tagline
  - Subtle animation/gradient
- [ ] Introduction paragraph
- [ ] Featured projects section (3-4 cards)
- [ ] Skills/expertise section
- [ ] Call to action (contact)

---

### TASK-7: About Page
**Priority:** P1  
**Status:** Not Started  
**Owner:** Richard

- [ ] Full bio text
- [ ] Profile photo
- [ ] Skills list/grid
- [ ] Experience timeline
- [ ] Education (optional)

---

### TASK-8: Projects Page
**Priority:** P0  
**Status:** Not Started  
**Owner:** Richard

- [ ] Project grid layout
- [ ] Project card component with hover effects
- [ ] Filter by category (optional)
- [ ] Load projects from data file

---

### TASK-9: Project Detail Pages
**Priority:** P1  
**Status:** Not Started  
**Owner:** Richard

- [ ] Dynamic route setup (`/projects/[slug]`)
- [ ] Project detail layout
- [ ] Case study content structure
- [ ] Image gallery/lightbox
- [ ] Prev/Next project navigation

---

### TASK-10: Contact Page
**Priority:** P1  
**Status:** Not Started  
**Owner:** Richard

- [ ] Email link (mailto)
- [ ] Social links (LinkedIn, GitHub, etc.)
- [ ] Contact form (optional)
- [ ] Copy email to clipboard button

---

## Phase 4: Polish & Optimization

### TASK-11: Content & Images
**Priority:** P0  
**Status:** Not Started  
**Owner:** Richard

- [ ] Write all copy/text content
- [ ] Gather project images/screenshots
- [ ] Optimize images (WebP format)
- [ ] Create Open Graph image
- [ ] Write meta descriptions

---

### TASK-12: SEO & Meta Tags
**Priority:** P1  
**Status:** Not Started  
**Owner:** CTO

- [ ] Setup meta tags for all pages
- [ ] Open Graph tags
- [ ] JSON-LD structured data
- [ ] Generate sitemap.xml
- [ ] Create robots.txt
- [ ] Setup canonical URLs

---

### TASK-13: Performance Optimization
**Priority:** P1  
**Status:** Not Started  
**Owner:** CTO

- [ ] Optimize images (next/image)
- [ ] Lazy load below-fold content
- [ ] Minimize JavaScript bundle
- [ ] Run Lighthouse audit
- [ ] Fix any performance issues
- [ ] Core Web Vitals check

---

### TASK-14: Accessibility
**Priority:** P1  
**Status:** Not Started  
**Owner:** Richard

- [ ] Semantic HTML audit
- [ ] ARIA labels check
- [ ] Keyboard navigation test
- [ ] Color contrast verification
- [ ] Screen reader test
- [ ] Reduced motion support

---

## Phase 5: Launch

### TASK-15: Pre-Launch Checklist
**Priority:** P0  
**Status:** Not Started  
**Owner:** Richard/Vader

- [ ] All content reviewed
- [ ] All links working
- [ ] Mobile responsive check
- [ ] Cross-browser testing
- [ ] Lighthouse score 95+
- [ ] Domain configured
- [ ] SSL certificate active

---

### TASK-16: Launch
**Priority:** P0  
**Status:** Not Started  
**Owner:** Richard

- [ ] Final deployment
- [ ] DNS update (if needed)
- [ ] Test live site
- [ ] Announce on social media

---

## Content Required

**Projects to include:**
- Kraft (Flutter app)
- Beam (macOS app)
- [Add more projects...]

**Images needed:**
- Profile photo
- Project screenshots (3-5 per project)
- Open Graph image (1200x630)

**Copy needed:**
- Home page intro
- About page bio
- Project descriptions
- Meta descriptions

---

## Resources

**Inspiration:**
- https://hugeinc.com
- https://pentagram.com
- https://vanSchneider.com

**Tech docs:**
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- Firebase Hosting: https://firebase.google.com/docs/hosting

---

*Next step: Start with TASK-1 (Initialize Next.js Project)*
