import axios from "axios"

const EventosFrisolAPI=axios.create({
    baseURL:"http://127.0.0.1:8000/Eventos"
})

export const getAllEventos=()=>EventosFrisolAPI.get("Obtener_Eventos/")