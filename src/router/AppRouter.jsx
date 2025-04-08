import React from 'react'
import {Routes,Route} from "react-router-dom"
import { PageEntradaQR } from '../pages/PageEntradaQR'
import { PageDatosConfirmados } from '../pages/PageDatosConfirmados'
import { PageCartonEventos } from '../pages/PageCartonEventos'
import { PageBuscarInscrito } from '../pages/PageBuscarInscrito'
import { PageStaffPanel } from '../pages/PageStaffPanel'
import { PageFormulario } from '../pages/PageFormulario'
export  function AppRouter() {
  return (
    <Routes>
        <Route path="" element={<PageFormulario/>}/>
        <Route path="/datosConfirmados" element={<PageDatosConfirmados/>}/>
        <Route path="/entradaQR" element={<PageEntradaQR/>}/>
        <Route path="/cartonEventos/:email" element={<PageCartonEventos/>}/>
        <Route path="/staff" element={<PageStaffPanel/>}/>
        <Route path="/buscar" element={<PageBuscarInscrito/>}/>
    </Routes>
  )
}
