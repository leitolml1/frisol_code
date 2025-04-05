import React from 'react'
import { BsQrCodeScan } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

export default function PageCartonEventos() {
    return (
        <div className="flex items-center justify-center min-h-screen p-6 ">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md ">

                <div>
                    <h1 className='text-2xl font-bold text-gray-100'>
                        Actividades Flisol 2025
                    </h1>
                </div>

                <div className='flex flex-row ga-p4 items-center mt-4'>
                    <div class=" p-2  bg-linear-to-r from-green-500 to-green-800 text-center text-black rounded-lg 
                         ">
                        <FaCheck
                            className='text-xl'
                        />
                    </div>1


                    <div className='text-md text-gray-100'>
                        <h2>
                            ACTIVIDAD 1
                        </h2>
                    </div>

                </div>
                <div className='flex flex-row ga-p4 items-center mt-4'>
                    <div class=" p-2 bg-white text-center text-black rounded-lg 
                        border-1 border-blue-500 animate-pulse">
                        <BsQrCodeScan
                            className='text-xl'
                        />
                    </div>1


                    <div className='text-md text-gray-100'>
                        <h2>
                            ACTIVIDAD 2
                        </h2>
                    </div>

                </div>





            </div>
        </div>
    )
}
