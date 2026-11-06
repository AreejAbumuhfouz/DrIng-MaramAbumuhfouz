'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animated microscope beam + crystal lattice around the logo
export function HeroVisual() {
  const atoms = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    return { x: 200 + Math.cos(a) * 170, y: 200 + Math.sin(a) * 170, d: i * 0.15 };
  });
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
      <div aria-hidden className="absolute inset-6 rounded-full bg-gradient-to-br from-teal/30 via-amber/20 to-navy/30 blur-3xl" />
      <svg viewBox="0 0 400 400" aria-hidden className="absolute inset-0 h-full w-full animate-spin-slow">
        <circle cx="200" cy="200" r="170" fill="none" stroke="currentColor" strokeOpacity=".15" strokeDasharray="4 8" className="text-navy-800 dark:text-white" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="#039185" strokeOpacity=".25" />
        {atoms.map((p, i) => (
          <motion.circle key={i} cx={p.x} cy={p.y} r={i % 3 === 0 ? 7 : 4} fill={i % 3 === 0 ? '#F29B18' : '#039185'}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 + p.d, type: 'spring' }} />
        ))}
      </svg>
      <motion.div initial={{ opacity: 0, scale: 0.85, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-[18%] animate-float rounded-full bg-white p-2 shadow-2xl shadow-teal/30 ring-1 ring-navy/10">
        <Image src="/logo.png" alt="Logo Dr.-Ing. Maram Abu-Muhfouz" width={512} height={512} priority className="h-full w-full rounded-full" />
        <span aria-hidden className="absolute left-1/2 top-[30%] h-[38%] w-[34%] -translate-x-1/2 animate-beam rounded-b-full bg-gradient-to-b from-amber/40 to-transparent blur-md" />
      </motion.div>
    </div>
  );
}
