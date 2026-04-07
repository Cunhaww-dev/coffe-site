import React from "react";
import { Typography } from "../atoms/Typography";
import { SectionHeader } from "../molecules/SectionHeader";
import { motion } from "framer-motion";

export function FlavorSection() {
  return (
    <section className="w-full h-full min-h-screen bg-coffee-dark text-white flex flex-col justify-center items-center px-6 py-24 relative overflow-hidden">
      
      {/* Efeitos visuais de fundo brilhantes para separar os tons escuros */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-coffee-accent rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-coffee-darkest rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-6xl w-full relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="w-full lg:w-1/2 flex flex-col text-left">
          <SectionHeader 
            caption="PERFIL SENSORIAL" 
            title="A Complexidade Oculta" 
            description="Os grãos abrigam mais de 800 compostos aromáticos voláteis, ultrapassando a complexidade do vinho tinto."
            className="text-white"
          />
          
          <div className="flex flex-col gap-8 mt-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{delay:0.2}} className="border-l-2 border-coffee-cream/40 pl-6">
              <Typography variant="body" className="font-bold text-coffee-cream text-xl tracking-wide uppercase mb-2">Acidez Brilhante</Typography>
              <Typography variant="body" className="text-white/80 text-lg">Responsável pela vivacidade cítrica e frescor que limpa o paladar nos cafés arábica de alta altitude.</Typography>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{delay:0.4}} className="border-l-2 border-coffee-cream/40 pl-6">
              <Typography variant="body" className="font-bold text-coffee-cream text-xl tracking-wide uppercase mb-2">Corpo Sedoso</Typography>
              <Typography variant="body" className="text-white/80 text-lg">A densidade e oleosidade sentidas na língua, trazendo texturas que variam do aveludado ao licoroso.</Typography>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{delay:0.6}} className="border-l-2 border-coffee-cream/40 pl-6">
              <Typography variant="body" className="font-bold text-coffee-cream text-xl tracking-wide uppercase mb-2">Doçura Final</Typography>
              <Typography variant="body" className="text-white/80 text-lg">Caramelização atingida exatamente no ponto de torra para notas de chocolate escuro e melaço residual.</Typography>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[500px] bg-coffee-darkest/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden shadow-2xl">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-64 h-64 border-[4px] border-coffee-cream/30 rounded-full flex flex-col items-center justify-center p-8 relative"
          >
             <div className="absolute inset-0 border-2 border-dotted border-coffee-cream/20 rounded-full animate-[spin_20s_linear_infinite]" />
             <Typography variant="h2" className="text-coffee-cream mb-0 text-7xl font-mono">100</Typography>
             <Typography variant="caption" className="text-white/70 mt-2 font-bold tracking-widest">% ARÁBICA</Typography>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
