import React,{useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
const ExamenesInfo = ({examenI}) => {
     const {evaluar,califiacion} = examenI;
   const  borrarUsuarioExamen= ()=>{
          
   }
    return ( 
        <tr>
        <td className="border px-4 py-2">{examenI.nombre_eval}</td>
         <td className="border px-4 py-2">{evaluar? "Pendiente" : califiacion}</td>
         <td className="border px-4 py-2">{ evaluar ?"Pendiente" : "Realizada"}</td>
         <td className="border px-4 py-2">{examenI.numero_pre}</td>
        <td className="border px-4 py-2">
        <Link to={`/EditarUsuario/${examenI.nombre_eval}`} >
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Editar
        </button>  </Link>
    </td>
    <td className="border px-4 py-2">
        
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={()=>borrarUsuarioExamen(examenI.nombre_eval)}
              >
             Borrar
        </button> 
    </td>
      </tr>

     );
}
 
export default ExamenesInfo;