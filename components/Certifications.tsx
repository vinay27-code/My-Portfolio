'use client';

import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.15 } }
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certs = [
    { name: 'Microsoft Certified: Power Platform Solutions Architect', issuer: 'Microsoft', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Microsoft Certified: Power Platform Fundamentals', issuer: 'Microsoft', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div className="text-center mb-16" initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-16 h-px bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/40 max-w-xl mx-auto text-sm">Industry certifications validating expertise in cloud and enterprise platforms.</p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-4" initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={stagger}>
          {certs.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(100,200,255,0.15)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center gap-4 border border-white/10 rounded-xl p-5 bg-white/[0.02] shadow-[0_0_20px_rgba(255,255,255,0.07)]"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 p-2">
                <img src={c.logo} alt={c.issuer} className="w-full h-full object-contain" loading="lazy" />
              </div>
              <div>
                <p className="text-white font-medium text-sm leading-snug">{c.name}</p>
                <p className="text-white/30 text-xs mt-1">{c.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
