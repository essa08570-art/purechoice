import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 flex flex-col h-full bg-card/80 backdrop-blur-sm">
      <Link href={`/product/${product.id}`} className="relative aspect-[4/3] overflow-hidden block">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={product.imageHint}
        />
        <Badge className="absolute top-3 left-3 bg-white/90 backdrop-blur text-primary hover:bg-white font-bold">
          {product.category}
        </Badge>
      </Link>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-1">
          <Link href={`/product/${product.id}`} className="hover:text-primary transition-colors">
            <h3 className="font-headline text-xl font-bold tracking-tight text-foreground line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed h-10">
          {product.description}
        </p>
      </CardHeader>

      <CardContent className="flex-grow pt-0">
        <div className="grid grid-cols-2 gap-2 mt-4">
          {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
            <div key={key} className="bg-muted/50 p-2 rounded-md">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{key}</p>
              <p className="text-xs font-medium truncate">{value}</p>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-4 border-t bg-muted/20 flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs font-medium text-muted-foreground">Price</span>
          <span className="text-xl font-bold font-headline text-foreground">${product.price.toFixed(2)}</span>
        </div>
        <Button asChild className="rounded-full font-bold group" variant="default" size="sm">
          <Link href={`/product/${product.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
