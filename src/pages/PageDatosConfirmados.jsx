import React from 'react'

export  function PageDatosConfirmados() {
  return (
    <>
        <div className="flex items-center justify-center min-h-screen p-6 ">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md ">
            <div className="flex justify-center mb-4">
              <img
                src="https://flisol.info/Logo?action=AttachFile&do=get&target=FLISoL-2015.png"
                alt="Flisol"
                className="w-64"
              />
            </div>
            <div>
              <div>
              <h1 className='text-xl font-bold text-gray-100'>Datos enviados</h1>
                <h2 className=' text-gray-100'>Su informacion a sido enviada , no olvide revisar su correo para recibir novedades!</h2>
                <div className='flex flex-row justify-center mt-4'>
                <img 
               
               src="https://media.tenor.com/NeJfHqkmdMIAAAAj/tux-linux-penguin.gif" alt="" />
                </div>
              </div>
            </div>



          </div>
        </div>
      
    </>
  )
}
