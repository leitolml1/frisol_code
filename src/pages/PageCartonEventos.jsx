import React, { useEffect, useState } from 'react';
import { QRScan } from '../components/QRScan';
import { useParams } from 'react-router-dom';
import { getCartonUsuario } from '../api/backendFrisola.api';
import { getUsuario } from '../api/backendFrisola.api';
import { getAllEventos, getAllEventosAsistidos } from '../api/backenEventos.api';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
export function PageCartonEventos() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState()
  const [eventos, setEvento] = useState([])
  const [enventosAsistidos, setEventoAsistido] = useState([])
  const { email } = useParams()


  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const res = await getUsuario(email);
        setUsuario(res.data);
      } catch (error) {
        console.error("Error al obtener usuario:", error);
      }
    };
    const fecthEventos = async () => {
      try {
        const res = await getAllEventos()
        setEvento(res.data)
      } catch (error) {
        console.error("Error al obtener los eventos", error)
      }
    }
    const fecthEventosAsistidos = async () => {
      const res = await getAllEventosAsistidos(email)
      setEventoAsistido(res.data)

    }
    fetchUsuario()
    fecthEventos()
    fecthEventosAsistidos()
  }, [email]);

  const [expandido, setExpandido] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className='flex flex-row '>
          <img
            src="https://flisol.info/Logo?action=AttachFile&do=get&target=FLISoL-2015.png"
            alt="Flisol"
            className="w-40"
          />
          <img
            src="https://media.tenor.com/NeJfHqkmdMIAAAAj/tux-linux-penguin.gif" alt=""
            className='w-16'
            />

        </div>
        <h2 className='text-xl font-bold text-gray-100'>
            Cartón: {usuario ? usuario.id : 'Cargando...'}
          </h2>

        {eventos.map(evento => {
          const asistio = enventosAsistidos.some(ea => ea.evento === evento.id);
          return (
            <div
              key={evento.id}
              className={`flex ${expandido ? 'flex-col' : 'flex-row'} gap-4 items-center mt-4 transition-all duration-300`}
            >
              {asistio ? (
                <div className="p-2 bg-green-500 text-white rounded-md z-10">
                  <FaCheck className="text-xl" />
                </div>
              ) : (
                usuario && (
                  <QRScan
                    nombreEvento={evento.nombre}
                    email={usuario.email}
                    onExpand={(exp) => setExpandido(exp)}
                  />
                )
              )}
              <div className="text-md text-gray-100">
                <h2>{evento.nombre}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


