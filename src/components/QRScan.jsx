import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

export function QRScan() {
  const scannerRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedText, setScannedText] = useState(null);

  const handleScan = async () => {
    if (isScanning) return;

    const qrRegionId = 'reader';
    const html5QrCode = new Html5Qrcode(qrRegionId);
    scannerRef.current = html5QrCode;

    try {
      const devices = await Html5Qrcode.getCameras();
      if (!devices || devices.length === 0) {
        alert("❌ No se encontraron cámaras disponibles.");
        return;
      }

      // Elegir cámara trasera si es posible
      const backCamera = devices.find(device =>
        device.label.toLowerCase().includes('back')
      ) || devices[0];

      const cameraId = backCamera.id;

      html5QrCode.start(
        cameraId,
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText, decodedResult) => {
          setScannedText(decodedText);
          alert(`✅ Código escaneado: ${decodedText}`);

          html5QrCode.stop().then(() => {
            html5QrCode.clear();
            setIsScanning(false);
          }).catch(err => console.error("Error al detener escaneo", err));
        },
        (errorMessage) => {
          // Ignorar errores de escaneo frecuentes
        }
      );

      setIsScanning(true);
    } catch (error) {
      console.error("Error al acceder a la cámara", error);
      if (error.name === 'NotAllowedError') {
        alert("🚫 Permiso de cámara denegado.");
      } else {
        alert("⚠️ Error al acceder a la cámara.");
      }
    }
  };

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().then(() => {
          scannerRef.current.clear();
        }).catch(err => {
          console.error("Error limpiando escáner", err);
        });
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-xl font-semibold">Escanear QR</h2>

      {!isScanning && (
        <button
          onClick={handleScan}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          📷 Abrir cámara
        </button>
      )}

      <div id="reader" style={{ width: '300px' }}></div>

      {scannedText && (
        <div className="mt-4 p-2 bg-green-100 text-green-800 rounded w-full text-center">
          Código escaneado: <strong>{scannedText}</strong>
        </div>
      )}
    </div>
  );
}