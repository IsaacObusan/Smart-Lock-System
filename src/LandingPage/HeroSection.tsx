import React from 'react';
import Particles from 'react-tsparticles';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-200 to-blue-400 overflow-hidden">
      {/* Moving futuristic particles background */}
      <Particles
        id="hero-tsparticles"
        className="absolute inset-0 z-0"
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            color: { value: ['#00ffe7', '#0a2342', '#fff'] },
            links: {
              enable: true,
              color: '#00ffe7',
              distance: 120,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: 'none',
              outModes: { default: 'bounce' },
            },
            number: { value: 40, density: { enable: true, area: 800 } },
            opacity: { value: 0.4 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20">
        <h1 className="mb-4 text-4xl font-extrabold text-center text-blue-900 md:text-5xl drop-shadow-lg">
          Smart Lock System for Hotel Access Control Using QR Code Technology
        </h1>
        <p className="max-w-2xl mb-8 text-lg text-center text-blue-800 md:text-xl">
          Secure, seamless, and contactless room access for guests.
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <button className="relative px-8 py-4 text-xl font-semibold text-white transition-all duration-300 transform border border-white rounded-lg shadow-lg group bg-gradient-to-r from-white/10 via-white/0 to-white/10 hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 hover:border-cyan-400 hover:text-cyan-200 hover:-translate-y-1">
            <span className="relative z-10">Watch Video</span>
            <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 group-hover:opacity-100"></div>
            <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
          </button>
          <button className="relative px-8 py-4 text-xl font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg group bg-gradient-to-r from-blue-900 via-blue-900 to-cyan-900 hover:from-blue-800 hover:to-cyan-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 group-hover:opacity-100"></div>
            <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-blue-400/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 