import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { BsQrCodeScan } from "react-icons/bs";
import { FaCheck, FaTimes } from "react-icons/fa";
import { marcarEventoAsistido } from '../api/backenEventos.api';

export function QRScan({ nombreEvento, email, onExpand = () => {} }) {
  const scannerRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [valid, setValid] = useState(null);
  const [expanded, setExpanded] = useState(false);

  // Estado que mantiene los eventos que ya fueron escaneados
  const [eventosMarcados, setEventosMarcados] = useState([]);

  async function marcarAsistencia(email, nombreEvento) {
    await marcarEventoAsistido(email, nombreEvento);
    console.log("Se ha marcado su participación en la actividad!");
  }

  const handleScan = async () => {
    if (isScanning) return;

    setExpanded(true);
    onExpand(true);

    const qrRegionId = 'reader-' + nombreEvento; // Un ID único por evento
    const html5QrCode = new Html5Qrcode(qrRegionId);
    scannerRef.current = html5QrCode;

    try {
      const devices = await Html5QrCode.getCameras();
      if (!devices || devices.length === 0) {
        alert("❌ No se encontraron cámaras.");
        onExpand(false);
        return;
      }

      const backCamera = devices.find(device =>
        device.label.toLowerCase().includes('back')
      ) || devices[0];

      html5QrCode.start(
        backCamera.id,
        {
          fps: 10,
          qrbox: { width: 200, height: 200 },
        },
        (decodedText) => {
          html5QrCode.stop().then(() => {
            html5QrCode.clear();
            setIsScanning(false);
          });

          if (decodedText === nombreEvento) {
            marcarAsistencia(email, nombreEvento);
            setScanned(true);
            setValid(true);

            // Marcar el evento como escaneado para no volver a mostrar el botón
            setEventosMarcados(prev => [...prev, nombreEvento]);
          } else {
            setScanned(true);
            setValid(false);
          }

          // Para mostrar el mensaje de QR correcto o incorrecto
          setTimeout(() => {
            setValid(null); // El mensaje "QR correcto" o "incorrecto" desaparecerá
          }, 2000); // El mensaje desaparecerá después de 2 segundos

          // No necesitamos restablecer el estado de "scanned" para que el icono check quede visible
        },
        (err) => {}
      );

      setIsScanning(true);
    } catch (error) {
      console.error("Error al acceder a la cámara", error);
      onExpand(false);
      alert("🚫 Permiso de cámara denegado.");
    }
  };

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().then(() => scannerRef.current.clear());
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-3 relative">
      {/* Lector QR */}
      <div className="relative">
        <div
          id={'reader-' + nombreEvento}
          className={`transition-all duration-300 bg-black rounded-md overflow-hidden
          ${expanded ? 'w-[200px] h-[200px]' : 'w-[1px] h-[1px]'}`}
        />

        {!expanded && (
          <>
            {scanned && valid ? (
              <div className="p-2 bg-green-500 text-white rounded-md z-10">
                <FaCheck className="text-xl" />
              </div>
            ) : (
              // Evitar mostrar el botón QRScan si el evento ya fue escaneado
              !eventosMarcados.includes(nombreEvento) && (
                <button
                  onClick={handleScan}
                  className="p-2 bg-white text-black rounded-md z-10"
                >
                  <BsQrCodeScan className="text-xl" />
                </button>
              )
            )}
          </>
        )}
      </div>

      {/* Actividad */}
      <div className="text-white text-sm">
        {scanned && valid && (
          <div className="flex items-center gap-1 text-green-400">
            <FaCheck /> QR correcto
          </div>
        )}
        {scanned && valid === false && (
          <div className="flex items-center gap-1 text-red-400">
            <FaTimes /> QR incorrecto
          </div>
        )}
      </div>
    </div>
  );
}
