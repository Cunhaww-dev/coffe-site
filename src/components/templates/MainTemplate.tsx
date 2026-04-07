"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MainTemplateProps {
  hero: React.ReactNode;
  about: React.ReactNode;
  process?: React.ReactNode;
  types: React.ReactNode;
  flavor?: React.ReactNode;
  benefits: React.ReactNode;
}

export function MainTemplate({ hero, about, process, types, flavor, benefits }: MainTemplateProps) {
  return (
    <main className="w-full relative min-h-screen bg-background text-foreground block overflow-clip">
      
      {/* O Hero flui naturalmente, sem arredondamentos */}
      {hero}
      
      {/* Container Pai sem overflow-hidden rígido garantindo compatibilidade do Sticky nativo */}
      <div className="relative w-full">
        
        {/* Seção 1: Origem - STICKY PANEL 1 */}
        <div className="relative md:sticky top-0 w-full min-h-screen z-[10] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] bg-white will-change-transform overflow-hidden">
          {about}
        </div>
        
        {/* Seção 2: Processo - STICKY PANEL 2 */}
        {process && (
          <div className="relative md:sticky top-0 w-full min-h-screen z-[20] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] will-change-transform overflow-hidden md:rounded-t-[2rem] lg:rounded-t-[4rem]">
            {process}
          </div>
        )}
        
        {/* Seção 3: Tipos - STICKY PANEL 3 */}
        <div className="relative md:sticky top-0 w-full min-h-screen z-[30] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] bg-coffee-light will-change-transform overflow-hidden md:rounded-t-[2rem] lg:rounded-t-[4rem]">
          {types}
        </div>

        {/* --- Fim dos Painéis Fixos --- */}
        {/* As próximas seções fluem normalmente rolando sobre o último painel colado (Tipos) */}

        {/* Seção 4: Sabor (Normal Flow) */}
        {flavor && (
          <div className="relative w-full min-h-screen z-[40] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] overflow-hidden rounded-t-[2rem] sm:rounded-t-[4rem]">
            {flavor}
          </div>
        )}
        
        {/* Seção 5: Benefícios (Normal Flow) */}
        <div className="relative w-full min-h-screen z-[50] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] bg-white overflow-hidden rounded-t-[2rem] sm:rounded-t-[4rem]">
          {benefits}
        </div>
        
      </div>
      
      {/* Footer grudado no último painel */}
      <footer className="relative z-[50] w-full py-8 text-center bg-foreground text-white/60">
        <p className="text-sm">© {new Date().getFullYear()} Coffee Essence. Arquitetura Híbrida.</p>
      </footer>
    </main>
  );
}
