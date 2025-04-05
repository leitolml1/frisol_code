
import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode'; // Importamos la librería para escanear códigos QR

export function QRScan() {
  useEffect(() => {
    // Crear una nueva instancia del escáner con opciones
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10, // Fotogramas por segundo
      qrbox: { width: 250, height: 250 } // Tamaño del área de escaneo
    });

    // Iniciar el escaneo
    scanner.render(
      (decodedText, decodedResult) => {
        // ✅ Si se escanea un QR, mostrar el texto
        console.log("QR detectado:", decodedText);
        alert(`Código escaneado: ${decodedText}`);
      },
      (error) => {
        // 🔁 Si hay un error (por ejemplo, no se detecta QR), simplemente lo ignoramos
        console.warn("Error al escanear:", error);
      }
    );

    // 🧹 Limpiar al desmontar el componente
    return () => scanner.clear();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-black justify-center text-white">
      <h2 className="text-xl font-bold mb-4">Escaneá tu código QR</h2>

      {/* Div donde se monta el lector */}
      <div id="qr-reader" style={{ width: "300px" }}></div>
    </div>
  );
}
