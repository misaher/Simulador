import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from  '../firebase/index';
import {Link} from  'react-router-dom';


const BusquedaUno = () => {

      const  {firebase} = useContext(FirebaseContext);

      const  [preguntas,setPreguntas]= useState([]);
      
       /////Utilizado para consulta de preguntas
       useEffect(()=>{
        const cargaPreguntas =async()=>{
         const consulta =  await firebase.db.collection('preguntas').onSnapshot(manejarSnapshot);
          
        }
        cargaPreguntas();
  },[])
  
  /////
  function manejarSnapshot(snapshot){
   const  preguntas = snapshot.docs.map(doc =>{
         return{
             id: doc.id,
             ...doc.data()
         }
          
   })
      setPreguntas(preguntas);
     //console.log(preguntas);
  }


       ///(/7)

    return (  
          <>
             <h1 className="text-3xl font-hight mb-4 text-center mt-10">Preguntas :)  </h1>
             <div className="flex justify-center mt-10">
             <ul className="divide-y divide-gray-100">
                   { preguntas.map( (pregunta,index)=>(
                   
                    <article key={index} className="p-4 flex space-x-36">
                       <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                       <p className="text-lg text-black mb-0.5">
                              {index+1} .- {pregunta.pregunta}
                         </p>
                         <p className="text-lg   text-black mb-0.5">
                             <span className="text-lg  font-semibold"> R: </span>  { pregunta.respuesta}
                         </p>
                         <p className="text-lg   text-black mb-0.5">
                             <span className="text-lg  font-semibold"> Tipo:  </span>  { pregunta.tipo}
                         </p>
                        


                       </div>
   
                    </article>
 
                     
                   ))  } 
                    
                                    </ul>
     

             </div>
             
       
          </>
    );
}
 
export default BusquedaUno;