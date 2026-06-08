"use client";

import { useState } from 'react';
import { generateProductProsCons } from '@/ai/flows/generate-product-pros-cons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, BrainCircuit, CheckCircle2, XCircle } from 'lucide-react';
import { Product } from '@/lib/products';

export default function AISummaryTool({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<{ pros: string[]; cons: string[] } | null>(null);

  async function handleGenerate() {
    setLoading(true);
    try {
      const result = await generateProductProsCons({
        productName: product.name,
        productDescription: product.description,
        userReviews: product.reviews.join("\n"),
      });
      setSummary(result);
    } catch (error) {
      console.error("AI Generation failed", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-6">
      {!summary && !loading && (
        <Button 
          variant="secondary" 
          className="w-full h-11 font-semibold group border border-primary/20 hover:border-primary/50 transition-all"
          onClick={handleGenerate}
        >
          <BrainCircuit className="mr-2 h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
          Generate AI Sentiment Analysis
        </Button>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center py-8 bg-muted/30 rounded-lg border border-dashed animate-pulse">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-3" />
          <p className="text-sm font-medium text-muted-foreground">Analyzing user reviews & specs...</p>
        </div>
      )}

      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <Card className="border-emerald-100 bg-emerald-50/30">
            <CardHeader className="py-3 px-4">
              <CardTitle className="text-sm font-bold flex items-center text-emerald-700">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Verified Pros
              </CardTitle>
            </CardHeader>
            <CardContent className="py-2 px-4">
              <ul className="space-y-1.5">
                {summary.pros.map((pro, i) => (
                  <li key={i} className="text-xs text-emerald-800 flex items-start">
                    <span className="mr-1.5 mt-0.5">•</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-rose-100 bg-rose-50/30">
            <CardHeader className="py-3 px-4">
              <CardTitle className="text-sm font-bold flex items-center text-rose-700">
                <XCircle className="mr-2 h-4 w-4" />
                Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="py-2 px-4">
              <ul className="space-y-1.5">
                {summary.cons.map((con, i) => (
                  <li key={i} className="text-xs text-rose-800 flex items-start">
                    <span className="mr-1.5 mt-0.5">•</span>
                    {con}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
