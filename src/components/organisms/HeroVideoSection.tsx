"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";

gsap.registerPlugin(ScrollTrigger);

export function HeroVideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    if (!videoRef.current || !containerRef.current) return;
    
    // Reset video to start forceably
    videoRef.current.currentTime = 0;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000", // The user has to scroll 3000px down to reach end of video
        scrub: 1, // Smooth scrub
        pin: true, // This fixes the hero section in place while scrubbing!
      },
    });

    const handleLoadedMetadata = () => {
      const duration = videoRef.current!.duration || 5; 
      
      const videoObj = { time: 0 };
      tl.to(videoObj, {
        time: duration,
        ease: "none",
        duration: 1,
        onUpdate: () => {
          if (videoRef.current && Number.isFinite(videoObj.time)) {
            videoRef.current.currentTime = videoObj.time;
          }
        }
      }, 0);
    };

    if (videoRef.current.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
    };
  }, { scope: containerRef }); // Automatically manages strict-mode GSAP cleanup!

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-background text-foreground flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        
        {/* Left Side: Text Content */}
        <div className="relative z-10 flex flex-col items-start justify-center">
          <Typography variant="caption" className="text-coffee-accent mb-4 font-bold tracking-[0.2em] uppercase">
            A Essência do Brasil
          </Typography>
          <Typography variant="h1" className="mb-6 text-foreground font-extrabold tracking-tighter leading-tight">
            Descubra a Origem,<br/>Sinta o Sabor.
          </Typography>
          <Typography variant="body" className="mb-10 text-lg md:text-xl text-foreground/80 leading-relaxed max-w-md">
            Uma jornada sensorial que explora as raízes lendárias do café,
            desde as cabras de Kaldi na Etiópia até a sofisticação da xícara moderna.
          </Typography>
          
          <Button variant="secondary" className="shadow-lg shadow-coffee-accent/30 hover:shadow-xl">
            Explorar a História
          </Button>
        </div>

        {/* Right Side: Video without boundaries, using mix-blend-multiply for a stunning 3D look */}
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
          <video
            ref={videoRef}
            src="/hero-bg.mp4"
            className="w-full max-w-[500px] xl:max-w-[600px] h-auto object-contain"
            muted
            playsInline
            preload="auto"
          />
        </div>
        
      </div>
    </section>
  );
}
