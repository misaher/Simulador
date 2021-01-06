import React,{useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import  ExamenContext  from  '../../src/Context/Examen/ExamenContext';
import Swal from 'sweetalert2'
const ExamenesInfo = ({examenI}) => {
     const {evaluar,califiacion} = examenI;
     const {borrarExamen,error,mensajeError,setEeroresandMesagesToNull}  =  useContext(ExamenContext);
        useEffect(()=>{
          if(error==true){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: mensajeError,
                
              })
              setEeroresandMesagesToNull()     
          
          }else if(error==false){
              Swal.fire(
                'Eliminado correctamente',
                ' ',
                'success'
              )
              setEeroresandMesagesToNull()
        }
    },[error])   


   const  borrarUsuarioExamen= (_id)=>{
        let Id={
            id:_id
        }
          console.log('Id------->>>>',_id);
            borrarExamen(Id)
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
                onClick={()=>borrarUsuarioExamen(examenI._id)}
              >
             Borrar
        </button> 
    </td>
      </tr>

     );
}
 
export default ExamenesInfo;