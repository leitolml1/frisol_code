import React from 'react'
import { Link } from 'react-router-dom'
import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { CgMail } from "react-icons/cg";
import { useForm } from 'react-hook-form';
export function PageFormulario() {
    const {register,handleSubmit}=useForm()
    return (
        <>
            <div className="flex items-center justify-center min-h-screen p-6 ">
                <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md  shadow-xl shadow-gray-800 ">
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://flisol.info/Logo?action=AttachFile&do=get&target=FLISoL-2015.png"
                            alt="Flisol"
                            className="w-64"
                        />
                    </div>

                    <form action="" className="space-y-4">

                        <h1 className='text-xl font-bold text-gray-100'>Datos personales</h1>
                        <div className='flex flex-row gap-4'>
                            <HiUser className='text-4xl rounded p-1 bg-linear-to-r from-cyan-500 to-blue-500' />
                            <div className=''>
                                <input type="text" className="w-full p-2 rounded-xl border border-gray-700 bg-sky-50" placeholder='Nombre' />
                                <input type="text" className="w-full p-2 rounded-xl border border-gray-700 bg-sky-50 mt-4" placeholder='Apellido' />
                            </div>

                        </div>


                        <div className='flex flex-row gap-4'>
                            <HiPhone className='text-4xl rounded p-1 bg-linear-to-r from-green-500 to-green-800' />
                            <input type="number" className="w-full p-2 rounded-xl border border-gray-700 bg-sky-50" placeholder='Telefono' />
                        </div>

                        <div className='flex flex-row gap-4'>
                            <CgMail className='text-4xl rounded p-1 bg-linear-to-r from-orange-500 to-orange-800' />

                            <input type="email" className="w-full p-2 rounded-xl border border-gray-700 bg-sky-50" placeholder='Correo electronico' />
                        </div>

                        <button class="relative px-6 py-3 text-white font-bold rounded-lg overflow-hidden bg-gradient-to-r from-pink-500 via-yellow-500
                         to-pink-600 animate-gradient w-full botonEnviar">
                            <Link to="/entradaQR">Enviar</Link>

                        </button>
                    </form>
                </div>




            </div>
        </>
    )
}
