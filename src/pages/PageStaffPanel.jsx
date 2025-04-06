import React from 'react';
import { Link } from 'react-router-dom';
import { BsQrCodeScan } from 'react-icons/bs';
import { HiUserAdd } from 'react-icons/hi';
import { FaListUl } from 'react-icons/fa';

export function PageStaffPanel() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md text-gray-100">
        <h1 className="text-2xl font-bold mb-6">Panel del Staff</h1>

        <div className="space-y-4">
          <Link to="/scanqr" className="block bg-blue-600 p-4 rounded-xl flex items-center gap-4 hover:bg-blue-700">
            <BsQrCodeScan className="text-2xl" />
            Escanear QR
          </Link>

          <Link to="/formularioFrisol" className="block bg-green-600 p-4 rounded-xl flex items-center gap-4 hover:bg-green-700">
            <HiUserAdd className="text-2xl" />
            Registro manual
          </Link>

          <Link to="/buscar" className="block bg-purple-600 p-4 rounded-xl flex items-center gap-4 hover:bg-purple-700">
            <FaListUl className="text-2xl" />
            Lista de asistentes
          </Link>
        </div>
      </div>
    </div>
  );
}
