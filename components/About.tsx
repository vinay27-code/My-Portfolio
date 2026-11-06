'use client';

import { motion, useInView, type Variants } from 'framer-motion';

import { useRef } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.15 } }
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section id="about" className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 h-px bg-white/20 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div className="flex justify-center" variants={fadeUp}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm"></div>
              <div className="absolute w-64 h-40 md:w-80 md:h-52 rounded-[50%] border border-cyan-300/10 rotate-[-14deg]"></div>
              <div className="absolute w-64 h-40 md:w-80 md:h-52 rounded-[50%] border border-indigo-300/10 rotate-[18deg]"></div>
              <div className="absolute w-44 h-44 md:w-56 md:h-56 rounded-full bg-cyan-300/10 blur-3xl"></div>
              <motion.div
                aria-label="Waving hello"
                role="img"
                className="relative z-10 text-[9rem] md:text-[12rem] leading-none select-none drop-shadow-[0_0_32px_rgba(125,211,252,0.22)]"
                style={{ transformOrigin: '72% 78%' }}
                animate={{
                  rotate: [-10, 18, -12, 16, -8, 12, -10],
                  y: [0, -6, 0, -4, 0],
                  scale: [1, 1.04, 1, 1.03, 1]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 0.35
                }}
              >
                👋
              </motion.div>
              <motion.div
                className="absolute bottom-9 px-4 py-1.5 rounded-full border border-white/10 bg-black/30 text-white/50 text-xs tracking-[0.22em] uppercase backdrop-blur-sm"
                animate={{ opacity: [0.45, 0.8, 0.45] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                Hello
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="space-y-5" variants={stagger}>
            <motion.h3 variants={fadeUp} className="text-2xl font-semibold text-white">
              Software Engineer who builds things that actually work in production.
            </motion.h3>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed">
              I completed my Master's in Information Technology at Arizona State University with a 4.0 GPA
              and bring 3+ years of professional software engineering experience across full-stack, cloud,
              and AI-powered applications. I've shipped production systems using React, Angular, TypeScript,
              Node.js, Python, Java, Spring Boot, AWS, and GCP.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed">
              Outside of work, I build production-style engineering projects including LegacyForge, an agentic
              AI platform for legacy Java modernization; DocuStream, an LLM-powered document intelligence
              platform; and PulseFlow, a real-time distributed data pipeline processing high-volume events.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed">
              Outside of tech you'll usually find me at the gym or exploring something new. Always
              open to exciting opportunities or just chatting with like-minded engineers.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              {['Full Stack Development', 'Agentic AI / GenAI', 'Cloud Architecture', 'Distributed Systems'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/70 text-sm shadow-[0_0_20px_rgba(255,255,255,0.07)]">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
