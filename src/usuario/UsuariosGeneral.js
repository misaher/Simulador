
import React,{useState,useEffect,useContext} from 'react';
import UsuariosContext from  '../../src/Context/Usuarios/usuariosContext';
import TabUsuarios  from './TabUsuarios';

const UsuariosGeneral = () => {
     const  {ConsultarUsuarios,usuarios}  = useContext(UsuariosContext);
        useEffect(()=>{
            ConsultarUsuarios()
        },[])
          console.log('ok usuarios-->>>');
          console.log(usuarios);
    return ( 
        <>
     
        <h1 className="text-3xl font-hight mb-4 text-center mt-10">Usuarios :)</h1>
      {usuarios ?
      <div className="m-10">
        <table className="table-auto">
            <thead>
                <tr>
                <th className="border w-1/2 px-4 py-2">Nombre</th>
                <th className="border  w-1/2 px-4 py-2">Correo</th>
                <th className="border w-1/2 px-4 py-2">Ver Deatalles</th>
                <th className="border w-1/2 px-4 py-2">Editar</th>
                <th className="border w-1/2 px-4 py-2">Borrar</th>     
                </tr>
            </thead>

    <tbody>
    {usuarios.map(usuario=>(
                    <TabUsuarios
                    key={usuario._id}
                     usuario={usuario}
                  />
              ))}
            
    
  </tbody>

    </table>
            
            
    </div> : null}          
       </>
     );
}
 
export default UsuariosGeneral;
