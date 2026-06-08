import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/products';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId } = await params;
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Analytics Bridge: Here you would typically log the click to a database or analytics provider
  console.log(`[Analytics] Outbound affiliate click recorded: ${product.name} (${product.id})`);

  // Simple interstitial delay or direct redirect
  // For production, you might want to return a clean redirect to maintain SEO value
  return NextResponse.redirect(product.affiliateUrl);
}
