import React from 'react';

const features = [
  {
    icon: (
      // Minimal QR code SVG icon
      <svg className="w-10 h-10 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="15" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="3" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M19 15h2v2m-2 2h2v-2m-6 2h2v-2m-2-2h2v2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    label: 'QR Code-Based Entry',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-cyan-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
    ),
    label: 'Time-Limited Access',
  },
  {
    icon: (
      // Minimal monitoring/analytics SVG icon
      <svg className="w-10 h-10 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="13" width="3" height="8" rx="1" />
        <rect x="8.5" y="9" width="3" height="12" rx="1" />
        <rect x="14" y="5" width="3" height="16" rx="1" />
        <path d="M3 21h18" />
      </svg>
    ),
    label: 'Real-Time Monitoring',
  },
  {
    icon: (
      // Minimal admin/user SVG icon
      <svg className="w-10 h-10 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-2.5 3.5-4.5 8-4.5s8 2 8 4.5" />
      </svg>
    ),
    label: 'Admin Dashboard',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-cyan-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h6v6H9z" /></svg>
    ),
    label: 'Secure Logs',
  },
];

const FeaturesSection: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container px-4 mx-auto">
      <h2 className="mb-10 text-3xl font-bold text-center text-blue-800">Smart Features for Smart Access</h2>
      <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center p-6 transition rounded-lg shadow bg-blue-50 hover:shadow-lg">
            <span className="mb-4">{feature.icon}</span>
            <span className="text-lg font-semibold text-center text-blue-900">{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection; 