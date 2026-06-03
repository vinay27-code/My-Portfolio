'use client';

import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMove);

    const animate = () => {
      // Trail follows with delay (lerp)
      trailPos.current.x += (pos.current.x - trailPos.current.x) * 0.12;
      trailPos.current.y += (pos.current.y - trailPos.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x - 16}px, ${trailPos.current.y - 16}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Small sharp dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div className="w-2 h-2 rounded-full bg-[#7dd3fc]" />
      </div>

      {/* Larger glowing trailing circle */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div
          className="w-8 h-8 rounded-full border border-[#7dd3fc]/40"
          style={{
            background: 'radial-gradient(circle, rgba(125,211,252,0.08) 0%, transparent 70%)',
            boxShadow: '0 0 12px rgba(125,211,252,0.2)'
          }}
        />
      </div>
    </>
  );
}
