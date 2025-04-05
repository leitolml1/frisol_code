import React from 'react'
import { BsQrCodeScan } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { QRScan } from '../components/QRScan';

export function PageCartonEventos() {
    return (
        <div className="flex items-center justify-center min-h-screen p-6 ">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md ">

                <div>
                    <h1 className='text-2xl font-bold text-gray-100'>
                        Actividades Flisol 2025
                    </h1>
                </div>

                <div className="flex flex-row sm:flex-row gap-4 items-center mt-4">
                    {/* Texto de la actividad */}


                    {/* Escáner QR */}
                    <QRScan idEsperado="2" />
                    <div className='text-md text-gray-100'>
                        <h2>ACTIVIDAD 2</h2>
                    </div>
                </div>





            </div>
        </div>
    )
}
