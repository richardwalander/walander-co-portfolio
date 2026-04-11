# walander.co - Tasks

**Project:** walander.co Portfolio Site  
**Last Updated:** 2026-04-11  
**Status:** Planning

---

## Phase 1: Setup & Foundation

### TASK-1: Initialize Next.js Project
**Priority:** P0  
**Status:** ✅ COMPLETE  
**Owner:** Richard/CTO

- [x] Initialize Next.js 15 with TypeScript
- [x] Install dependencies (framer-motion, lucide-react, tailwind-merge, clsx)
- [x] Setup basic folder structure
  - src/app/
  - src/components/
  - src/lib/
  - public/images/
- [x] Configure tailwind.config.js with custom theme
- [x] Setup base layout and metadata
- [x] Create homepage with hero section
- [x] Add footer with social links

---

### TASK-2: Firebase Configuration
**Priority:** P0  
**Status:** ✅ COMPLETE  
**Owner:** Richard

- [x] Install Firebase Tools locally (`npm install --save-dev firebase-tools`)
- [x] Create firebase.json with hosting configuration
  - Public directory: `dist`
  - SPA rewrite rules
  - Cache headers for static assets
- [x] Configure next.config.js for static export
- [x] Create README.md with Firebase setup instructions
- [ ] Login to Firebase (`npx firebase login`) - **Requires Richard to run**
- [ ] Initialize Firebase project - **Requires Richard to run**
- [ ] Test deployment to Firebase - **Requires Richard to run**
- [ ] Setup custom domain (walander.co) - **Requires Richard to configure**

---

### TASK-3: GitHub Actions CI/CD
**Priority:** P0  
**Status:** ✅ COMPLETE  
**Owner:** CTO

- [x] Create `.github/workflows/deploy.yml`
- [x] Configure build steps:
  - Checkout code
  - Setup Node.js 20
  - Install dependencies (`npm ci`)
  - Build Next.js (`npm run build`)
  - Deploy to Firebase Hosting
- [x] Configure preview channels for PRs
- [x] Setup production deployment on push to main
- [ ] Setup Firebase service account secret (`FIREBASE_SERVICE_ACCOUNT_WALANDER_CO`) - **Requires Richard to add in GitHub**
- [ ] Test full deployment pipeline - **Requires secret to be configured**

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
