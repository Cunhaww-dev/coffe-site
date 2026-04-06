"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typography } from "../atoms/Typography";
import { SectionHeader } from "../molecules/SectionHeader";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader 
          caption="A Lenda de Kaldi"
          title="A Origem do Café"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] bg-coffee-light rounded-3xl overflow-hidden relative"
          >
            {/* Minimalist abstract representation since we don't have scraped images */}
            <div className="absolute inset-0 bg-gradient-to-tr from-coffee-medium to-coffee-accent opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <Typography variant="h3" className="text-white text-center">
                Etiópia, 575 d.C.
              </Typography>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <Typography variant="body">
              Muitos já aprenderam que o café veio da África, da Etiópia para ser mais específico, e que a Europa foi responsável por difundir o consumo da bebida pelo globo. O que poucos sabem é que um pastor de cabras africano, chamado Kaldi, foi o grande responsável em descobrir seu uso.
            </Typography>
            <Typography variant="body">
              De acordo com registros do ano de 575 d.C, o pastor observou que suas cabras ficavam alegres e cheias de energia depois de mastigar frutos vermelho-amarelados dos arbustos.
            </Typography>
            <Typography variant="body">
              Os árabes dominaram rapidamente a técnica de plantio. A bebida recebeu o nome de &quot;Kahwah&quot; ou &quot;Cahue&quot;, que significa &quot;força&quot;. Somente no século XIV o processo de torrefação adquiriu a forma e o gosto que conhecemos hoje, transformando-se num rito global de sociabilidade.
            </Typography>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
