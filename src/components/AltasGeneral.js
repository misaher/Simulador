import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from  '../firebase/index';
import {Link} from  'react-router-dom';

const AltasGeneral = () => {
        



    return (  
          <> 
          <div className="mt-4 text-center">
             <Link to="/SeccionesAlta" className="bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-5 ml-10  text-white uppercase font-bold"> Alta Modulos</Link>
             <Link to="/AltaPregunta" className="bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-5 ml-10  text-white uppercase font-bold"> Alta preguntas </Link>
             <Link to="/RackPreguntas" className="bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-5 ml-10  text-white uppercase font-bold"> Alta Masiva Preguntas </Link>
             <Link to="/Preguntas" className="bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-5 ml-10  text-white uppercase font-bold"> Preguntas </Link>
             
             </div> 
       
          </>
    );
}
 
export default AltasGeneral;