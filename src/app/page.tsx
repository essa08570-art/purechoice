import Hero from '@/components/hero';
import ProductGrid from '@/components/product-grid';
import SEOSchema from '@/components/seo-schema';
import { PRODUCTS } from '@/lib/products';
import { CheckCircle, ShieldCheck, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SEOSchema products={PRODUCTS} />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">D</span>
            </div>
            <span className="font-headline font-bold text-xl tracking-tight">Dynamic Fashions</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground">
            <Link href="/#products" className="hover:text-primary transition-colors">Shop All</Link>
            <Link href="/?category=New Arrivals#products" className="hover:text-primary transition-colors">New Arrivals</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About us</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="w-8 md:hidden"></div> {/* Spacer for mobile balance if needed */}
        </div>
      </nav>

      <Hero />

      {/* Trust Bar */}
      <section className="bg-primary/5 py-10 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-primary/70">
              <ShieldCheck className="h-6 w-6" />
              <span className="font-bold tracking-tight">Ethical Sourcing</span>
            </div>
            <div className="flex items-center gap-3 text-primary/70">
              <ShoppingBag className="h-6 w-6" />
              <span className="font-bold tracking-tight">Premium Curation</span>
            </div>
            <div className="flex items-center gap-3 text-primary/70">
              <CheckCircle className="h-6 w-6" />
              <span className="font-bold tracking-tight">Verified Quality</span>
            </div>
          </div>
        </div>
      </section>

      <div id="products">
        <div className="container mx-auto px-4 pt-16">
          <div className="text-center mb-4">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">Curated Collection</h2>
            <p className="text-muted-foreground mt-4 text-lg">Every piece is selected for durability, style, and fit.</p>
          </div>
        </div>
        <ProductGrid />
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-xl">D</span>
                </div>
                <span className="font-headline font-bold text-xl tracking-tight text-white">Dynamic Fashions</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Dynamic Fashions is an independent style platform. We help you build a wardrobe that lasts through expert curation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Collection</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Men</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Women</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">Our Goal</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Newsletter</h4>
              <p className="text-sm mb-4">Get style drops in your inbox.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="style@example.com" className="bg-slate-800 border-none rounded-md px-4 py-2 text-sm w-full focus:ring-1 ring-primary" />
                <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-bold">Join</button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs">© 2024 Dynamic Fashions Media. All rights reserved.</p>
            <p className="text-xs max-w-md text-center md:text-right">
              Disclaimer: Dynamic Fashions participates in various affiliate marketing programs, ensuring we provide unbiased reviews of products we truly love.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
