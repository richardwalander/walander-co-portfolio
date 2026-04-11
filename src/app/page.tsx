import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 md:py-48">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Richard Walander
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Product Designer & Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Crafting digital experiences that blend beautiful design with 
            functional technology. Building products for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-input bg-background rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container mx-auto px-4 py-24 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group relative bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kraft</h3>
                <p className="text-muted-foreground">
                  Power estimation app for runners and cyclists
                </p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Beam</h3>
                <p className="text-muted-foreground">
                  Extended desktop streaming for Mac
                </p>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">More Projects</h3>
                <p className="text-muted-foreground">
                  View all design and development work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            © 2026 Richard Walander. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://dribbble.com/richardwalander" className="text-muted-foreground hover:text-foreground transition-colors">
              Dribbble
            </a>
            <a href="https://www.behance.net/richardwalander" className="text-muted-foreground hover:text-foreground transition-colors">
              Behance
            </a>
            <a href="https://github.com/richardwalander" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
