import { ArrowRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero min-h-screen flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            {/* Label */}
            <Badge variant="secondary" className="mb-6 animate-fade-in-up">
              Available for new projects
            </Badge>

            {/* Heading */}
            <h1 className="text-hero-mobile md:text-hero font-bold tracking-tight mb-8 animate-fade-in-up delay-100">
              Product Designer
              <br />
              <span className="text-foreground-secondary">& Developer</span>
            </h1>

            {/* Description */}
            <p className="text-body-lg text-foreground-secondary max-w-xl mx-auto mb-12 animate-fade-in-up delay-200">
              Crafting digital experiences that blend beautiful design with 
              functional technology. Building products for athletes, creatives, 
              and everyone in between.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Button size="lg" asChild>
                <a href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDownRight className="text-foreground-tertiary rotate-45" size={24} />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section border-t border-border-subtle">
        <div className="container-custom">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <p className="label mb-4">Selected Work</p>
              <h2 className="text-h2-mobile md:text-h2 font-semibold">
                Featured Projects
              </h2>
            </div>
            <Button variant="ghost" className="hidden md:flex" asChild>
              <a href="/projects">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: Kraft */}
            <Card className="overflow-hidden group">
              <div className="aspect-[4/3] bg-background-tertiary overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-transform duration-500 group-hover:scale-105" />
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Mobile App</Badge>
                <CardTitle className="group-hover:text-white transition-colors">
                  Kraft
                </CardTitle>
                <CardDescription>
                  Power estimation app for runners and cyclists. Built with Flutter.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Project 2: Beam */}
            <Card className="overflow-hidden group">
              <div className="aspect-[4/3] bg-background-tertiary overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 transition-transform duration-500 group-hover:scale-105" />
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">macOS App</Badge>
                <CardTitle className="group-hover:text-white transition-colors">
                  Beam
                </CardTitle>
                <CardDescription>
                  Extended desktop streaming for Mac. Virtual display technology.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Project 3: More */}
            <Card className="overflow-hidden group">
              <div className="aspect-[4/3] bg-background-tertiary flex items-center justify-center">
                <div className="text-center">
                  <p className="text-foreground-secondary text-body">More Projects</p>
                  <p className="text-foreground-tertiary text-body-sm mt-2">
                    View full portfolio
                  </p>
                </div>
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Portfolio</Badge>
                <CardTitle className="group-hover:text-white transition-colors">
                  See All Work
                </CardTitle>
                <CardDescription>
                  Explore more projects on Dribbble and Behance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Mobile View All Button */}
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" asChild>
              <a href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="section border-t border-border-subtle">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="label mb-4">About Me</p>
              <h2 className="text-h2-mobile md:text-h2 font-semibold mb-6">
                Designing with purpose, building with passion
              </h2>
              <p className="text-body-lg text-foreground-secondary mb-8">
                I&apos;m a multidisciplinary product designer with a background in 
                development. I believe great products come from the intersection of 
                user needs, business goals, and technical possibilities.
              </p>
              <Button variant="outline" asChild>
                <a href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="aspect-square md:aspect-[4/3] bg-background-tertiary rounded-2xl" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section border-t border-border-subtle">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-h2-mobile md:text-h2 font-semibold mb-6">
              Let&apos;s work together
            </h2>
            <p className="text-body-lg text-foreground-secondary mb-10">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss 
              how we can bring your ideas to life.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
