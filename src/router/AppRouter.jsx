import React from 'react'
import {Routes,Route} from "react-router-dom"
import { PageEntradaQR } from '../pages/PageEntradaQR'
import { PageDatosConfirmados } from '../pages/PageDatosConfirmados'
import { PageCartonEventos } from '../pages/PageCartonEventos'
import { QRScan } from '../components/QRScan'
import {PageFormulario} from '../pages/PageFormulario'
export  function AppRouter() {
  return (
    <Routes>
        
        <Route path="" element={<PageFormulario/>}/>
        <Route path="/datosConfirmados" element={<PageDatosConfirmados/>}/>
        <Route path="/entradaQR" element={<PageEntradaQR/>}/>
        <Route path="/cartonEventos" element={<PageCartonEventos/>}/>
        <Route path="/qr" element={<QRScan/>}/>
    </Routes>
  )
}
