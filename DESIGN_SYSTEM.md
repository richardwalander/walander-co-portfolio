# Design System - walander.co

## Design Philosophy

**"Art Gallery Meets Digital Studio"**

A sophisticated, minimalist design that puts the work first. Inspired by Linear's technical elegance but with the refined, gallery-like presentation of high-end art portfolios.

### Core Principles

1. **Content First** - The work speaks for itself
2. **Generous Whitespace** - Let designs breathe
3. **Subtle Sophistication** - Refined details without distraction
4. **Dark Elegance** - Deep, rich backgrounds that make content pop
5. **Fluid Motion** - Smooth, purposeful animations

---

## Color Palette

### Background Colors
```css
--bg-primary: #0a0a0a        /* Pure deep black */
--bg-secondary: #111111      /* Slightly lifted black */
--bg-tertiary: #1a1a1a       /* Card/component backgrounds */
--bg-elevated: #222222       /* Hover states, modals */
```

### Text Colors
```css
--text-primary: #ffffff      /* Pure white for headings */
--text-secondary: #a1a1aa    /* Zinc-400 for body text */
--text-tertiary: #71717a     /* Zinc-500 for captions */
--text-muted: #52525b        /* Zinc-600 for disabled */
```

### Accent Colors
```css
--accent-primary: #3b82f6    /* Soft blue for CTAs */
--accent-hover: #60a5fa      /* Lighter blue on hover */
--accent-glow: rgba(59, 130, 246, 0.15)  /* Subtle glow */

--border-subtle: rgba(255, 255, 255, 0.08)
--border-default: rgba(255, 255, 255, 0.12)
--border-hover: rgba(255, 255, 255, 0.2)
```

### Gradients
```css
/* Hero background gradient */
--gradient-hero: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent);

/* Card subtle glow */
--gradient-card: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%);

/* Section dividers */
--gradient-divider: linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 50%, transparent);
```

---

## Typography

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

| Style | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| **Hero** | 72px (mobile: 48px) | 700 | 1.0 | -0.02em |
| **H1** | 56px (mobile: 36px) | 600 | 1.1 | -0.02em |
| **H2** | 36px (mobile: 28px) | 600 | 1.2 | -0.01em |
| **H3** | 24px | 500 | 1.3 | -0.01em |
| **Body Large** | 20px | 400 | 1.6 | 0 |
| **Body** | 16px | 400 | 1.6 | 0 |
| **Body Small** | 14px | 400 | 1.5 | 0 |
| **Caption** | 12px | 500 | 1.4 | 0.05em |

### Typography Patterns

- **Headings**: Tight letter-spacing, bold weights
- **Body**: Comfortable line-height (1.6), regular weight
- **Labels/Captions**: Uppercase, letter-spaced, small size
- **Code/Technical**: Monospace font, slightly muted color

---

## Spacing System

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| **space-1** | 4px | Icon gaps, tight spacing |
| **space-2** | 8px | Small gaps |
| **space-3** | 12px | Component padding |
| **space-4** | 16px | Default spacing |
| **space-6** | 24px | Section gaps |
| **space-8** | 32px | Large gaps |
| **space-12** | 48px | Section padding |
| **space-16** | 64px | Major sections |
| **space-24** | 96px | Hero spacing |
| **space-32** | 128px | Major section breaks |

### Section Spacing
- **Hero**: `padding: 160px 0` (mobile: 96px)
- **Sections**: `padding: 128px 0` (mobile: 80px)
- **Cards**: `padding: 24px` or `32px`

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| **radius-sm** | 6px | Small buttons, tags |
| **radius-md** | 8px | Inputs, small cards |
| **radius-lg** | 12px | Cards, containers |
| **radius-xl** | 16px | Large cards, modals |
| **radius-2xl** | 24px | Hero sections |
| **radius-full** | 9999px | Pills, avatars |

---

## Shadows & Effects

### Box Shadows
```css
/* Subtle card lift */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);

/* Card hover */
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);

/* Modal/dropdown */
--shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.5);

/* Glow effect */
--shadow-glow: 0 0 40px rgba(59, 130, 246, 0.3);
```

### Backdrop Effects
```css
/* Glassmorphism */
--backdrop-blur: blur(20px) saturate(180%);
--backdrop-bg: rgba(17, 17, 17, 0.8);

/* Card hover glow */
--card-glow: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%);
```

---

## Animation & Motion

### Timing Functions
```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Durations
```css
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
--duration-slower: 500ms;
```

### Common Animations

**Fade In Up (Content reveal)**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Usage: animation: fadeInUp 0.5s ease-out forwards */
```

**Glow Pulse (Subtle attention)**
```css
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.2); }
  50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.4); }
}
```

**Image Reveal (Gallery feel)**
```css
@keyframes imageReveal {
  from {
    clip-path: inset(100% 0 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}
```

---

## Component Patterns

### Buttons

**Primary Button**
```css
/* Base */
background: #3b82f6;
color: white;
border-radius: 8px;
padding: 12px 24px;
font-weight: 500;
transition: all 0.2s ease;

/* Hover */
background: #60a5fa;
transform: translateY(-1px);
box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);

/* Active */
transform: translateY(0);
```

**Secondary Button**
```css
/* Base */
background: transparent;
color: #a1a1aa;
border: 1px solid rgba(255, 255, 255, 0.12);

/* Hover */
border-color: rgba(255, 255, 255, 0.2);
color: white;
background: rgba(255, 255, 255, 0.05);
```

**Ghost Button**
```css
/* Base */
background: transparent;
color: #71717a;

/* Hover */
color: white;
background: rgba(255, 255, 255, 0.05);
```

### Cards

**Project Card (Gallery Style)**
```css
/* Base */
background: #111111;
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 16px;
overflow: hidden;
transition: all 0.3s ease;

/* Hover */
border-color: rgba(255, 255, 255, 0.15);
transform: translateY(-4px);
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

/* Image treatment */
.image {
  filter: brightness(0.9);
  transition: filter 0.3s ease, transform 0.5s ease;
}

/* Hover image */
&:hover .image {
  filter: brightness(1);
  transform: scale(1.02);
}
```

**Content Card**
```css
background: rgba(17, 17, 17, 0.6);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 12px;
padding: 32px;
```

### Navigation

**Top Navigation**
```css
/* Base */
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 50;
padding: 20px 32px;
background: rgba(10, 10, 10, 0.8);
backdrop-filter: blur(20px);
border-bottom: 1px solid rgba(255, 255, 255, 0.05);

/* Logo */
font-weight: 600;
font-size: 18px;
letter-spacing: -0.02em;

/* Links */
color: #71717a;
font-size: 14px;
font-weight: 500;
transition: color 0.2s;

&:hover {
  color: white;
}
```

---

## Layout Patterns

### Container
```css
max-width: 1200px;
margin: 0 auto;
padding: 0 32px;

/* Mobile */
@media (max-width: 768px) {
  padding: 0 20px;
}
```

### Grid System
```css
/* Projects grid */
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 32px;

/* Tablet */
@media (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}

/* Mobile */
@media (max-width: 640px) {
  grid-template-columns: 1fr;
}
```

### Section Layout
```css
/* Full-width section */
width: 100%;
padding: 128px 0;
position: relative;

/* Optional: gradient background */
background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.08), transparent);
```

---

## Image Treatment

### Project Images
- **Aspect Ratio**: 16:9 or 4:3 (consistent)
- **Border Radius**: 12px (cards), 0 (full bleed)
- **Hover**: Subtle scale (1.02) + brightness increase
- **Loading**: Fade in with blur-up effect

### Profile/About Images
- **Border Radius**: Full circle for avatars, 16px for photos
- **Treatment**: Slight vignette or gradient overlay for text legibility

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| **sm** | 640px | Large phones |
| **md** | 768px | Tablets |
| **lg** | 1024px | Small laptops |
| **xl** | 1280px | Desktops |
| **2xl** | 1536px | Large screens |

---

## Accessibility

- **Color Contrast**: All text meets WCAG AA (4.5:1 minimum)
- **Focus States**: Visible focus rings on all interactive elements
- **Reduced Motion**: Respect `prefers-reduced-motion`
- **Keyboard Navigation**: All functionality accessible via keyboard

---

## Examples

### Hero Section
```
Background: --bg-primary with gradient overlay
Text: --text-primary (heading), --text-secondary (subtext)
Spacing: padding 160px top/bottom
Typography: Hero size (72px), tight letter-spacing
```

### Project Card
```
Background: --bg-secondary
Border: 1px solid --border-subtle
Border Radius: 16px
Image: aspect-ratio 16/9, brightness 0.9
Hover: lift -4px, border brighten, image brightness 1
```

### Navigation
```
Background: --bg-primary with 80% opacity + blur(20px)
Border Bottom: 1px solid --border-subtle
Height: 64px
Links: --text-secondary, hover to --text-primary
```

---

*Design System Version: 1.0*
*Inspired by: Linear, Art Gallery aesthetics, Minimalism*
*Date: 2026-04-12*
