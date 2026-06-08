"use client";

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/lib/products';
import ProductCard from './product-card';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

function ProductGridContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const initialCategory = searchParams.get('category') || "All";
  
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);

  // Sync state with URL changes (e.g., from nav links)
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && CATEGORIES.includes(cat as any)) {
      setCategory(cat);
    } else if (!cat) {
      setCategory("All");
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                            product.description.toLowerCase().includes(search.toLowerCase());
      
      let matchesCategory = false;
      if (category === "All") {
        matchesCategory = true;
      } else if (category === "New Arrivals") {
        matchesCategory = !!product.isNew;
      } else {
        matchesCategory = product.category === category;
      }
      
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const handleCategoryChange = (val: string) => {
    setCategory(val);
    const params = new URLSearchParams(searchParams.toString());
    if (val === "All") {
      params.delete('category');
    } else {
      params.set('category', val);
    }
    router.push(`?${params.toString()}#products`, { scroll: false });
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="w-full md:max-w-md relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Search products, specs, or brands..." 
            className="pl-10 h-11 rounded-full border-border/50 bg-white/50 focus:bg-white transition-all shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Tabs value={category} className="w-full" onValueChange={handleCategoryChange}>
            <TabsList className="bg-muted/50 p-1 h-11 rounded-full border border-border/50">
              {CATEGORIES.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat} 
                  className="rounded-full px-6 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="bento-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-24 bg-white/50 rounded-2xl border-2 border-dashed">
          <SlidersHorizontal className="mx-auto h-12 w-12 text-muted-foreground/30 mb-4" />
          <h3 className="text-xl font-headline font-bold mb-2">No matching products found</h3>
          <p className="text-muted-foreground">Try adjusting your search or category filters.</p>
        </div>
      )}
    </section>
  );
}

export default function ProductGrid() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-24 text-center">Loading collection...</div>}>
      <ProductGridContent />
    </Suspense>
  );
}
