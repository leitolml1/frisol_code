import React from 'react'
import { Link } from 'react-router-dom'
export  function Navegacion() {
  return (
    <>
    <div className='flex gap-4 justify-center'>
        <Link to="/">Formulario</Link>
        <Link to="/datosConfirmados">Datos Enviados</Link>
        <Link to="/entradaQR">Entrada QR</Link>
        <Link to="/cartonEventos">Carton</Link>
        <Link to="/staff">Staff</Link>
    </div>
    </>
  )
}
