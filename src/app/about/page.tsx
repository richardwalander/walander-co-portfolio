import { ArrowRight, Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  "Product Design",
  "UX Design", 
  "UI Design",
  "Product Management",
  "Design Systems",
  "User Research",
  "Mobile Development",
  "React Native",
  "Flutter",
  "Figma",
  "Lean Startup",
  "Design Thinking",
  "Jobs-to-be-Done",
  "Product Analytics",
  "A/B Testing",
];

const experience = [
  {
    company: "Bokadirekt",
    role: "Design Lead Marketplace",
    period: "2023 - 2024",
    location: "Stockholm, Sweden",
    description: "Led the design efforts for a web and mobile app marketplace in the health and beauty industry, managing an app with 6M users and 2M bookings/month through detailed user research and UI/UX optimization.",
    achievements: [
      "Created and managed a cross-company design system in Figma, shared across web, Android, and iOS platforms",
      "Led and mentored a design guild of 4 designers",
      "Achieved 20% increase in mobile adoption through Jobs-to-be-done framework",
    ],
  },
  {
    company: "FirstVet",
    role: "Product Manager",
    period: "2020 - 2022",
    location: "Stockholm, Sweden",
    description: "Led the project to rewrite FirstVet's mobile applications for iOS and Android, introducing a design system and reusable UI components.",
    achievements: [
      "Implemented event-based tracking and product analytics using Firebase, increasing data-driven decisions by 20%",
      "Launched B2C subscription model in US market, achieving 25% increase in subscriptions",
      "Standardized partner integration processes, increasing integrations from 2-3 to 20 annually",
    ],
  },
  {
    company: "CoolCompany",
    role: "Head of Design & Product Manager",
    period: "2018 - 2020",
    location: "Stockholm, Sweden",
    description: "Developed comprehensive design systems and led product initiatives for freelancer platforms.",
    achievements: [
      "Reduced design inconsistencies by 30% with comprehensive design system",
      "Developed Tinder-style freelancer matching MVP, resulting in 50% increase in engagement",
      "Secured 4.2 million euros in funding for product development",
    ],
  },
  {
    company: "Springworks",
    role: "Head of Design",
    period: "2017 - 2018",
    location: "Stockholm, Sweden",
    description: "Established design system and branding for connected car SaaS platform.",
    achievements: [
      "Improved design coherence by 40% with new design system",
      "Increased partner engagement by 35% through analytics alignment",
      "Secured partnerships with two major European telecom operators",
    ],
  },
  {
    company: "MyNumbers",
    role: "UX Lead & Mobile Developer",
    period: "2016 - 2017",
    location: "Stockholm, Sweden",
    description: "Developed design system and designed MVP for business finance app across iOS, Android, and web.",
    achievements: [
      "Formed and mentored design team of 3",
      "Designed and developed React Native front-end architecture",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero min-h-[60vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              About Me
            </Badge>
            
            <h1 className="text-h1-mobile md:text-h1 font-bold tracking-tight mb-8">
              Crafting Digital
              <br />
              <span className="text-foreground-secondary">Products</span>
            </h1>
            
            <p className="text-body-lg text-foreground-secondary max-w-2xl mx-auto mb-8">
              Hi 👋, I&apos;m Richard Wålander. I&apos;m a professional everything-that-has-to-do-with-products 
              specialist based in Stockholm, Sweden. I specialize in digital products that solve real 
              problems for real people.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground-tertiary">
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Stockholm, Sweden
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section border-t border-border-subtle">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label mb-4">Background</p>
              <h2 className="text-h2-mobile md:text-h2 font-semibold mb-8">
                Experience across the entire product spectrum
              </h2>
              <div className="space-y-6 text-foreground-secondary">
                <p className="text-body-lg">
                  I have experience in development, design, product management, and business, 
                  and have worked with digital products in all shapes and forms. I&apos;m a big 
                  proponent of <strong className="text-foreground">Lean Startup</strong>,{" "}
                  <strong className="text-foreground">Lean UX</strong>,{" "}
                  <strong className="text-foreground">Jobs-to-be-done</strong>, and{" "}
                  <strong className="text-foreground">Design Thinking</strong>.
                </p>
                <p className="text-body">
                  In my spare time, I&apos;m an extreme sports enthusiast. I&apos;m a family 
                  father and a dog lover.
                </p>
              </div>
            </div>
            
            <div className="aspect-square md:aspect-[4/3] bg-background-tertiary rounded-3xl overflow-hidden">
              {/* Placeholder for profile image */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-foreground-muted">Profile Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section border-t border-border-subtle">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="label mb-4">Expertise</p>
              <h2 className="text-h2-mobile md:text-h2 font-semibold">
                Skills & Tools
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-normal"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section border-t border-border-subtle">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="label mb-4">Career</p>
              <h2 className="text-h2-mobile md:text-h2 font-semibold">
                Work Experience
              </h2>
            </div>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card key={index} className="border-border-subtle">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <CardTitle className="text-xl md:text-2xl">{job.company}</CardTitle>
                        <p className="text-foreground-secondary mt-1">{job.role}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{job.period}</Badge>
                        <p className="text-sm text-foreground-tertiary mt-1">{job.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground-secondary">{job.description}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground-secondary">
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section border-t border-border-subtle">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-h2-mobile md:text-h2 font-semibold mb-6">
              Let&apos;s connect
            </h2>
            <p className="text-body-lg text-foreground-secondary mb-10">
              Interested in working together? Feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:richard@walander.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
