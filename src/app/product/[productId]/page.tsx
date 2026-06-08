
"use client";

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  ExternalLink
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = use(params);
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">D</span>
            </div>
            <span className="font-headline font-bold text-xl tracking-tight">Dynamic Fashions</span>
          </Link>
          <Link href="/#products">
            <Button variant="ghost" size="sm" className="font-semibold">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collection
            </Button>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-2xl overflow-hidden border bg-white shadow-sm">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                priority
                className="object-cover"
                data-ai-hint={product.imageHint}
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col">
            <div className="mb-2">
              <Badge variant="secondary" className="rounded-full px-3 py-1 font-bold text-primary">
                {product.category}
              </Badge>
            </div>
            
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              {product.name}
            </h1>

            <div className="mb-8 mt-4">
              <span className="text-4xl font-bold font-headline text-primary">${product.price.toFixed(2)}</span>
            </div>

            <Separator className="mb-8" />

            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-bold mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="bg-muted/30 p-4 rounded-xl border border-border/50">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">{key}</p>
                    <p className="font-semibold text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="flex-1 h-14 rounded-full text-lg font-bold shadow-lg shadow-primary/20">
                <Link href={`/go/${product.id}`} target="_blank">
                  Buy now
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer for Detail Page */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs">© 2024 Dynamic Fashions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
