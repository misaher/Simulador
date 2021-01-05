import React,{useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
const TabTipos = ({tipos}) => {
    return ( 
        <tr>
        <td className="border px-4 py-2">{tipos.nombre}</td>
         <td className="border px-4 py-2">
        <Link to={`/Detalles/${tipos.nombre}`} >
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                 Ver 
        </button>  </Link>
    </td>
       
      </tr>
     );
}
 
export default TabTipos;