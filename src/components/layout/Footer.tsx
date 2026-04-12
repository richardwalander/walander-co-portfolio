import Link from "next/link";
import { Github, Linkedin, Dribbble } from "lucide-react";

const socialLinks = [
  {
    href: "https://dribbble.com/richardwalander",
    label: "Dribbble",
    icon: Dribbble,
  },
  {
    href: "https://www.behance.net/richardwalander",
    label: "Behance",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3h6a4 4 0 0 1 4 4 4 4 0 0 1-4 4H3V3z" />
        <path d="M3 11h7a4 4 0 0 1 4 4 4 4 0 0 1-4 4H3v-8z" />
        <path d="M15 4h6" />
        <path d="M15 20a4 4 0 1 1 6-3.47" />
      </svg>
    ),
  },
  {
    href: "https://github.com/richardwalander",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/richardwalander",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle">
      <div className="container-custom py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-foreground-tertiary">
            © {currentYear} Richard Walander. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-tertiary hover:text-foreground transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
