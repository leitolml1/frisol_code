import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

export function QRScan() {
  const [resultado, setResultado] = useState('');

  const handleScan = data => {
    if (data) {
      setResultado(data.text); // `text` contiene el valor del QR
    }
  };

  const handleError = err => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Escáner de QR</h1>
      <QrReader
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p className="mt-4">Resultado: {resultado || "Esperando escaneo..."}</p>
    </div>
  );
}
