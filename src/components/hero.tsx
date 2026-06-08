import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 animate-fade-in-up">
          <Sparkles className="h-4 w-4" />
          <span>Modern aesthetics, curated for you</span>
        </div>
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl mx-auto leading-tight animate-fade-in-up [animation-delay:100ms]">
          Precision Curated <span className="text-primary">Style Essentials</span> for Every Gender.
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
          We analyze thousands of fit data points and real customer sentiment to bring you only the highest quality pieces. No trends, just Dynamic Fashions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
          <Button size="lg" asChild className="h-14 px-12 rounded-full text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105">
            <a href="#products">
              Explore Collection
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
