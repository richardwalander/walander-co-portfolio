# walander.co Portfolio

A clean, minimal portfolio site built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/richardwalander/walander-co-portfolio.git
cd walander-co-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Build

```bash
# Build for production
npm run build

# The static files will be in the `dist` folder
```

## 🔥 Firebase Hosting Setup

Firebase project already exists: **walanderco**

### 1. Install dependencies
```bash
npm install
```

### 2. Deploy manually
```bash
npm run build
npx firebase deploy --only hosting:walanderco
```

### 3. Setup GitHub Actions (Automated Deployment)

#### Required Secrets
Go to **GitHub Repository Settings → Secrets and variables → Actions**, add:

1. **`FIREBASE_SERVICE_ACCOUNT`**
   - Go to [Firebase Console](https://console.firebase.google.com/project/walanderco/settings/serviceaccounts)
   - Project Settings → Service Accounts
   - Generate new private key
   - Copy the entire JSON content
   - Paste as the secret value

2. **Custom Domain (optional)**
   - In Firebase Console: Hosting → Add custom domain
   - Follow DNS configuration instructions

## 📝 Project Structure

```
walander-co-portfolio/
├── .github/workflows/    # CI/CD workflows
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   ├── components/      # React components
│   └── lib/             # Utility functions
├── public/              # Static assets
├── dist/                # Build output (gitignored)
├── firebase.json        # Firebase configuration
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## 🎨 Design System

### Colors
- Primary: Neutral dark (#09090b)
- Secondary: Neutral light (#f4f4f5)
- Accent: Custom accent color
- Muted: Gray tones for secondary text

### Typography
- Font: Inter (Google Fonts)
- Scale: Tailwind default scale

### Components
- Built with Tailwind CSS
- shadcn/ui compatible
- Framer Motion for animations

## 🚢 Deployment

### Automatic (Recommended)
- Push to `main` branch → Auto-deploy to production
- Create Pull Request → Get preview URL

### Manual
```bash
npm run build
npx firebase deploy
```

## 📄 License

Private - All rights reserved

---

**Built with:** Next.js 15 • TypeScript • Tailwind CSS • Firebase Hosting
