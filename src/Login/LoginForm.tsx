import React, { useState } from 'react';

const LoginForm: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    onLogin();
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* Top blue background with logo for mobile only */}
      <div className="block w-full md:hidden">
        <div className="relative flex flex-col items-center justify-center w-full h-40 overflow-hidden bg-gradient-to-br from-blue-900 to-cyan-900">
          <div className="absolute inset-0 opacity-30 bg-[url('/circuit-bg.svg')] bg-cover bg-center pointer-events-none" />
          <img src="/LOGO.png" alt="Smart Lock Logo" className="relative z-10 w-40 max-w-xs mx-auto" />
        </div>
      </div>
      {/* Left side: Logo and background (desktop only) */}
      <div className="relative flex-col items-center justify-center hidden w-1/2 min-h-screen overflow-hidden md:flex bg-gradient-to-br from-blue-900 to-cyan-900">
        <div className="absolute inset-0 opacity-30 bg-[url('/circuit-bg.svg')] bg-cover bg-center pointer-events-none" />
        <img src="/LOGO.png" alt="Smart Lock Logo" className="relative z-10 w-56 max-w-xs mx-auto" />
      </div>
      {/* Right side: Login form (full width on mobile) */}
      <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 bg-white md:w-1/2 md:py-0">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-6 mt-0 bg-white border border-gray-100 shadow-xl md:p-12 rounded-2xl md:mt-0">
          <h2 className="mb-10 text-4xl italic font-bold text-center text-blue-900">Login</h2>
          {error && <div className="mb-4 text-sm text-center text-red-600">{error}</div>}
          <div className="mb-6">
            <label className="block mb-2 text-lg italic text-slate-600" htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 text-lg border rounded-full border-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-900"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block mb-2 text-lg italic text-slate-600" htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 text-lg border rounded-full border-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-900"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-xl font-semibold text-white transition rounded-full bg-gradient-to-r from-blue-900 to-cyan-900 hover:from-blue-800 hover:to-cyan-800"
          >
            Login
          </button>
          <div className="mt-8 text-base text-center text-slate-400">
            Dont have an account yet?{' '}
            <span className="italic font-semibold text-blue-900 cursor-pointer">Sign up now</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
