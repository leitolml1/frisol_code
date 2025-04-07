import React, { useState } from 'react';

export function PageBuscarInscrito() {
  const [email, setEmail] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleBuscar = () => {
    const fakeDB = [{ email: 'ejemplo@gmail.com', nombre: 'Juan Pérez' }];
    const encontrado = fakeDB.find(persona => persona.email === email);
    setResultado(encontrado || 'No encontrado');
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md text-gray-100">
        <h1 className="text-2xl font-bold mb-4">Buscar Inscripto por Email</h1>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          className="w-full p-2 rounded-xl border border-gray-700 bg-sky-50 text-black mb-4"
        />
        <button onClick={handleBuscar} className="w-full p-2 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold">
          Buscar
        </button>

        {resultado && (
            <div className="mt-4">
                {typeof resultado === 'string' ? (
                <p className="text-red-500 font-semibold">{resultado}</p>
                ) : (
                <div className="bg-green-700 p-4 rounded-lg">
                    <h2 className="text-lg font-bold mb-2">Inscripto encontrado:</h2>
                    <ul className="space-y-1">
                    <li><strong>Nombre:</strong> {resultado.nombre}</li>
                    <li><strong>Email:</strong> {resultado.email}</li>
                    </ul>
                </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
}
