import React,{useEffect,useState,useContext} from 'react';  
import ExamenContext from '../../../src/Context/Examen/ExamenContext';
import TabDetalles from  './TabDetalles';
import {useParams} from 'react-router-dom';
const Detalles = () => {
     const   {obternerTiposExam,examenes } =  useContext(ExamenContext);
    
      const {id} = useParams();
       console.log("id--->>>>>>>",id);
       useEffect(() => {
       obternerTiposExam(id)
       }, [])
    return ( 
    <>
        <h1 className="text-3xl font-hight mb-10 text-center mt-10 ">Examnes Realizados</h1>
        <div className="m-10 ">
         <table className="table-auto">
             <thead>
                 <tr>
                 <th className="border w-1/2 px-4 py-2">No Preguntas</th>
                 <th className="border w-1/2 px-4 py-2">Calificación</th>  
                 <th className="border w-1/2 px-4 py-2">Estatus</th>   
                 </tr>
             </thead>
   { examenes ?
     <tbody>
 
     {examenes.map(tipos=>(
                     <TabDetalles
                     key={tipos._id}
                      tipos={tipos}
                   />
               ))}

     
   </tbody>
  : null}
     </table>
        </div>    
       
       </>
     );
}
 
export default Detalles;
