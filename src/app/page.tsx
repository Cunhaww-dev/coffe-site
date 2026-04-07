"use client";

import React, { useEffect } from "react";
import { MainTemplate } from "@/components/templates/MainTemplate";
import { HeroVideoSection } from "@/components/organisms/HeroVideoSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { ProcessSection } from "@/components/organisms/ProcessSection";
import { TypesSection } from "@/components/organisms/TypesSection";
import { FlavorSection } from "@/components/organisms/FlavorSection";
import { BenefitsSection } from "@/components/organisms/BenefitsSection";

export default function Home() {
  // We can add a simple scroll to top on mount just in case there's history retention
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainTemplate
      hero={<HeroVideoSection />}
      about={<AboutSection />}
      process={<ProcessSection />}
      types={<TypesSection />}
      flavor={<FlavorSection />}
      benefits={<BenefitsSection />}
    />
  );
}
