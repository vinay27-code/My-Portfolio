
'use client';

import { useState, useEffect, useMemo } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const welcomeMessages = [
    { text: 'Welcome', lang: 'English' },
    { text: 'స్వాగతం', lang: 'Telugu' },
    { text: 'स्वागत है', lang: 'Hindi' },
    { text: 'Bienvenido', lang: 'Spanish' }
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Generate consistent star data
  const starsData = useMemo(() => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      // Use index-based seed for consistent positioning
      const seed1 = (i * 9.7) % 1;
      const seed2 = (i * 7.3) % 1;
      const seed3 = (i * 5.1) % 1;
      const seed4 = (i * 3.7) % 1;
      const seed5 = (i * 2.9) % 1;
      
      stars.push({
        id: i,
        left: seed1 * 100,
        top: seed2 * 100,
        width: seed3 * 2 + 1,
        height: seed4 * 2 + 1,
        animationDelay: seed5 * 3,
        animationDuration: (seed1 * 2) + 2
      });
    }
    return stars;
  }, []);

  // Generate consistent cosmic elements data
  const cosmicData = useMemo(() => {
    const elements = [];
    for (let i = 0; i < 8; i++) {
      const seed1 = (i * 11.3) % 1;
      const seed2 = (i * 13.7) % 1;
      const seed3 = (i * 17.1) % 1;
      const seed4 = (i * 19.3) % 1;
      const seed5 = (i * 23.7) % 1;
      
      elements.push({
        id: i,
        left: seed1 * 100,
        top: seed2 * 100,
        width: seed3 * 30 + 15,
        height: seed4 * 30 + 15,
        animationDelay: seed5 * 5,
        animationDuration: (seed1 * 8) + 6
      });
    }
    return elements;
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Auto-complete after 5 seconds
    const autoCompleteTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMessageIndex((prev) => {
          const nextIndex = (prev + 1) % welcomeMessages.length;
          return nextIndex;
        });
        setIsVisible(true);
      }, 300);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(autoCompleteTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" suppressHydrationWarning={true}>
      {/* Universe Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1A2E] via-[#5C4F6E] to-[#B3A8C9]">
        {/* Consistent stars */}
        {starsData.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.width}px`,
              height: `${star.height}px`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`
            }}
          />
        ))}
        
        {/* Consistent cosmic elements */}
        {cosmicData.map((element) => (
          <div
            key={`cosmic-${element.id}`}
            className="absolute animate-float opacity-20"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              animationDelay: `${element.animationDelay}s`,
              animationDuration: `${element.animationDuration}s`
            }}
          >
            <div 
              className="bg-white/10 rounded-full blur-sm"
              style={{
                width: `${element.width}px`,
                height: `${element.height}px`
              }}
            />
          </div>
        ))}

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/10 rounded-full animate-spin-slow"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <div 
            className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-8 scale-95'
            }`}
          >
            <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-wider">
              {welcomeMessages[currentMessageIndex].text}
            </h1>
            <p className="text-2xl text-white/70 mb-8 font-light">
              {welcomeMessages[currentMessageIndex].lang}
            </p>
          </div>
          
          <div className="mt-16">
            <div className="flex justify-center space-x-2 mb-8">
              {welcomeMessages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentMessageIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .blur-xs {
          filter: blur(1px);
        }
      `}</style>
    </div>
  );
}
