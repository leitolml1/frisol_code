import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaCheckCircle, FaQrcode } from 'react-icons/fa';

export default function PageCartonEventos() {
  const [params] = useSearchParams();
  const email = params.get('email');

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Simulamos traer los datos reales de la base por email
    const fetchUsuario = async () => {
      try {
        const res = await fetch(`https://tu-api.com/invitados/${email}`);
        const data = await res.json();
        setUsuario(data);
      } catch (error) {
        console.error('Error al obtener usuario:', error);
      }
    };

    if (email) fetchUsuario();
  }, [email]);

  const marcarAsistenciaEvento = async (evento) => {
    try {
      await fetch(`https://tu-api.com/invitados/${email}/evento`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ evento })
      });

      setUsuario(prev => ({
        ...prev,
        eventos: { ...prev.eventos, [evento]: true }
      }));
    } catch (err) {
      console.error('Error marcando asistencia:', err);
    }
  };

  if (!usuario) {
    return (
      <div className="text-center text-white p-6">
        <p>Cargando datos...</p>
      </div>
    );
  }

  const eventos = [
    { key: 'charla', nombre: 'Charla Principal' },
    { key: 'competencia', nombre: 'Competencia' },
    { key: 'stream', nombre: 'Transmisión en Vivo' },
    { key: 'taller', nombre: 'Taller para Principiantes' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Cartón de Eventos</h1>
      <p className="mb-2">Nombre: {usuario.nombre}</p>
      <p className="mb-4">Email: {usuario.email}</p>

      <div className="grid gap-4">
        {eventos.map(ev => (
          <div key={ev.key} className="bg-gray-800 p-4 rounded-xl flex justify-between items-center">
            <span>{ev.nombre}</span>
            {usuario.eventos?.[ev.key] ? (
              <FaCheckCircle className="text-green-400 text-2xl" />
            ) : (
              <button
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg flex items-center gap-2"
                onClick={() => marcarAsistenciaEvento(ev.key)}
              >
                <FaQrcode /> Escanear QR
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


// IGNORA TODO LEITO ZZZ ZZZZ