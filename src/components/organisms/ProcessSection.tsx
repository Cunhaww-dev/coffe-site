import React from "react";
import { Typography } from "../atoms/Typography";
import { SectionHeader } from "../molecules/SectionHeader";
import { motion } from "framer-motion";
import { Flame, Droplets, Sun } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      icon: <Sun className="w-8 h-8 text-[#5D4037]" />,
      title: "Colheita Manual",
      desc: "Grãos maduros colhidos seletivamente, preservando apenas as cerejas vermelhas com o ápice de doçura natural."
    },
    {
      icon: <Droplets className="w-8 h-8 text-[#5D4037]" />,
      title: "Fermentação Controlada",
      desc: "Processos de lavagem e fermentação enzimática isoladas que extraem os sabores exóticos sem notas indesejadas."
    },
    {
      icon: <Flame className="w-8 h-8 text-[#5D4037]" />,
      title: "Torra Artesanal",
      desc: "Controle térmico milimétrico em fornos industriais desenhando curvas de sabor exclusivas para cada lote."
    }
  ];

  return (
    <section className="w-full h-full min-h-screen bg-coffee-cream text-coffee-dark flex flex-col justify-center items-center px-6 py-20">
      <div className="max-w-7xl w-full">
        <SectionHeader 
          caption="O CUIDADO" 
          title="Arte do Processamento" 
          description="Da semente quente africana à sua xícara, nosso ritual exige um perfeccionismo irredutível."
        />

        <div className="flex flex-col lg:flex-row gap-12 mt-16 items-center">
          
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {steps.map((s, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                className="bg-white/50 backdrop-blur-md border border-white/40 p-6 md:p-8 rounded-3xl flex items-center gap-6 shadow-sm"
              >
                <div className="p-4 bg-white rounded-full shadow-sm border border-coffee-light shrink-0">
                  {s.icon}
                </div>
                <div>
                  <Typography variant="h3" className="mb-2 text-xl md:text-2xl">
                    {s.title}
                  </Typography>
                  <Typography variant="body" className="text-sm md:text-base">
                    {s.desc}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Imagem AI de Torrefação */}
          <div className="w-full lg:w-1/2 h-full">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full aspect-square md:aspect-auto md:h-full min-h-[500px] rounded-[3rem] overflow-hidden relative shadow-2xl border-4 border-white/50"
             >
                <img src="/images/coffee_roasting.png" alt="Torrefação de Café" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
             </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
