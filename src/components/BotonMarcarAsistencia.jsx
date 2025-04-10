import { useState } from 'react';
import { marcarAsistencia } from '../api/backendFrisola.api';
export function BotonMarcarAsistencia({ email, asistencia }) {
  const [asistenciaMarcada, setAsistenciaMarcada] = useState(asistencia);

  async function submitAsistencia() {
    try {
      await marcarAsistencia(email);
      setAsistenciaMarcada(true); // ✅ Actualiza el estado local
    } catch (error) {
      console.error("Error al marcar asistencia:", error);
    }
  }

  return (
    <>
      {!asistenciaMarcada ? (
        <button
          className='bg-black w-full p-2 mt-2 rounded-2xl hover:bg-gray-700 text-white'
          onClick={submitAsistencia}
        >
          Marcar Asistencia
        </button>
      ) : (
        <button
          className='bg-green-500 w-full p-2 mt-2 rounded-2xl font-bold text-white'
          disabled
        >
          Asistencia marcada
        </button>
      )}
    </>
  );
}