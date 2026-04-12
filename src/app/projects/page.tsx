import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    id: "kraft",
    title: "Kraft",
    subtitle: "Power-based training for athletes",
    description:
      "A Flutter/Android app that estimates running and cycling power from heart rate and motion sensors. Targets athletes who want power-based training without expensive hardware.",
    tags: ["Flutter", "Android", "iOS", "Product Design", "Mobile Development"],
    image: "https://cdn.dribbble.com/userupload/5417079/file/original-255c4c23a3c15c3db7a01b0b0777052a.png?format=webp&resize=800x600&vertical=center",
    links: {
      behance: "https://www.behance.net/gallery/...",
      github: "https://github.com/richardwalander/kraft",
    },
    featured: true,
  },
  {
    id: "beam",
    title: "Beam",
    subtitle: "Extended desktop streaming",
    description:
      "macOS application for extended desktop streaming. Transform any device into an additional display using WebSocket technology.",
    tags: ["macOS", "Swift", "Product Design", "System Architecture"],
    image: "https://cdn.dribbble.com/userupload/5494263/file/original-94f537a14b0e9a8dbe71e219b9281bb2.png?format=webp&resize=800x600&vertical=center",
    links: {
      behance: "https://www.behance.net/gallery/...",
      github: "https://github.com/richardwalander/beam",
    },
    featured: true,
  },
  {
    id: "bokadirekt",
    title: "Bokadirekt Marketplace",
    subtitle: "Health & beauty booking platform",
    description:
      "Led design for a marketplace with 6M users and 2M bookings/month. Created cross-platform design system in Figma.",
    tags: ["Design System", "Figma", "Marketplace", "Mobile App", "Web App"],
    image: "https://cdn.dribbble.com/userupload/10244614/file/still-90431b2c54196c1573bdb66189d9e8ee.png?format=webp&resize=800x600&vertical=center",
    links: {
      behance: "https://www.behance.net/gallery/...",
      live: "https://www.bokadirekt.se",
    },
    featured: false,
  },
  {
    id: "firstvet",
    title: "FirstVet",
    subtitle: "Veterinary telemedicine platform",
    description:
      "Led complete rewrite of iOS and Android apps. Introduced design system and event-based analytics with Firebase.",
    tags: ["Product Management", "Mobile App", "Design System", "Analytics"],
    image: "https://cdn.dribbble.com/userupload/10754426/file/still-728be8cc1619c4082272cbce0cfcbb7d.png?format=webp&resize=800x600&vertical=center",
    links: {
      behance: "https://www.behance.net/gallery/...",
      live: "https://www.firstvet.com",
    },
    featured: false,
  },
  {
    id: "coolcompany",
    title: "CoolCompany",
    subtitle: "Freelancer platform",
    description:
      "Developed design system and Tinder-style matching MVP for freelancers. Secured 4.2M EUR funding.",
    tags: ["Design System", "MVP", "Product Design", "Startup"],
    image: "https://cdn.dribbble.com/userupload/4153252/file/original-5b3b8c4a28e19dd2b6e7ce5756b4270f.png?format=webp&resize=800x600&vertical=center",
    links: {
      dribbble: "https://dribbble.com/shots/20143473-Web-page-design-exploration-for-freelance-payments-service",
    },
    featured: false,
  },
  {
    id: "springworks",
    title: "Springworks",
    subtitle: "Connected car SaaS",
    description:
      "Established design system for connected car platform. Secured partnerships with major European telecom operators.",
    tags: ["SaaS", "Design System", "B2B", "Automotive"],
    image: "https://cdn.dribbble.com/userupload/10906471/file/still-2b87d9f4b6b455b053ed22c04cf575cc.png?format=webp&resize=800x600&vertical=center",
    links: {
      behance: "https://www.behance.net/gallery/...",
    },
    featured: false,
  },
];

const dribbbleShots = [
  {
    id: 1,
    title: "Pull to Refresh & Skeleton Views - Bokadirekt App",
    image: "https://cdn.dribbble.com/userupload/10906471/file/still-2b87d9f4b6b455b053ed22c04cf575cc.png?format=webp&resize=800x600&vertical=center",
    url: "https://dribbble.com/shots/22874763-Pull-to-Refresh-Skeleton-Views-Bokadirekt-App",
  },
  {
    id: 2,
    title: "TabBar Animation - Bokadirekt 📱👆🔥",
    image: "https://cdn.dribbble.com/userupload/10754426/file/still-728be8cc1619c4082272cbce0cfcbb7d.png?format=webp&resize=800x600&vertical=center",
    url: "https://dribbble.com/shots/22818035-TabBar-Animation-Bokadirekt",
  },
  {
    id: 3,
    title: "E-mail One Time Password Animation - Bokadirekt App",
    image: "https://cdn.dribbble.com/userupload/10244614/file/still-90431b2c54196c1573bdb66189d9e8ee.png?format=webp&resize=800x600&vertical=center",
    url: "https://dribbble.com/shots/22627055-E-mail-One-Time-Password-Animation-Bokadirekt-App",
  },
  {
    id: 4,
    title: "BokIcons ✴️ - Beauty and health services icon set",
    image: "https://cdn.dribbble.com/userupload/9697066/file/original-e54e4ff0f552a675533df9962b8ce820.png?format=webp&resize=800x600&vertical=center",
    url: "https://dribbble.com/shots/22423063-BokIcons-Beauty-and-health-services-icon-set",
  },
  {
    id: 5,
    title: "Swoozh - UI Kit for fashion retail app",
    image: "https://cdn.dribbble.com/userupload/5494263/file/original-94f537a14b0e9a8dbe71e219b9281bb2.png?format=webp&resize=800x600&vertical=center",
    url: "https://dribbble.com/shots/20968740-Swoozh-UI-Kit-for-fashion-retail-app",
  },
  {
    id: 6,
    title: "Peak - UI Kit for a social training and workouts app",
    image: "https://cdn.dribbble.com/userupload/5417079/file/original-255c4c23a3c15c3db7a01b0b0777052a.png?format=webp&resize=800x600&vertical=center",
    url: "https://dribbble.com/shots/20940183-Peak-UI-Kit-for-a-social-training-and-workouts-app",
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero min-h-[50vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Selected Work
            </Badge>

            <h1 className="text-h1-mobile md:text-h1 font-bold tracking-tight mb-8">
              Projects &
              <br />
              <span className="text-foreground-secondary">Case Studies</span>
            </h1>

            <p className="text-body-lg text-foreground-secondary max-w-2xl mx-auto">
              A collection of products I&apos;ve designed, built, and shipped. From mobile
              apps to design systems to SaaS platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section border-t border-border-subtle">
        <div className="container-custom">
          <div className="mb-16">
            <p className="label mb-4">Featured</p>
            <h2 className="text-h2-mobile md:text-h2 font-semibold">
              Current Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="border-border-subtle overflow-hidden group"
              >
                <div className="aspect-video bg-background-tertiary relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-foreground-muted">{project.title} Preview</p>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {project.subtitle}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0" asChild>
                      <a href={project.links.behance} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-secondary text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  {project.links.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.links.live && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Site
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Work */}
      <section className="section border-t border-border-subtle">
        <div className="container-custom">
          <div className="mb-16">
            <p className="label mb-4">Portfolio</p>
            <h2 className="text-h2-mobile md:text-h2 font-semibold">
              Past Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="border-border-subtle overflow-hidden group"
              >
                <div className="aspect-[4/3] bg-background-tertiary relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-foreground-muted text-sm">{project.title}</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-foreground-secondary text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dribbble Section */}
      <section className="section border-t border-border-subtle">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="label mb-4">Dribbble</p>
              <h2 className="text-h2-mobile md:text-h2 font-semibold">
                Design Shots
              </h2>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <a
                href="https://dribbble.com/richardwalander"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Dribbble
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {dribbbleShots.map((shot) => (
              <a
                key={shot.id}
                href={shot.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="aspect-[4/3] bg-background-tertiary rounded-xl overflow-hidden relative">
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium line-clamp-2">
                      {shot.title}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section border-t border-border-subtle">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-h2-mobile md:text-h2 font-semibold mb-6">
              Have a project in mind?
            </h2>
            <p className="text-body-lg text-foreground-secondary mb-10">
              I&apos;m always interested in hearing about new opportunities and
              challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:richard@walander.com">
                  Let&apos;s Talk
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/about">
                  About Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
