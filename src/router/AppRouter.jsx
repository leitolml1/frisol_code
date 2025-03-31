import React from 'react'
import {Routes,Route} from "react-router-dom"
import { PageFormulario } from '../pages/pageFormulario'
import { PageEntradaQR } from '../pages/PageEntradaQR'
import { PageDatosConfirmados } from '../pages/PageDatosConfirmados'
import PageCartonEventos from '../pages/PageCartonEventos'
export  function AppRouter() {
  return (
    <Routes>
        
        <Route path="/formularioFrisol" element={<PageFormulario/>}/>
        <Route path="/datosConfirmados" element={<PageDatosConfirmados/>}/>
        <Route path="/entradaQR" element={<PageEntradaQR/>}/>
        <Route path="/cartonEventos" element={<PageCartonEventos/>}/>

    </Routes>
  )
}
