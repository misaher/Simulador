import React,{useState,useEffect,useContext} from 'react';
import ExamenContext  from  '../Context/Examen/ExamenContext';
import {useParams} from 'react-router-dom';
import {Link}  from  'react-router-dom';
import   ExamenesInfo from './ExamenesInfo';
const InformacionUsuario = () => {
    console.log('OK editar-->>>>>> :)');
   const {id}  = useParams();
   const   {editarExamen,borrarExamen,error,mensajeError,setEeroresandMesagesToNull,obtenerExamen,examen} = useContext(ExamenContext)
   const {nombre,email,_id} = JSON.parse(id);
   console.log(id);
   useEffect(()=>{
    if(error==true){
         console.log('Error :(') 
         setEeroresandMesagesToNull()
    }else if(error==false){
      console.log('Ok exitoso :(')
      setEeroresandMesagesToNull()
  }
  },[error])

   useEffect(()=>{
      obtenerExamen(_id)
   },[])

    return ( 
         <>  
           <h1 className="text-3xl font-hight mb-10 text-center mt-10 ">Usuario</h1>
             <div className="flex justify-center m-10">
             <div className="p-10 w-4/5 mb-4  flex space-x-2  justify-between  border-4 border-light-blue-500 border-opacity-0">
                <Link to={`/AsignarExamen/${_id}`} className="bg-blue-800 hover:bg-blue-700, inline-block  p-2   text-white uppercase font-bold">Asignar Examen</Link>
                </div>
                </div>
           <div className="flex justify-center m-10">   
           
           <div className="p-10 w-4/5 mb-4  flex space-x-2  justify-between  border-4 border-light-blue-500 border-opacity-0">
            
           <div className=" inline-block">
                  <h1 className="  text-3xl text-black mb-1.5"><span className="text-base">Nombre:</span> {nombre} </h1>
                     
                     </div>
                 <div className=" inline-block">
                 <h1 className="  text-3xl text-black mb-1.5"><span className="text-base">Correo:</span> {email} </h1>
                      
                 </div>        
                     
               </div>
               

           </div>
           <div className="flex justify-center m-10">
                 <div>  <h1 className="text-lg">Examenes </h1> </div>

           </div>
             
                {examen ?
              <div className="m-10">
              <table className="table-auto">
                  <thead>
                      <tr>
                      <th className="border w-1/2 px-4 py-2">Nombre Evaluacion</th>
                      <th className="border  w-1/2 px-4 py-2">Calificación</th>
                      <th className="border w-1/2 px-4 py-2">Estatus</th>
                      <th className="border  w-1/2 px-4 py-2">No Preguntas</th>
                      <th className="border w-1/2 px-4 py-2">Editar</th>
                      <th className="border w-1/2 px-4 py-2">Borrar</th>     
                      </tr>
                  </thead>

          <tbody>
          {examen.map(examenI=>(
                          <ExamenesInfo
                          key={examenI._id}
                          examenI={examenI}
                        />
                    ))}
                  
          
        </tbody>

          </table>
                  
                  
          </div> : <div>  <h1 className="text-lg">Sin examamenes echos o pendientes</h1> </div> }     
           


         
         </>
     );
}
 
export default InformacionUsuario;