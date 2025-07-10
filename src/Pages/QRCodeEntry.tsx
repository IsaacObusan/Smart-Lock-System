import React from 'react';

const QRCodeEntry: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 px-4 py-12">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 border border-cyan-100">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">QR Code-Based Entry</h1>
        <p className="text-lg text-slate-700 mb-6 text-center">
          Our Smart Lock System allows guests to check in and access their rooms using a unique, time-bound QR code. The QR code is sent to the guest's phone or provided via the website, and is valid only for the duration of their stay. Guests simply scan the QR code at their room door to gain entry, ensuring secure and seamless access.
        </p>
        <div className="flex flex-col items-center gap-4">
          {/* Sample QR code (placeholder) */}
          <div className="bg-white p-4 rounded-lg shadow border border-cyan-200">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=SmartLockDemo" alt="Sample QR Code" className="w-36 h-36" />
          </div>
          <span className="text-sm text-slate-500">Scan this QR code for a demo (placeholder)</span>
        </div>
        <div className="mt-8 text-center text-cyan-800 font-semibold">
          Secure. Seamless. Contactless.
        </div>
      </div>
    </div>
  );
};

export default QRCodeEntry; 