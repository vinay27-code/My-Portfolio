'use client';

import { useState, useEffect, useRef } from 'react';
import LetterGlitch from './LetterGlitch';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<'show' | 'fade'>('show');

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fade'), 4000);
    const doneTimer = setTimeout(() => onComplete(), 4600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${phase === 'fade' ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0">
        <LetterGlitch
          glitchColors={['#1a1a2e', '#4a9eff', '#00d4ff']}
          glitchSpeed={60}
          outerVignette={true}
          centerVignette={false}
          smooth={true}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-6">
          He doesn't just write code.
          <br />
          <span>
            He ships systems that scale.
          </span>
        </h1>
      </div>

      <style jsx>{`
        @keyframes loadbar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
