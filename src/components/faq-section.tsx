
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How do you choose your fashion pieces?",
    a: "Our curators evaluate each item based on fabric quality, ethical manufacturing, and long-term silhouette relevance. We prioritize pieces that build a versatile, long-lasting wardrobe."
  },
  {
    q: "Are the fits consistent across different brands?",
    a: "We provide detailed fit guides for every product, derived from verified customer feedback and manufacturer specifications, so you know exactly whether to size up or down."
  },
  {
    q: "How do you verify the quality of the clothing?",
    a: "We manually inspect material composition, seam durability, and wash-fastness for every brand we feature, ensuring you only get premium-grade garments."
  },
  {
    q: "What is your stance on sustainable fashion?",
    a: "Sustainability is key. We actively feature brands that use recycled materials, organic fibers, and fair-trade labor practices, marked clearly in the product specifications."
  }
];

export default function FAQSection() {
  return (
    <section className="bg-white/50 py-24 border-y">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Style Questions</h2>
          <p className="text-muted-foreground text-lg">Everything you need to know about our curation standards.</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQS.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`} 
              className="border-none bg-white rounded-xl px-6 shadow-sm border border-border/20"
            >
              <AccordionTrigger className="hover:no-underline font-headline text-left text-lg font-semibold py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
