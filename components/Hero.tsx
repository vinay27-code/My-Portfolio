'use client';

import { useState, useEffect, useRef } from 'react';

// Inline Prism — no dynamic import issues
function PrismCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let cleanup = false;

    const init = async () => {
      try {
        const OGL = await import('ogl');
        const { Renderer, Triangle, Program, Mesh } = OGL;
        const container = containerRef.current;
        if (!container || cleanup) return;

        const H = 3.5, BW = 5.5, BASE_HALF = BW * 0.5;
        const SCALE = 3.6, GLOW = 1, BLOOM = 1.2, NOISE = 0, TS = 0.4, CFREQ = 1;

        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const renderer = new Renderer({ dpr, alpha: true, antialias: false });
        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
        gl.disable(gl.BLEND);

        Object.assign(gl.canvas.style, {
          position: 'absolute', inset: '0',
          width: '100%', height: '100%', display: 'block'
        });
        container.appendChild(gl.canvas);

        const vertex = `attribute vec2 position; void main(){gl_Position=vec4(position,0.,1.);}`;
        const fragment = `
          precision highp float;
          uniform vec2 iResolution; uniform float iTime;
          uniform float uH,uBH,uGlow,uNoise,uSat,uScale,uCFreq,uBloom,uCS,uIBH,uIH,uMinA,uPxS,uTS;
          uniform mat3 uRot; uniform int uWob;
          vec4 tanh4(vec4 x){vec4 e=exp(2.*x);return(e-1.)/(e+1.);}
          float rand(vec2 c){return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);}
          float sdO(vec3 p){vec3 q=vec3(abs(p.x)*uIBH,abs(p.y)*uIH,abs(p.z)*uIBH);return(q.x+q.y+q.z-1.)*uMinA*0.5773;}
          float sdP(vec3 p){return max(sdO(p),-p.y);}
          void main(){
            vec2 f=(gl_FragCoord.xy-.5*iResolution.xy)*uPxS;
            float z=5.,d=0.; vec3 p; vec4 o=vec4(0.);
            mat2 wob=mat2(1.);
            if(uWob==1){float t=iTime*uTS;wob=mat2(cos(t),cos(t+33.),cos(t+11.),cos(t));}
            for(int i=0;i<100;i++){
              p=vec3(f,z); p.xz=p.xz*wob; p=uRot*p;
              vec3 q=p; q.y+=uCS;
              d=.1+.2*abs(sdP(q)); z-=d;
              o+=(sin((p.y+z)*uCFreq+vec4(0.,1.,2.,3.))+1.)/d;
            }
            o=tanh4(o*o*(uGlow*uBloom)/1e5);
            vec3 col=o.rgb;
            col+=(rand(gl_FragCoord.xy+vec2(iTime))-.5)*uNoise;
            col=clamp(col,0.,1.);
            float L=dot(col,vec3(.2126,.7152,.0722));
            col=clamp(mix(vec3(L),col,1.5),0.,1.);
            gl_FragColor=vec4(col,o.a);
          }
        `;

        const iResBuf = new Float32Array(2);
        const rotBuf = new Float32Array([1,0,0,0,1,0,0,0,1]);
        const geometry = new Triangle(gl);
        const program = new Program(gl, {
          vertex, fragment,
          uniforms: {
            iResolution:{value:iResBuf}, iTime:{value:0},
            uH:{value:H}, uBH:{value:BASE_HALF}, uWob:{value:1},
            uRot:{value:rotBuf}, uGlow:{value:GLOW},
            uNoise:{value:NOISE}, uSat:{value:1.5},
            uScale:{value:SCALE}, uCFreq:{value:CFREQ},
            uBloom:{value:BLOOM}, uCS:{value:H*0.25},
            uIBH:{value:1/BASE_HALF}, uIH:{value:1/H},
            uMinA:{value:Math.min(BASE_HALF,H)},
            uPxS:{value:1/((gl.drawingBufferHeight||1)*0.1*SCALE)},
            uTS:{value:TS}
          }
        });
        const mesh = new Mesh(gl, { geometry, program });

        const resize = () => {
          if (!container) return;
          renderer.setSize(container.clientWidth||1, container.clientHeight||1);
          iResBuf[0] = gl.drawingBufferWidth;
          iResBuf[1] = gl.drawingBufferHeight;
          program.uniforms.uPxS.value = 1/((gl.drawingBufferHeight||1)*0.1*SCALE);
        };
        const ro = new ResizeObserver(resize);
        ro.observe(container);
        resize();

        const t0 = performance.now();
        const render = (t: number) => {
          if (cleanup) return;
          program.uniforms.iTime.value = (t - t0) * 0.001;
          renderer.render({ scene: mesh });
          raf = requestAnimationFrame(render);
        };
        raf = requestAnimationFrame(render);

        (container as any).__prismCleanup = () => {
          cleanup = true;
          cancelAnimationFrame(raf);
          ro.disconnect();
          if (gl.canvas.parentElement === container) container.removeChild(gl.canvas);
        };
      } catch (e) {
        console.error('Prism init error:', e);
      }
    };

    init();

    return () => {
      cleanup = true;
      cancelAnimationFrame(raf);
      const container = containerRef.current;
      if (container && (container as any).__prismCleanup) {
        (container as any).__prismCleanup();
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{
      position: 'absolute', inset: 0,
      width: '100%', height: '100%'
    }} />
  );
}

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Software Engineer', 'Full Stack Developer', 'AI Engineer', 'Cloud Architect'];

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
        setCurrentIndex(prev => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Prism background */}
      <PrismCanvas />

      {/* Bottom fade to match rest of page */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p className="text-white/50 text-sm tracking-[0.3em] uppercase mb-6">
          Hello, I'm
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Vinay Babu Machha
        </h1>
        <div className="text-2xl md:text-3xl font-light text-white/70 h-10 mb-8 flex items-center justify-center gap-2">
          <span>{currentText}</span>
          <span className="animate-pulse text-white/40">|</span>
        </div>
        <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-12">
          AWS Certified Solutions Architect building production-grade AI platforms,
          full-stack SaaS applications, and cloud-native systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-[#080808] rounded-full font-semibold hover:bg-white/90 transition-all duration-300 cursor-pointer text-sm"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 cursor-pointer text-sm"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <i className="ri-arrow-down-line text-white/30 text-xl"></i>
      </div>
    </section>
  );
}
