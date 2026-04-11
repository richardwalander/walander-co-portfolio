# walander.co - Portfolio Site

## Vision

**A clean, minimal portfolio showcasing Richard's work as a multidisciplinary product designer.**

A fast, elegant static site that presents projects, skills, and contact information with a focus on typography, whitespace, and subtle animations.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Hosting:** Firebase Static Hosting
- **CI/CD:** GitHub Actions → Firebase Hosting

## Design Principles

- **Minimal:** Less is more, focus on content
- **Fast:** Static generation, optimized images
- **Responsive:** Perfect on all devices
- **Accessible:** WCAG 2.1 AA compliant
- **SEO-friendly:** Meta tags, structured data

## Content Sources

**Primary sources for project content:**
- **Dribbble:** https://dribbble.com/richardwalander
- **Behance:** https://www.behance.net/richardwalander

These platforms contain existing project work and case studies that can be adapted for the portfolio site.

## Content Structure

### Pages

1. **Home/Landing**
   - Hero with name and tagline
   - Brief introduction
   - Featured projects (3-4)
   - Call to action (contact)

2. **About**
   - Full bio
   - Skills/expertise
   - Experience timeline
   - Photo

3. **Projects**
   - Grid of all projects
   - Filter by category
   - Project cards with hover effects

4. **Project Detail** (dynamic route)
   - Full case study
   - Images gallery
   - Process description
   - Technologies used
   - Live link / GitHub link

5. **Contact**
   - Email link
   - Social links (LinkedIn, GitHub, etc.)
   - Simple contact form (optional)

### Content to Include

**Projects:**
- Kraft (power estimation app)
- Beam (extended desktop)
- Other design/dev work
- Case studies with images

**Skills:**
- Product Design
- UI/UX Design
- Flutter Development
- Swift/iOS Development
- Design Systems
- Prototyping

## Technical Requirements

### Performance
- Lighthouse score: 95+ on all metrics
- First Contentful Paint: < 1.5s
- Total page size: < 500KB

### SEO
- Meta tags for all pages
- Open Graph tags
- Structured data (JSON-LD)
- Sitemap.xml
- robots.txt

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Color contrast ratios
- Reduced motion support

## Firebase Setup

### Hosting Configuration
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Deployment
- Automatic deploy on push to main
- Preview channels for PRs
- Custom domain: walander.co

## Development Workflow

### Branches
- `main` - Production
- `feature/*` - New features
- `content/*` - Content updates

### CI/CD Pipeline
1. GitHub Actions builds Next.js
2. Export to static files
3. Deploy to Firebase Hosting
4. Preview URL for PRs

## Design Inspiration

- **Minimal portfolios:** Huge, Pentagram, Tobias van Schneider
- **Typography:** Clean sans-serif (Inter or similar)
- **Colors:** Neutral palette with one accent color
- **Spacing:** Generous whitespace
- **Motion:** Subtle, purposeful animations

## Open Questions

1. Color scheme preference?
2. Which projects to highlight?
3. Contact form or just email link?
4. Blog section needed?
5. Analytics (Google Analytics/Plausible)?

---

*Created: 2026-04-11*
*Status: Planning*
