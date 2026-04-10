import React from "react";
import NewsletterSignup from "../components/NewsletterSignup";

export default function About() {
  return (
    <div className="pt-24 pb-0 w-full font-sans overflow-hidden bg-white">
      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 md:pt-20 pb-16 flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto text-left">
          <p className="text-[#f72798] font-bold tracking-[0.15em] text-sm md:text-base uppercase mb-6">
            Our Story
          </p>
          <h2 className="font-serif leading-[1.2] mb-10">
            <span className="block text-5xl md:text-6xl lg:text-[4rem] text-[#0b1220] font-medium tracking-tight">
              Crafting Beauty,
            </span>
            <span className="block text-5xl md:text-6xl lg:text-[4rem] text-[#f72798] font-medium tracking-tight mt-1">
              One Bloom at a Time
            </span>
          </h2>
          <div className="space-y-8 text-[#0b1220]/70 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            <p>
              Founded in 2010, Bloom Haven began as a small boutique in the heart of Floral Valley. Our founder, Elena, believed that flowers are more than just gifts—they are a language of emotion.
            </p>
            <p>
              Today, we continue that tradition by sourcing the freshest blooms from sustainable growers and creating bespoke arrangements that tell your unique story.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="flex flex-col gap-6 md:gap-8 mt-0 md:mt-12">
            <img 
              src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop" 
              alt="Flower shop interior" 
              className="w-full h-auto rounded-3xl object-cover shadow-sm aspect-[4/5] hover:scale-[1.02] transition-transform duration-500"
            />
            <img 
              src="https://images.unsplash.com/photo-1583241800698-e8ab01830a07?q=80&w=800&auto=format&fit=crop" 
              alt="Pink rose bouquet" 
              className="w-full h-auto rounded-3xl object-cover shadow-sm aspect-square hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-8">
            <img 
              src="https://images.unsplash.com/photo-1563241527-3004b7beedaf?q=80&w=800&auto=format&fit=crop" 
              alt="Purple bouquet" 
              className="w-full h-auto rounded-3xl object-cover shadow-sm aspect-square hover:scale-[1.02] transition-transform duration-500"
            />
            <img 
              src="https://images.unsplash.com/photo-1558350315-8aa00e8e4590?q=80&w=800&auto=format&fit=crop" 
              alt="Mixed bouquet" 
              className="w-full h-auto rounded-3xl object-cover shadow-sm aspect-[4/5] hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-32 text-center">
        <h2 className="text-[#0b1220] font-serif text-4xl md:text-5xl mb-12">
          Our Mission
        </h2>
        <p className="text-[#0b1220]/80 font-serif italic text-2xl md:text-[2rem] leading-relaxed max-w-3xl mx-auto">
          "To inspire joy and connection through the art of floristry, ensuring every arrangement is as unique as the person receiving it."
        </p>
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="w-3 h-3 rounded-full bg-[#f72798]/30"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#f72798]"></div>
          <div className="w-3 h-3 rounded-full bg-[#f72798]/30"></div>
        </div>
      </section>

      {/* Continue the Contact - Add Newsletter Signup (same as on homepage) */}
      <NewsletterSignup />
    </div>
  );
}
