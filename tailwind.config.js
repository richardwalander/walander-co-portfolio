/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Background colors
        background: {
          DEFAULT: "#0a0a0a",
          secondary: "#111111",
          tertiary: "#1a1a1a",
          elevated: "#222222",
        },
        // Text colors
        foreground: {
          DEFAULT: "#ffffff",
          secondary: "#a1a1aa",
          tertiary: "#71717a",
          muted: "#52525b",
        },
        // Accent
        accent: {
          DEFAULT: "#3b82f6",
          hover: "#60a5fa",
          glow: "rgba(59, 130, 246, 0.15)",
        },
        // Border colors
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          DEFAULT: "rgba(255, 255, 255, 0.12)",
          hover: "rgba(255, 255, 255, 0.2)",
        },
        // Shadcn compatibility
        card: {
          DEFAULT: "#111111",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#1a1a1a",
          foreground: "#71717a",
        },
        primary: {
          DEFAULT: "#3b82f6",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1a1a1a",
          foreground: "#a1a1aa",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#111111",
          foreground: "#ffffff",
        },
        ring: "#3b82f6",
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
        xl: "16px",
        "2xl": "24px",
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'hero-mobile': ['48px', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'h1': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1-mobile': ['36px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2-mobile': ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['24px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['20px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" },
        },
        "image-reveal": {
          "0%": { clipPath: "inset(100% 0 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "image-reveal": "image-reveal 0.8s ease-out forwards",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent)',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 40px rgba(59, 130, 246, 0.3)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
