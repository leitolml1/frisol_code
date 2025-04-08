import React, { useState } from 'react';
import { getUsuario } from '../api/backendFrisola.api';
import { useForm } from 'react-hook-form';

export function PageBuscarInscrito() {
  const { register, errors, handleSubmit } = useForm()
  const [resultado, setResultado] = useState(null);

  const onSubmit = async (data) => {
    const res=await getUsuario(data.email)
    setResultado(res.data)
  };
  function submitAsistencia (idUsuario){
    console.log(idUsuario)
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md text-gray-100">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold mb-4">Buscar Email</h1>
          <input
            type="email"
            {...register("email")}
            placeholder="Correo electrónico"
            className="w-full p-2 rounded-xl border border-gray-700 bg-sky-50 text-black mb-4"
          />
          <button className="w-full p-2 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold">
            Buscar
          </button>

        </form>

        {resultado && (
          <div className="mt-4">
            {typeof resultado === 'string' ? (
              <p className="text-red-500 font-semibold">{resultado}</p>
            ) : (
              <div className="bg-gray-700 p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-2">Inscripto encontrado:</h2>
                <ul className="space-y-1">
                  <li><strong>Nombre:</strong> {resultado.nombre}</li>
                  <li><strong>Apellido:</strong> {resultado.apellido}</li>
                  <li><strong>Telefono:</strong> {resultado.telefono}</li>
                </ul>
                <button className='bg-black w-full p-2 mt-2 rounded-2xl hover:bg-gray-700 ' onClick={()=>submitAsistencia(resultado.id)}>Marcar Asistencia</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
