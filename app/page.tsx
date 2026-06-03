'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from '../components/SplashScreen';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Copyright from '../components/Copyright';
import ClickSpark from '../components/ClickSpark';
import CursorTrail from '../components/CursorTrail';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (!showSplash) {
      const handleScroll = () => {
        const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'certifications', 'contact'];
        const scrollPosition = window.scrollY + 100;
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
        setShowBackToTop(window.scrollY > 500);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [showSplash]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  if (showSplash) return <SplashScreen onComplete={() => setShowSplash(false)} />;

  return (
    <ClickSpark sparkColor="#7dd3fc" sparkSize={12} sparkRadius={20} sparkCount={8} duration={500}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="min-h-screen bg-[#080808] text-white"
      >
        <CursorTrail />
        <Header activeSection={activeSection} scrollToSection={scrollToSection} />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
          <Copyright />
        </main>

        {/* Back to top button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 z-50 w-10 h-10 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-colors shadow-[0_0_15px_rgba(100,200,255,0.2)] cursor-pointer"
            >
              <i className="ri-arrow-up-line text-base"></i>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </ClickSpark>
  );
}
