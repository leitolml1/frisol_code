import React from 'react'
import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { CgMail } from "react-icons/cg";
import { useForm } from 'react-hook-form';
import { createUsuario } from '../api/backendFrisola.api';
import { useNavigate } from 'react-router-dom';
export  function PageFormulario() {
    const navigate=useNavigate()
    const {
      register,
      handleSubmit,
      setError,
      formState: { errors }
    } = useForm();
  
    const onSubmit = async (data) => {
      try {
        await createUsuario(data);
        navigate("datosConfirmados")
      } catch (error) {
        if (error.response?.status === 302) {
          setError("email", {
            type: "manual",
            message: "Este correo ya está registrado"
          });
        }
      }
    };

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

                    <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

                        <h1 className='text-xl font-bold text-gray-100'>Datos personales</h1>
                        <div className="flex flex-row gap-4 items-start">
                            <HiUser className="text-4xl rounded p-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white" />

                            <div className="flex flex-col w-full">
                                <input
                                    type="text"
                                    className={`w-full p-2 rounded-xl outline-none
                                    ${errors.nombre ? "border border-red-500 bg-red-300" : "border border-gray-700 bg-sky-100"}
                                    `}
                                            placeholder="Nombre"
                                    {...register("nombre", { required: true })}
                                />

                                <input
                                    type="text"
                                    className={`w-full p-2 rounded-xl mt-4 outline-none
                                    ${errors.apellido ? "border border-red-500 bg-red-300" : "border border-gray-700 bg-sky-100"}
                                    `}
                                    placeholder="Apellido"
                                    {...register("apellido", { required: true })}
                                />
                            </div>
                        </div>


                        <div className='flex flex-row gap-4'>
                            <HiPhone className='text-4xl rounded p-1 bg-linear-to-r from-green-500 to-green-800' />
                            <input type="number" className={`w-full p-2 rounded-xl border" 
                            ${errors.telefono ? "border-red-50 bg-red-300 " : "border-gray-700 bg-sky-100"}`}

                                placeholder='Telefono'
                                {...register("telefono", { required: true })}

                            />
                        </div>

                        <div className='flex flex-row gap-4'>
                            <CgMail className='text-4xl rounded p-1 bg-gradient-to-r from-orange-500 to-orange-800 text-white' />

                            <input
                                type="email"
                                className={`w-full p-2 rounded-xl border ${errors.email  ? 'border-red-500  bg-red-300' : 'border-gray-700 bg-sky-100'
                                    } `}
                                placeholder='Correo electrónico'
                                {...register("email", { required: true })}
                            />
                        </div>
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}



                        <div className='mt-2'>
                            <button className="relative px-6 py-3 text-white font-bold rounded-lg overflow-hidden bg-gradient-to-r from-pink-500 via-yellow-500
                         to-pink-600 animate-gradient w-full botonEnviar">
                                Enviar

                            </button>
                        </div>
                    </form>
                </div>




            </div>
        </>
    )
}
