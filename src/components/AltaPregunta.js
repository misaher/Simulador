import React,{useContext,useState,useEffect} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import PreguntasContext from  '../Context/Preguntas/PreguntasContext';
import TipoContext  from '../Context/Tipo/TipoContext';
const AltaPregunta = () => {
  
     const  {InsertarPregunta}  = useContext(PreguntasContext)  
      const  {tipos}= useContext(TipoContext);
     
 
     /////Estados de respuestas 
     const  [respuestas,setResp] = useState(); ///para poder resetear  y cambiar los valo0res de los resultados iniciales
     const  [respuestas2,setResp2] = useState();/// valor que entra a ser modificado 
     const [respuestaFinal,setRespuestas]= useState(null); // Valor  final que recibe la respuestas  <<<<<--->>>>>
     
     ///Validador de respuestas, si el campo no esta vacio 
      const [valrespuestas,setValresp] = useState(false); 

    



  /////// seteando Respuestas
     const  onChanRes= e =>{
           let dato=e.target.value;
                 setResp(dato)
                   dato = dato.trim();
               //  console.log('dato-->>>',dato.length);
              if(dato.length>0){
                setResp2(dato);
              }
   
     }
    //////
    useEffect(()=>{
      if(respuestas2){
         respuestasDos()
       }
    },[respuestas2]);

    /////////
        const respuestasDos =() =>{
          let d = new Date();
          //d.getFullYear()+d.getDay()+d.getMinutes()
         // let f= d.getMilliseconds()+""+d.getFullYear()+""+d.getDay()+""+d.getMinutes();
        // console.log(f);
          let  form;  
          let r="r"
          let v= "v"
          let  preguntasRack={
          }

            form= respuestas2.split('\n');
              preguntasRack.tama=form.length-1;
           for(let i=0; i< form.length; i++){
                    r=`${r}${i+1}`;
                    v= `${v}${i+1}`;
                //   console.log(r);
                    preguntasRack[`${r}`] = form[i];
                    r="r"
                  
            }
        
        setRespuestas(preguntasRack);
     
    } 


    ////////
  
  

     ///Validación  he inserción de datos con formik    
           
    const formik =  useFormik({
        initialValues:{
            respuesta:0,
               tipo:'',
               pregunta:'',
               

 
        },
          
 
         validationSchema : Yup.object({
          respuesta: Yup.string()
              .required('Agrege la respuesta no se indiota'),
               tipo: Yup.string()
              .required('Tipo es obligatorio'),
              pregunta: Yup.string()
              .required('la pregunta debe ser agregada') ,
                  
         }),
 
        onSubmit:datos=>{
             if(!respuestaFinal){ /// Si no se ha agregado respuestas
              setValresp(true)
             }else{ // si ya hay 

              setValresp(false)
              datos.respuestas=JSON.stringify(respuestaFinal);
             console.log(datos);
               console.log(respuestaFinal);
               try{        
                           
                InsertarPregunta(datos)
                
                  Swal.fire(
                    'Pregunta agregada correctamente',
                    ' ',
                    'success'
                  )
                  setResp(" ")
                 
                  
                  console.log('Ok registrados con exito');

        }  catch(e){
            console.log('Eror !!!!!  :(');
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Ocurrio un error intente de nuevo!',
              
            })

        }
             }
            
                  
                 
  
         
        }
   
  })
       
 


    return (
         <> 

        <h1 className="text-3xl text-center font-light mb-4 mt-4">Agregando  Preguntas</h1>    

  <div className="flex justify-center mt-10">


 <div className="w-full max-w-3xl">
   <form   onSubmit={formik.handleSubmit}>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="respuesta">Selecione Respuesta</label>
        
            <select   
              className="custom-select"
                 id="respuesta"          
                 name="respuesta"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                                >
                                  <option value=" ">Selecione respuesta</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option> 
                                  <option value="5">5</option>
                                  <option value="4">6</option> 
                               </select>

     </div>

     {formik.touched.respuesta && formik.errors.respuesta? (
       <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
          <p className="font-bold">Hubo un error:</p>
         <p>{formik.errors.respuesta}</p>
       </div>

     ): null}


     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipo"> Selecione el Tipo </label>
       
          <select  
           className="custom-select"
           name="tipo"
           onChange={formik.handleChange}
             onBlur={formik.handleBlur}>
                                 <option key="VYHVDD" value="">Seleciona el tipo</option>
                                 {tipos.map( (tip,index)=>(
                                 <option key={index} value={tip.tipo}>{tip.tipo}</option>
                                 ))}
                              </select>
       


            
     {formik.touched.tipo && formik.errors.tipo? (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
        <p className="font-bold">Hubo un error:</p>
         <p>{formik.errors.tipo}</p>
       </div>

     ): null}



     </div>
                     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pregunta">Pregunta</label>
       <textarea className=" form-control w-full h-64" 
        value={formik.values.pregunta}
        id="pregunta"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
      >



       </textarea>
      
     </div>


     {formik.touched.pregunta && formik.errors.pregunta? (
       <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
       <p className="font-bold">Hubo un error:</p>
         <p>{formik.errors.pregunta}</p>
       </div>

     ): null}


    
      <div >
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="respuesta">Respuestas</label>
       
       <textarea className=" form-control w-full h-64" 
        id="respuestas"
       onChange={onChanRes}
       value={respuestas}
       >



       </textarea> 
     {valrespuestas ?(
       <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
       <p className="font-bold">Hubo un error:</p>
         <p>Por favor agregue las respuestas</p>
       </div>

     ): null}


     </div>
 
    
      

      <div className="mb-6">
       <input 
       type="submit"
       className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
       value="Agregar Pregunta"
       />
   </div>
   </form>

 </div>
    
</div>
         </>
      );
}
 
export default AltaPregunta;