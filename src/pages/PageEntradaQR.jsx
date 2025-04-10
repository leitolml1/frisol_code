import React from 'react'
export function PageEntradaQR() {
  return (
    <>
        <div className="flex items-center justify-center min-h-screen p-6">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-center mb-4">
              <img
                src="https://flisol.info/Logo?action=AttachFile&do=get&target=FLISoL-2015.png"
                alt="Flisol"
                className="w-64"
              />
            </div>
            <div>
              <div>
              <h1 className='text-xl font-bold text-gray-100'>Flisol Evento Salta</h1>
              <h2 className='text-gray-100'>26 abril 2025</h2>
              <h2 className='text-gray-100'>"Direccion", A4400 Salta, Argentina</h2>
              </div>
              <div className=' flex justify-center m-6'>
                <img src="https://images.icon-icons.com/1521/PNG/512/qrcodehd_106111.png" alt=""
                  className='w-50 bg-gray-100'
                  
                />
              </div>

              </div>
          </div>
        </div>
      
    </>
  )
}
