'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
      await fetch('https://readdy.ai/api/form-submit', { method: 'POST', body: fd });
    } catch {}
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div className="text-center mb-16" initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-16 h-px bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/40 max-w-xl mx-auto text-sm">Open to full-time Software Engineer roles and interesting collaborations.</p>
        </motion.div>

        <motion.div className="grid lg:grid-cols-2 gap-12" initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={stagger}>
          <motion.div variants={fadeUp} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Let's Connect</h3>
              <p className="text-white/50 text-sm leading-relaxed">Whether you have a question about my work or want to discuss a potential opportunity, reach out directly.</p>
            </div>
            <div className="space-y-4">
              {[
                { icon: 'ri-mail-line', label: 'Email', value: 'vinaybabumachha@gmail.com' },
                { icon: 'ri-phone-line', label: 'Phone', value: '+1 (480) 738-0552' },
                { icon: 'ri-map-pin-line', label: 'Location', value: 'Tempe, AZ' },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                    <i className={`${item.icon} text-white/50 text-base`}></i>
                  </div>
                  <div>
                    <p className="text-white/30 text-xs">{item.label}</p>
                    <p className="text-white/70 text-sm">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp}>
              <p className="text-white/30 text-xs mb-3 uppercase tracking-wider">Social</p>
              <div className="flex gap-3">
                {[
                  { href: 'https://github.com/vinay27-code', icon: 'ri-github-line' },
                  { href: 'https://linkedin.com/in/vinaybabumachha', icon: 'ri-linkedin-line' },
                  { href: 'https://www.instagram.com/vinay._.27', icon: 'ri-instagram-line' },
                ].map((s, i) => (
                  <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
                    <i className={`${s.icon} text-white/50 text-base`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] shadow-[0_0_20px_rgba(255,255,255,0.07)]">
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-white text-xl"></i>
                  </div>
                  <p className="text-white font-medium mb-2">Message sent!</p>
                  <p className="text-white/40 text-sm">I'll get back to you soon.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-white/30 text-sm hover:text-white/60 transition-colors cursor-pointer">Send another</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/40 text-xs mb-1.5 block">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                      placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs mb-1.5 block">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                      placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-white/40 text-xs mb-1.5 block">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                    placeholder="Project Discussion" />
                </div>
                <div>
                  <label className="text-white/40 text-xs mb-1.5 block">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required
                    rows={5} maxLength={500}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors resize-none"
                    placeholder="Tell me about your project..." />
                  <p className="text-right text-white/20 text-xs mt-1">{formData.message.length}/500</p>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-white text-[#080808] rounded-lg font-semibold text-sm hover:bg-white/90 transition-all disabled:opacity-50 cursor-pointer shadow-[0_0_20px_rgba(100,200,255,0.2)]"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
