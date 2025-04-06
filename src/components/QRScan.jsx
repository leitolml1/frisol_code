import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';

export function QRScan() {
  const [resultado, setResultado] = useState(null);
  const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
      const email = data.text;
      setResultado(email);

      // Redirigir al cartón del invitado con su email
      navigate(`/cartonEventos?email=${encodeURIComponent(email)}`);
    }
  };

  const handleError = (err) => {
    console.error('Error escaneando:', err);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md text-white">
        <h1 className="text-2xl font-bold mb-4">Escanear QR</h1>
        <QrScanner
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        {resultado && (
          <div className="mt-4 bg-green-700 p-4 rounded-lg">
            <p>Redirigiendo al cartón de: {resultado}</p>
          </div>
        )}
      </div>
    </div>
  );
}
