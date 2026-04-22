'use client';

import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const ScrollBackground = () => {
  const { scrollYProgress } = useScroll();

  // Stable random particles for performance and purity
  const particles = useMemo(() => 
    [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 5,
      moveX: 10 + Math.random() * 20,
      moveY: -20 - Math.random() * 20,
    })), []);

  // Advanced Parallax & Fluid Motion
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.8, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none bg-background">
      {/* Premium Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.25] pointer-events-none mix-blend-overlay z-10" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Subtle Grid - Liquid Base */}
      <div className="absolute inset-0 bg-[radial-gradient(#808080_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:80px_80px] opacity-[0.03] dark:opacity-[0.04]" />

      {/* Liquid Layer 1 - Primary Blob */}
      <motion.div 
        style={{ y: y1, x: x1, rotate: rotate1, opacity, scale }}
        className="absolute -top-[10%] -left-[10%] w-[100%] h-[100%] md:w-[80%] md:h-[80%] rounded-full bg-blue-500/20 blur-[120px] md:blur-[180px] dark:bg-blue-600/30 mix-blend-soft-light"
      />
      
      {/* Liquid Layer 2 - Secondary Blob */}
      <motion.div 
        style={{ y: y2, x: x2, rotate: rotate2, opacity }}
        className="absolute top-[20%] -right-[15%] w-[90%] h-[90%] md:w-[70%] md:h-[70%] rounded-full bg-purple-500/15 blur-[100px] md:blur-[150px] dark:bg-purple-600/25 mix-blend-soft-light"
      />

      {/* Liquid Layer 3 - Accent Blob */}
      <motion.div 
        style={{ y: y3, x: x1, opacity: 0.4 }}
        className="absolute bottom-[-10%] left-[20%] w-[80%] h-[80%] md:w-[60%] md:h-[60%] rounded-full bg-cyan-400/20 blur-[90px] md:blur-[140px] dark:bg-cyan-500/20 mix-blend-soft-light"
      />

      {/* Dynamic Digital Dust - Optimized for Performance */}
      <div className="absolute inset-0 hidden md:block">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              y: [0, p.moveY, 0],
              x: [0, p.moveX, 0],
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity,
              delay: p.delay 
            }}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            className="absolute w-1.5 h-1.5 bg-foreground/10 rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Finishing Gradients for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-brand-accent/5 opacity-50" />
    </div>
  );
};
