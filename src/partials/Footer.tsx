import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full py-4 mt-auto border-t shadow-inner bg-gradient-to-r from-blue-900 via-blue-950 to-cyan-900/80 text-cyan-200 border-cyan-400/30 backdrop-blur-md">
    <div className="container flex flex-col items-center px-4 mx-auto text-sm text-center">
      <div className="flex items-center mb-2 space-x-2">
        <img src="/LOGO.png" alt="Smart Lock Logo" className="w-auto h-8" />
      </div>
      <div className="mb-1">&copy; {new Date().getFullYear()} Smart Lock. All rights reserved.</div>
      <div className="text-xs text-cyan-400">Secure. Seamless. Futuristic.</div>
    </div>
  </footer>
);

export default Footer; 