import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, MessageSquare, Globe } from 'lucide-react';

export default function ContactPage() {
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
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="font-semibold">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Get in touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a question about a piece or just want to say hi? We're always happy to hear from you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="h-12 w-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground mb-3 text-sm">Our team typically responds within 24 hours.</p>
                  <a 
                    href="mailto:khabsuem@gmail.com" 
                    className="text-primary font-bold text-xl hover:underline"
                  >
                    khabsuem@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 pt-8 border-t">
                <div className="h-12 w-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Feedback</h3>
                  <p className="text-muted-foreground text-sm">
                    We love hearing your thoughts on how we can improve our curation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 pt-8 border-t">
                <div className="h-12 w-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Global Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Operating out of our digital studio, reaching fashion lovers worldwide.
                  </p>
                </div>
              </div>
            </div>
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
