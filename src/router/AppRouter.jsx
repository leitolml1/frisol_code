import React from 'react'
import {Routes,Route} from "react-router-dom"
import { PageEntradaQR } from '../pages/PageEntradaQR'
import { PageDatosConfirmados } from '../pages/PageDatosConfirmados'
import { PageFormulario } from '../pages/PageFormulario'
import PageCartonEventos from '../pages/PageCartonEventos'
import { QRScan } from '../components/QRScan'
import { PageBuscarInscrito } from '../pages/PageBuscarInscrito'
import { PageStaffPanel } from '../pages/PageStaffPanel'

export  function AppRouter() {
  return (
    <Routes>
        
        <Route path="/formularioFrisol" element={<PageFormulario/>}/>
        <Route path="/datosConfirmados" element={<PageDatosConfirmados/>}/>
        <Route path="/entradaQR" element={<PageEntradaQR/>}/>
        <Route path="/cartonEventos" element={<PageCartonEventos/>}/>
        <Route path="/qr-test" element={<QRScan.jsx/>}/>
        <Route path="/staff" element={<PageStaffPanel/>}/>
        <Route path="/buscar" element={<PageBuscarInscrito/>}/>
    </Routes>
  )
}
