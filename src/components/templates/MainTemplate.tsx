"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface MainTemplateProps {
  hero: React.ReactNode;
  about: React.ReactNode;
  types: React.ReactNode;
  benefits: React.ReactNode;
}

export function MainTemplate({ hero, about, types, benefits }: MainTemplateProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // The famous GSAP Stacking Cards effect
    const cards = gsap.utils.toArray(".stack-card") as HTMLElement[];
    
    cards.forEach((card, i) => {
      // Pin all cards except the very last one so it scrolls up naturally and carries the footer
      if (i < cards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false, // Prevents pushing lower elements down, forcing them to overlap this pinned element!
          id: `card-${i}`
        });
      }
    });

  }, { scope: containerRef });

  return (
    <main className="w-full relative min-h-screen bg-background text-foreground block">
      {/* O Hero roda sua própria timeline GSAP internamente */}
      {hero}
      
      {/* Container das seções de cartão empilhado */}
      <div ref={containerRef} className="relative w-full overflow-x-hidden">
        
        {/* Seção 1: Origem */}
        <div className="stack-card relative z-[10] w-full min-h-screen shadow-[0_-20px_50px_rgba(0,0,0,0.3)] bg-white overflow-hidden">
          {about}
        </div>
        
        {/* Seção 2: Tipos */}
        <div className="stack-card relative z-[20] w-full min-h-screen rounded-t-[3rem] lg:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] bg-coffee-light overflow-hidden">
          {types}
        </div>
        
        {/* Seção 3: Benefícios (Mantenho shadow e edges pra consistência visual do empilhamento final) */}
        <div className="stack-card relative z-[30] w-full min-h-screen rounded-t-[3rem] lg:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] bg-white overflow-hidden">
          {benefits}
        </div>
        
      </div>
      
      {/* Footer simples por cima da última camada */}
      <footer className="relative z-[40] w-full py-8 text-center bg-foreground text-white/60">
        <p className="text-sm">© {new Date().getFullYear()} Coffee Essence. Criado com Next.js + GSAP + Tailwind CSS</p>
      </footer>
    </main>
  );
}
