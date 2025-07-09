import React from 'react';

interface HeaderProps {
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => (
  <header className="sticky top-0 z-50 w-full py-3 text-white shadow bg-gradient-to-r from-blue-900 via-blue-950 to-cyan-900">
    <div className="container flex items-center justify-start px-4 mx-auto">
      {/* Logo */}
      <div className="flex items-center space-x-2 mr-8">
        <img src="/LOGO.png" alt="Smart Lock Logo" className="h-10 w-auto" />
      </div>
      {/* Navigation and Logout */}
      <div className="flex items-center gap-6 ml-auto">
        <nav className="items-center hidden space-x-6 md:flex">
          <a href="#" className="flex items-center gap-2 transition hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,255,255,0.7)]">
            {/* Home Icon */}
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
            Home
          </a>
          <a href="#how-it-works" className="flex items-center gap-2 transition hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,255,255,0.7)]">
            {/* Info/How It Works Icon */}
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
            How It Works
          </a>
          <a href="#pricing" className="flex items-center gap-2 transition hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,255,255,0.7)]">
            {/* Pricing/Tag Icon */}
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 7a1 1 0 011-1h3.586a1 1 0 01.707.293l7.414 7.414a1 1 0 010 1.414l-6.586 6.586a1 1 0 01-1.414 0L3.293 13.707a1 1 0 010-1.414L10.707 4.293A1 1 0 0111.414 4H15a1 1 0 011 1v3.586a1 1 0 01-.293.707L7 7z" /></svg>
            Pricing
          </a>
          <a href="#contact" className="flex items-center gap-2 transition hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,255,255,0.7)]">
            {/* Contact/Telephone Icon */}
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.34a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0121 16.92z" /></svg>
            Contact
          </a>
        </nav>
        {/* Logout Icon Button with Text */}
        {onLogout && (
          <button
            onClick={onLogout}
            className="flex items-center justify-center p-2 space-x-2 transition bg-transparent rounded-full hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,255,255,0.7)]"
            aria-label="Logout"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
            </svg>
            <span className="font-medium text-white">Logout</span>
          </button>
        )}
      </div>
    </div>
  </header>
);

export default Header; 