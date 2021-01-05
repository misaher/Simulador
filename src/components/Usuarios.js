import React,{useState,useEffect,useContext} from 'react';

import {Link} from  'react-router-dom';

const Usuarios = () => {
        


    return (  
          <>
             <h1 className="text-3xl font-hight mb-4 text-center mt-10">Administrar Usuarios </h1>
             
             <div className="mt-4 text-center">
             <Link to="/AltaUsuario" className="bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-5 ml-10  text-white uppercase font-bold"> Alta Usario</Link>
             <Link to="/AltasMasivas" className="bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-5 ml-10  text-white uppercase font-bold"> Alta Masiva de usuarios</Link>
             <Link to="/UsuariosGeneral" className="bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-5 ml-10  text-white uppercase font-bold">Usuarios</Link>
         
             </div> 
       
        
          </>
    );
}
 
export default Usuarios;