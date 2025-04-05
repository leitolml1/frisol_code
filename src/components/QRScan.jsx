import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { BsQrCodeScan } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

export function QRScan() {
  const scannerRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedText, setScannedText] = useState(null);
  const [scanned, setScanned] = useState(false);

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
          setScanned(true); // ✅ AHORA sí cambia el ícono
          alert(`✅ Código escaneado: ${decodedText}`);

          html5QrCode.stop().then(() => {
            html5QrCode.clear();
            setIsScanning(false);
          }).catch(err => console.error("Error al detener escaneo", err));
        },
        (errorMessage) => {
          // errores ignorados
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

      <div id="reader" style={{ width: '300px' }}></div>

      {scanned ? (
        <div className="p-2 bg-green-500 text-center text-black rounded-lg shadow-md">
          <FaCheck className='text-xl' />
        </div>
      ) : (
        <button
          onClick={handleScan}
          className="p-2 bg-white text-center text-black rounded-lg border border-blue-500 animate-pulse"
        >
          <BsQrCodeScan className='text-xl' />
        </button>
      )}
    </div>
  );
}
