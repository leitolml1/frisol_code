import React, { useEffect, useState } from 'react';
import { QRScan } from '../components/QRScan';
import { useParams } from 'react-router-dom';
import { getCartonUsuario } from '../api/backendFrisola.api';
import { getUsuario } from '../api/backendFrisola.api';
import { getAllEventos } from '../api/backenEventos.api';
import { useNavigate } from 'react-router-dom';
export function PageCartonEventos() {
  const navigate=useNavigate()
  const [usuario, setUsuario] = useState()
  const [eventos, setEvento] = useState([])
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
    fecthEventos()
    fetchUsuario();
  }, [email]);

  console.log(usuario)
  console.log(eventos)

  const [expandido, setExpandido] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">
            Actividades Flisol 2025
          </h1>
        </div>
        {eventos.map(evento => (
          <div
            key={evento.id}
            className={`flex ${expandido ? 'flex-col' : 'flex-row'
              } gap-4 items-center mt-4 transition-all duration-300`}
          >
            <QRScan
              idEsperado="actividadFlisol2"
              onExpand={(exp) => setExpandido(exp)}
            />
            <div className="text-md text-gray-100">
              <h2>{evento.nombre}</h2>
            </div>

          </div>

        ))}
      </div>
    </div>
  );
}


