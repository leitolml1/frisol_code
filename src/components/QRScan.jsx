import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

export function QRScan() {
  const [mostrarScanner, setMostrarScanner] = useState(false);

  useEffect(() => {
    let scanner;

    if (mostrarScanner) {
      scanner = new Html5QrcodeScanner("qr-reader", {
        fps: 10,
        qrbox: { width: 250, height: 250 }
      });

      scanner.render(
        (decodedText) => {
          console.log("QR detectado:", decodedText);
          alert(`Código escaneado: ${decodedText}`);
          // ✅ Oculta el escáner después de escanear
          setMostrarScanner(false);
          scanner.clear().catch(err => console.error("Error limpiando scanner:", err));
        },
        (error) => {
          console.warn("Error al escanear:", error);
        }
      );
    }

    return () => {
      if (scanner) {
        scanner.clear().catch((error) => {
          console.error("Error al limpiar escáner:", error);
        });
      }
    };
  }, [mostrarScanner]);

  return (
    <div className="flex flex-col items-center p-4 justify-center">
      <h2 className="text-xl font-bold mb-4">Escaneá tu código QR</h2>

      {!mostrarScanner && (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setMostrarScanner(true)}
        >
          Activar cámara
        </button>
      )}

      {/* Div donde se monta el lector */}
      {mostrarScanner && <div id="qr-reader" style={{ width: "300px" }}></div>}
    </div>
  );
}