import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">D</span>
            </div>
            <span className="font-headline font-bold text-xl tracking-tight">Dynamic Fashions</span>
          </Link>
          <div className="flex items-center gap-8 text-sm font-semibold text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Style that works for <span className="text-primary">everyone</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We started Dynamic Fashions because we were tired of the "throwaway" culture in clothing. We wanted a place where quality comes first, and where anyone—regardless of gender or personal style—can find pieces that actually last.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 text-center">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-4">Our Goal</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We're here to make getting dressed easier. We only show you items that are built well and easy to wear day after day.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 text-center">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-4">Real Quality</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We check the materials and the way things are made. If it's not going to hold up, it doesn't make it onto our list.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 text-center">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-4">For Everyone</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fashion isn't one-size-fits-all. We provide style sources for every gender and every aesthetic, from minimal to bold.
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="font-headline text-3xl font-bold mb-6">Why we do this</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Every item you see here is something we've looked at closely. We don't just follow what's popular for a week; we look for clothes that feel right and look good for more than just one season.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Whether you are looking for timeless menswear, modern womenswear, or accessories that bridge the gap, we believe you shouldn't have to guess if a product is actually good. We do the research so you don't have to.
            </p>
          </div>

          <div className="bg-primary text-primary-foreground p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline text-3xl font-bold mb-4">Find your next favorite piece</h2>
              <p className="mb-8 opacity-90 max-w-xl mx-auto">
                Check out our latest finds. We only recommend the stuff we'd wear ourselves.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 font-bold">
                <Link href="/#products">Explore the Collection</Link>
              </Button>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs">© 2024 Dynamic Fashions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
