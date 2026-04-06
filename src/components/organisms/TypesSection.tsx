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
    <section className="py-24 md:py-32 px-6 md:px-12 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader 
          caption="Variedades Cultivadas"
          title="Os Tipos de Grãos"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BEANS.map((bean, index) => (
            <motion.div
              key={bean.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <Typography variant="h3" className="mb-4 text-coffee-medium">{bean.name}</Typography>
              <Typography variant="body" className="mb-6">{bean.description}</Typography>
              
              <div className="flex justify-between items-center pt-6 border-t border-coffee-light">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Acidez</span>
                  <span className="text-foreground font-medium">{bean.acidity}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Cafeína</span>
                  <span className="text-foreground font-medium">{bean.caffeine}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
