import axios from "axios"

const FrisolAPI=axios.create({
    baseURL:"https://backend-nb6u.onrender.com/Usuarios"
})

export const createUsuario = (usuario)=>FrisolAPI.post("Crear_Usuario/",usuario)

export const getUsuario=(email)=> FrisolAPI.get(`/Obtener_Datos_Usuario/${email}/`)


export const getCartonUsuario=(email)=>FrisolAPI.get(`/Obtener_Datos_Usuario/${email}/`)

export const marcarAsistencia= (email)=>FrisolAPI.post("/Marcar_Asistencia_Usuario/",{email})