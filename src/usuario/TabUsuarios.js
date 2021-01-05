import React,{useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import UsuariosContext from  '../../src/Context/Usuarios/usuariosContext';

const TabUsuarios = ({usuario}) => {
     const {EliminarUsuario} = useContext(UsuariosContext);
      const {nombre,email,_id} = usuario;
      const  nuevoUsuario ={
           nombre:nombre,
           email:email,
           _id:_id
      }
       const datosUsuario= JSON.stringify(nuevoUsuario)
       const   borrarUsuario= (email)=>{
           const dato ={
                     email:email
           }
         EliminarUsuario(dato);
         console.log(dato);
       }

    return (  
        <tr>
        <td className="border px-4 py-2">{usuario.email}</td>
         <td className="border px-4 py-2">{usuario.nombre}</td>
         <td className="border px-4 py-2">
        <Link to={`/InformacionUsuario/${datosUsuario}`} >
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                 Ver 
        </button>  </Link>
    </td>
        <td className="border px-4 py-2">
        <Link to={`/EditarUsuario/${datosUsuario}`} >
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Editar
        </button>  </Link>
    </td>
    <td className="border px-4 py-2">
        
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={()=>borrarUsuario(usuario.email)}
              >
             Borrar
        </button> 
    </td>
      </tr>

    );
}
 
export default TabUsuarios;