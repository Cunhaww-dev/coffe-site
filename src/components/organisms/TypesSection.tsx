"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typography } from "../atoms/Typography";
import { SectionHeader } from "../molecules/SectionHeader";

const BEANS = [
  {
    name: "Arábica",
    description: "Sabor doce e suave, com notas de açúcar, frutas e até mesmo tons vinícos. Representa a maior parte da produção mundial de cafés de alta qualidade.",
    acidity: "Alta",
    caffeine: "Baixa"
  },
  {
    name: "Robusta (Conilon)",
    description: "Sabor mais forte, encorpado e frequentemente associado a um gosto de terra. Perfeito para blends e cafés solúveis que precisam de corpo.",
    acidity: "Baixa",
    caffeine: "Alta"
  },
  {
    name: "Liberica",
    description: "Um grão raro, com formato irregular e um sabor único, muitas vezes descrito como possuindo notas amadeiradas e florais intensas.",
    acidity: "Média",
    caffeine: "Média"
  }
];

export function TypesSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Background Image da IA */}
      <img src="/images/coffee_beans.png" alt="Camada de Grãos de Café" className="absolute inset-0 w-full h-full object-cover scale-105" />
      {/* Overlay Escuro para Legibilidade */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="max-w-7xl mx-auto w-full relative z-10 text-white">
        <SectionHeader 
          caption="Variedades Cultivadas"
          title="Os Tipos de Grãos"
          alignment="center"
          className="text-white"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BEANS.map((bean, index) => (
            <motion.div
              key={bean.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-coffee-darkest/60 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl hover:bg-coffee-darkest/80 transition-colors duration-300"
            >
              <Typography variant="h3" className="mb-4 text-coffee-cream">{bean.name}</Typography>
              <Typography variant="body" className="mb-6 text-white/80">{bean.description}</Typography>
              
              <div className="flex justify-between items-center pt-6 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/40">Acidez</span>
                  <span className="text-white font-medium">{bean.acidity}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/40">Cafeína</span>
                  <span className="text-white font-medium">{bean.caffeine}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
