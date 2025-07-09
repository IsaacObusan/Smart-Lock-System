import React from 'react';

const steps = [
  {
    icon: (
      // Futuristic QR code SVG icon
      <svg className="w-12 h-12 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="15" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="3" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: 'Generate QR Code',
    desc: 'Admin generates guest QR code.',
  },
  {
    icon: (
      // Futuristic send/email SVG icon
      <svg className="w-12 h-12 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
    title: 'Send to Guest',
    desc: 'Guest receives code via email/SMS.',
  },
  {
    icon: (
      // Futuristic scan/phone SVG icon
      <svg className="w-12 h-12 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="1.5" />
        <rect x="9" y="6" width="6" height="4" rx="1" />
      </svg>
    ),
    title: 'Scan at Door',
    desc: 'Guest scans QR at door.',
  },
  {
    icon: (
      // Futuristic lock SVG icon
      <svg className="w-12 h-12 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="11" width="14" height="8" rx="2" />
        <path d="M8 11V7a4 4 0 1 1 8 0v4" />
        <circle cx="12" cy="15" r="2" />
      </svg>
    ),
    title: 'Access Logged',
    desc: 'Access is logged & monitored.',
  },
];

const HowItWorksSection: React.FC = () => (
  <section className="py-16 bg-blue-50">
    <div className="container px-4 mx-auto">
      <h2 className="mb-10 text-3xl font-bold text-center text-blue-800">How It Works</h2>
      <div className="flex flex-col items-center justify-center max-w-4xl gap-8 mx-auto md:flex-row">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center max-w-xs p-6 text-center border shadow-lg bg-white/60 rounded-xl backdrop-blur-md border-cyan-100">
            <div className="mb-4">{step.icon}</div>
            <div className="mb-2 text-xl font-semibold text-blue-900">{step.title}</div>
            <div className="text-base text-gray-700">{step.desc}</div>
            {idx < steps.length - 1 && (
              <div className="hidden w-1 h-16 my-4 bg-cyan-200 md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection; 