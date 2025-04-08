import axios from "axios"

const FrisolAPI=axios.create({
    baseURL:"http://127.0.0.1:8000/Usuarios"
})

export const createUsuario = (usuario)=>FrisolAPI.post("Crear_Usuario/",usuario)

export const getUsuario=(email)=> FrisolAPI.get(`/Obtener_Datos_Usuario/${email}/`)


export const getCartonUsuario=(correo)=>FrisolAPI.get(`/Obtener_Datos_Usuario/${email}/`)