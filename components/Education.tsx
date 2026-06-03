'use client';

import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const educationData = [
    {
      degree: 'Master of Information Technology',
      school: 'Arizona State University',
      location: 'Tempe, AZ',
      period: 'Aug 2024 – May 2026',
      cgpa: '4.0 / 4.0',
      status: 'Current',
      logo: 'https://static.readdy.ai/image/2fbf82138adadc00bd27f8c5eec01ddf/8426411a782f0daba61235096a08a52e.png'
    },
    {
      degree: 'Bachelor of Technology, Computer Science and Engineering',
      school: 'Jawaharlal Nehru Technological University',
      location: 'Hyderabad, India',
      period: 'Jul 2020 – Jul 2024',
      cgpa: '8.53 / 10.0 — Gold Medal, Top 2%',
      status: 'Completed',
      logo: 'https://static.readdy.ai/image/2fbf82138adadc00bd27f8c5eec01ddf/7dd7902d7b4576cc1dacc31253a372d6.jfif'
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div className="text-center mb-16" initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="w-16 h-px bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/40 max-w-xl mx-auto text-sm">Academic foundation in computer science and information technology.</p>
        </motion.div>

        <motion.div className="space-y-6" initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={stagger}>
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.01, boxShadow: '0 0 25px rgba(100,200,255,0.1)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] shadow-[0_0_20px_rgba(255,255,255,0.07)]"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 p-3">
                  <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${edu.status === 'Current' ? 'bg-green-500/15 text-green-400 border border-green-500/20' : 'bg-blue-500/15 text-blue-400 border border-blue-500/20'}`}>
                      {edu.status}
                    </span>
                    <span className="text-white/30 text-sm">{edu.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-white/60 mb-1">{edu.school}</p>
                  <p className="text-white/30 text-sm mb-3">{edu.location}</p>
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/70 text-sm shadow-[0_0_20px_rgba(255,255,255,0.07)]">
                    {edu.cgpa}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
