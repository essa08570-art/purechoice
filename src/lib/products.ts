export interface Product {
  id: string;
  name: string;
  category: 'Men' | 'Women';
  description: string;
  price: number;
  affiliateUrl: string;
  imageUrl: string;
  imageHint: string;
  specs: Record<string, string>;
  isNew?: boolean;
}

export const CATEGORIES = ['All', 'New Arrivals', 'Men', 'Women'] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'f1',
    name: '3D Bar Necklace',
    category: 'Men',
    description: 'A sleek and modern vertical bar necklace, precision-crafted for a minimalist look that complements any attire.',
    price: 13.99,
    affiliateUrl: 'https://amzn.to/4e5HK3g',
    imageUrl: 'https://i.postimg.cc/GmWMMCF5/Gemini-Generated-Image-nigsdwnigsdwnigs.png',
    imageHint: 'bar necklace',
    isNew: true,
    specs: {
      "Material": "Stainless Steel",
      "Chain Type": "Box Chain",
      "Clasp Type": "Lobster"
    }
  },
  {
    id: 'f2',
    name: 'PU Leather Tote Bag',
    category: 'Women',
    description: 'Clean finish with a unique curved bottom and an asymmetrical flap that gives it a modern, stylish look.',
    price: 21.83,
    affiliateUrl: 'https://amzn.to/3RUHpcd',
    imageUrl: 'https://i.postimg.cc/dV1bd456/image-6efe0a81.png',
    imageHint: 'red handbag',
    isNew: true,
    specs: {
      "Material": "Vegan Leather",
      "Colors": "Red, Black, Coffee, White, Brown, Orange, Silver"
    }
  },
  {
    id: 'f3',
    name: 'Ultra-Thin Mens Watch',
    category: 'Men',
    description: 'A sophisticated and sleek ultra-thin timepiece designed for the modern gentleman, combining precision and elegance.',
    price: 46.18,
    affiliateUrl: 'https://amzn.to/4og6g6y',
    imageUrl: 'https://i.postimg.cc/26qjS43Z/71IJ03mbfc-L-AC-SY535.jpg',
    imageHint: 'mens watch',
    specs: {
      "Material": "Stainless steel",
      "Clasp": "Tang Buckle",
      "Length": "11 inches"
    }
  },
  {
    id: 'f4',
    name: 'Vintage Semi-Rimless Glasses',
    category: 'Men',
    description: 'Classic semi-rimless design with high-quality lenses, perfect for a vintage-inspired look and daily wear.',
    price: 8.99,
    affiliateUrl: 'https://amzn.to/3CHYm7D',
    imageUrl: 'https://i.postimg.cc/j2Pf3WVP/image-45e39c32.png',
    imageHint: 'rimless glasses',
    specs: {
      "Frame": "Semi-Rimless Metal",
      "Lens": "Anti-reflective",
      "Style": "Vintage"
    }
  },
  {
    id: 'f5',
    name: 'Tennis Bracelet',
    category: 'Women',
    description: 'Crafted with a customizable sliding closure, it blends effortless elegance with a perfect fit for everyday wear.',
    price: 66.50,
    affiliateUrl: 'https://amzn.to/49KuFey',
    imageUrl: 'https://i.postimg.cc/KzBPWh89/prdouct-2.jpg',
    imageHint: 'gold bracelet',
    specs: {
      "Material": "Brass, Crystal",
      "Colors": "Pink Tone, Rhodium Tone, Gold Tone",
      "Clasp": "Customizable Sliding Closure"
    }
  },
  {
    id: 'f6',
    name: 'Crossbody Bag',
    category: 'Women',
    description: 'A stylish and versatile crossbody bag designed for modern urban life, featuring premium materials and an adjustable strap for the perfect fit.',
    price: 29.99,
    affiliateUrl: 'https://amzn.to/4axsYBl',
    imageUrl: 'https://i.postimg.cc/HsKd3rVs/Gemini-Generated-Image-qse9zoqse9zoqse9.png',
    imageHint: 'crossbody bag',
    specs: {
      "Material": "Faux leather",
      "Strap": "Adjustable & Detachable",
      "Closure Type": "Turn Lock"
    }
  },
  {
    id: 'f7',
    name: 'Layered Gold Necklaces',
    category: 'Women',
    description: 'Meet your new layering essentials. Featuring a structured Cuban choker, a subtle dot chain, and a sleek, crystal-accented pendant, this three-piece set does all the styling work for you. Pile them on together for an instant statement look, or mix and match them solo to match your daily mood.',
    price: 11.99,
    affiliateUrl: 'https://amzn.to/4v6UvBP',
    imageUrl: 'https://i.postimg.cc/JnbbD8km/Gemini-Generated-Image-igrzaiigrzaiigrz.png',
    imageHint: 'Layered Gold Necklaces',
    specs: {
      "Metal Type": "Brass",
      "Material": "14K Gold Plated",
      "Clasp type": "Lobster"
    }
  },
  {
    id: 'f8',
    name: 'Gold Earrings for Women',
    category: 'Women',
    description: 'Define your personal style with our collection of gold-plated huggie earrings. From dainty 14k gold studs to sleek cartilage hoops, this versatile set lets you curate endless combinations and make a statement that is uniquely yours.',
    price: 9.99,
    affiliateUrl: 'https://amzn.to/4vcfEuG',
    imageUrl: 'https://i.postimg.cc/rwK7m339/Gemini-Generated-Image-318wyz318wyz318w.png',
    imageHint: 'Gold Earrings',
    specs: {
      "Metal Type": "Brass",
      "Material": "14K Gold Plated",
      "Back Finding": "Hinged Hoop"
    }
  },
  {
    id: 'f9',
    name: 'Swing Zip Shoulder Bag',
    category: 'Women',
    description: 'Designed for the modern woman, this durable vegan leather shoulder bag ensures long-lasting use. The secure magnetic closure and reinforced stitching make it a reliable and chic companion for all your daily adventures.',
    price: 24.98,
    affiliateUrl: 'https://amzn.to/43DjqB7',
    imageUrl: 'https://i.postimg.cc/sxTF6Hbm/Gemini-Generated-Image-7dj3zl7dj3zl7dj3.jpg',
    imageHint: 'Gold Earrings',
    specs: {
      "Brand": "LOVEVOOK",
      "Closure type": "Zipper",
      "Lining": "Polyester"
    }
  }
];
