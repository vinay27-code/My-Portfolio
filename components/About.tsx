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
    <section id="about" className="py-24 px-6 bg-[#080808]">
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
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(100,200,255,0.2)]">
                <img
                  src="/vinay.JPG"
                  alt="Vinay Babu Machha"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="absolute -inset-1 bg-white/5 rounded-2xl blur-xl -z-10"></div>
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
