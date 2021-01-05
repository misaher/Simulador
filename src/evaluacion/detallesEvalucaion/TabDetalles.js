import React,{useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
const TabDetalles = ({tipos}) => {
    let  {evaluar,califiacion} =tipos
    return ( 
        <tr>
        <td className="border px-4 py-2">{tipos.numero_pre}</td>
        <td className="border px-4 py-2">{evaluar ? "Pendiente" : califiacion}</td>
        <td className="border px-4 py-2">{evaluar ? "Pendiente" :"Realizada" }</td>

      </tr>
     );
}
 
export default TabDetalles;