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
                <h2 className=' text-gray-100'>En unos dias te llegara tu invitacion via QR, no olvides revisar tu correo</h2>
              </div>
                <div>
                    <h1 className='text-xl font-bold  text-gray-100'>Sponsorea</h1>
                </div>
            </div>



          </div>
        </div>
      
    </>
  )
}
