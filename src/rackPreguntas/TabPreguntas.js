import React,{useState,useContext,useEffect} from 'react';
import {Link} from 'react-router-dom';
import  PreguntasContext  from  '../../src/Context/Preguntas/PreguntasContext';
const TabPreguntas = ({preguntaL}) => {
        const  {borrarPregunta} = useContext(PreguntasContext);      
                const BorrarPregunta = (id_pregunta)=>{
                     let pid={id:id_pregunta}
                    borrarPregunta(pid)              
                }
    return ( 
         <>
           <tr>
        <td className="border px-4 py-2">{preguntaL.pregunta}</td>
         <td className="border px-4 py-2">
        <Link to={`/PreguntaDetalles/${preguntaL._id}`} >
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                 Ver 
        </button>  </Link>
        </td>
            <td className="border px-4 py-2">
            <Link to={`/EditarPregunta/${preguntaL._id}`} >
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Editar
            </button>  </Link>
        </td>
        <td className="border px-4 py-2">
            
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={()=>BorrarPregunta(preguntaL._id)}
                >
                Borrar
            </button> 
        </td>
      </tr>


         </>
     );
}
 
export default TabPreguntas;