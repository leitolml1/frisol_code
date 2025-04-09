import axios from "axios"

const EventosFrisolAPI=axios.create({
    baseURL:"http://127.0.0.1:8000/Eventos"
})

export const getAllEventos=()=>EventosFrisolAPI.get("Obtener_Eventos/")

export const marcarEventoAsistido = (email, evento) => {
    return EventosFrisolAPI.post(`/Marcar_Asistencia_Evento/`, {
      email: email,
      evento: evento
    });
  };
  export const getAllEventosAsistidos = (email) => EventosFrisolAPI.post(`/Obtener_Eventos_Asistidos/`, { email });