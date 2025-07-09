import React from 'react';

interface HeaderProps {
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => (
  <header className="sticky top-0 z-50 w-full py-3 text-white shadow bg-gradient-to-r from-blue-900 via-blue-950 to-cyan-900">
    <div className="container flex items-center justify-between px-4 mx-auto">
      {/* Logo */}
      <div className="flex items-center space-x-2">
  
        <span className="text-xl font-bold tracking-wide">Smart Lock</span>
      </div>
      {/* Navigation */}
      <nav className="items-center hidden space-x-6 md:flex">
        <a href="#" className="transition hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,255,255,0.7)]">Home</a>
        <a href="#how-it-works" className="transition hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,255,255,0.7)]">How It Works</a>
        <a href="#pricing" className="transition hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,255,255,0.7)]">Pricing</a>
        <a href="#contact" className="transition hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,255,255,0.7)]">Contact</a>
      </nav>
      {/* Logout Icon Button with Text */}
      {onLogout && (
        <button
          onClick={onLogout}
          className="flex items-center justify-center p-2 ml-6 space-x-2 transition bg-transparent rounded-full hover:bg-cyan-400/20 hover:shadow-[0_0_12px_2px_rgba(34,255,255,0.5)]"
          aria-label="Logout"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
          </svg>
          <span className="font-medium text-white">Logout</span>
        </button>
      )}
    </div>
  </header>
);

export default Header; 