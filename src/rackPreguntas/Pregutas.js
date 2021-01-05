import React,{useContext,useState,useEffect} from 'react';
import {Link} from  'react-router-dom';
import PreguntasContext from  '../../src/Context/Preguntas/PreguntasContext';
import TabPreguntas from './TabPreguntas';
const Preguntas = () => {
    const {obtenerPreguntas,preguntas,setearAnull} = useContext(PreguntasContext);
       useEffect(() => {
            console.log('Ok preuguntas ---------->>>>>>>>>>>>>>')
        obtenerPreguntas()
        setearAnull()
       }, [])
    return ( 
        <>
        <h1 className="text-3xl font-hight mb-4 text-center mt-10">Preguntas</h1>
        <div className="m-10">
              <table className="table-fixed">
               
               <thead>
                   <tr>
                   <th className="border w-1/2 px-4 py-2">Pregunta</th>
                   <th className="border w-1/2 px-4 py-2">Ver</th>
                   <th className="border w-1/2 px-4 py-2">Editar</th>
                   <th className="border w-1/2 px-4 py-2">Borrar</th>
                   </tr>

               </thead>
               <tbody>
                   {preguntas.map(preguntaL=>(
                       <TabPreguntas
                          key = {preguntaL._id}
                          preguntaL={preguntaL}
                       />
                   ))}

               </tbody>

               </table>


            </div>


  
     </>

     );
}
 
export default Preguntas;