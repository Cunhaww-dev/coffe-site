"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typography } from "../atoms/Typography";
import { SectionHeader } from "../molecules/SectionHeader";
import { Coffee, Brain, Heart, Zap } from "lucide-react";

const BENEFITS = [
  {
    icon: <Zap className="w-8 h-8 text-coffee-accent" />,
    title: "Acelera o Metabolismo",
    description: "A cafeína é um estimulante natural que pode melhorar a taxa metabólica e aumentar a queima de gordura."
  },
  {
    icon: <Brain className="w-8 h-8 text-coffee-accent" />,
    title: "Foco e Cognição",
    description: "Melhora vários aspectos da função cerebral, incluindo memória, humor, vigilância, e tempos de reação."
  },
  {
    icon: <Heart className="w-8 h-8 text-coffee-accent" />,
    title: "Saúde Cardiovascular",
    description: "O consumo moderado está associado a muitos nutrientes essenciais e a um menor risco de problemas cardíacos."
  },
  {
    icon: <Coffee className="w-8 h-8 text-coffee-accent" />,
    title: "Rico em Antioxidantes",
    description: "Para quem segue a dieta ocidental padrão, o café pode ser um dos aspectos mais saudáveis pela quantidade de antioxidantes."
  }
];

export function BenefitsSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          caption="Para o Corpo e Mente"
          title="Benefícios Comprovados"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-coffee-light flex items-center justify-center mb-6 group-hover:bg-coffee-medium group-hover:text-white transition-colors duration-300">
                {benefit.icon}
              </div>
              <Typography variant="h3" className="mb-3 text-2xl">{benefit.title}</Typography>
              <Typography variant="body" className="text-sm">{benefit.description}</Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
