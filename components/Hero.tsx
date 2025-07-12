
'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Software Developer',
    'Front-end Developer', 
    'Backend Developer',
    'Programmer'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            I'm a <span className="text-purple-400">{currentText}</span>
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl text-white/80 mb-4">
            Building Beautiful Digital Experiences
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I combine creativity with technical expertise to bring ideas to life.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-[#1E1A2E] rounded-full font-semibold hover:bg-white/90 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#1E1A2E] transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <i className="ri-arrow-down-line w-8 h-8 flex items-center justify-center text-white/50 text-2xl mx-auto"></i>
        </div>
      </div>
    </section>
  );
}
