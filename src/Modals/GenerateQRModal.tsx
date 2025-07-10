import React, { useState } from 'react';

interface GenerateQRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GenerateQRModal: React.FC<GenerateQRModalProps> = ({ isOpen, onClose }) => {
  const [guestName, setGuestName] = useState('');
  const [room, setRoom] = useState('');
  const [qrValue, setQrValue] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName && room) {
      setQrValue(`SmartLock|Guest:${guestName}|Room:${room}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-md p-8 bg-white shadow-xl rounded-2xl">
        <button
          className="absolute text-2xl top-4 right-4 text-cyan-900 hover:text-cyan-600"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="mb-6 text-2xl font-bold text-center text-blue-900">Generate Guest QR Code</h2>
        {!qrValue ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Guest Name"
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-900"
              value={guestName}
              onChange={e => setGuestName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Room Number"
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-900"
              value={room}
              onChange={e => setRoom(e.target.value)}
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center w-full gap-2 py-2 mt-2 font-semibold text-white rounded bg-gradient-to-r from-blue-900 to-cyan-900 hover:from-blue-800 hover:to-cyan-800"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="15" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="3" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="10" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
                <path d="M19 15h2v2m-2 2h2v-2m-6 2h2v-2m-2-2h2v2" stroke="currentColor" strokeWidth="2" />
              </svg>
              Generate QR
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(qrValue)}`}
              alt="Generated QR Code"
              className="w-36 h-36"
            />
            <div className="font-semibold text-center text-blue-900">QR Code for {guestName} (Room {room})</div>
            <button
              className="mt-2 text-cyan-700 hover:underline"
              onClick={() => setQrValue(null)}
            >
              Generate Another
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateQRModal; 