
'use client';

import { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Copyright from '@/components/Copyright';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (!showSplash) {
      const handleScroll = () => {
        const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];
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
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [showSplash]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1A2E] via-[#2A1B3D] to-[#0F0C19] relative overflow-x-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="fixed bg-white rounded-full animate-pulse pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            zIndex: 1
          }}
        />
      ))}
      <div className="relative z-10">
        <Header activeSection={activeSection} scrollToSection={scrollToSection} />
        <main className="min-h-screen">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Copyright />
        </main>
      </div>
    </div>
  );
}
