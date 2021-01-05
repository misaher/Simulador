import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from  '../firebase/index';
import  PreguntasContext from '../../src/Context/Preguntas/PreguntasContext';
import ReactFileReader from 'react-file-reader';
import {Link} from  'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const RackPreguntas = () => {
    const {firebase} = useContext(FirebaseContext);
    const {InsertarPreguntasMasivas} = useContext(PreguntasContext);
    const  [datos,setDatos] = useState();
    const  [tipos,setTipos] = useState([]);
    let    PreguntasArr=[];

    const  handleFiles = files => {
        console.log('Ok carga de archivos ');
         console.log(files)
         var reader = new FileReader();
         reader.onload =  (e) => {
            // Use reader.result
               console.log('ok resultados ----------------------->>>');
               console.log(reader.result);
               console.log('-----------------------------------------<<>>');
              setDatos(
               reader.result
            )
          }
          reader.readAsText(files[0]);   
      }       
          
      const cargarPreguntas = ()=>{
        console.log('ok cargando los archivos ');           
        let  pregun = datos.split('\n')
        console.log(pregun);
         console.log('----------------->>>>>>');
         
        let palabras;
        let usuPregunta;
        let  preguntaE={    
               pregunta:"",
               respuesta:0,
               tipo:"",
               respuestas:""
        }
        let respuestas={

           }
            console.log('Totalo de respuestas----------------------->>>>>>');
            console.log(pregun[0].split(','))
            let tamR  =  pregun[0].split(',');
               console.log(tamR.length-4);

               ///crear una funcion que rellene el objeto con la sustracion de los datos
             const llenarRespuestas=(resp)=>{
                let  i=3; 
                let r="r" 
                let it=0;
                let tama=resp.length-4;
                let respuestas={

                }
                  //console.log("Tama----->>>>",resp.length-4); 
                 // console.log('Las res´puestas--->>>>>>>>');
                for(i=3; i< resp.length; i++){
                   //  console.log("--------->>>>>>",resp[i])   
                     r=`${r}${it+1}`;
                    respuestas[`${r}`]=resp[i];
                    r="r"
                    it++;
                }
                respuestas.tama=tama;
                return  respuestas;
             }
             ///pregun.length
            for (let i=1 ; i<pregun.length; i++){
             usuPregunta=pregun[i].split(',')
             let respuestasFunc=  llenarRespuestas(usuPregunta);
                 //console.log(usuResp);
                 preguntaE.pregunta=usuPregunta[0]
                 preguntaE.respuesta=usuPregunta[1]
                 preguntaE.tipo=usuPregunta[2]
                 preguntaE.respuestas= JSON.stringify(respuestasFunc);

                  console.log(preguntaE);
                   PreguntasArr.push(preguntaE);
                   preguntaE={    
                    pregunta:"",
                    respuesta:0,
                    tipo:"",
                    respuestas:""
               }
                //console.log('***************************RespuestasFunc************');
                //console.log(respuestasFunc);
                // console.log("****************************");
            }
             console.log('----->>>>'); 
              console.log(PreguntasArr);
           
             InsertarPreguntasMasivas(PreguntasArr)
         
 }
   





    ////Formik para validar y cargar...
    


    return (  
          <>
             <h1 className="text-3xl font-hight mb-4 text-center mt-10">Carga Masiva de preguntas</h1>
             
             <div className="flex justify-center mt-10">
                   <div className="w-full max-w-3xl">
                   

                   <div className="mb-4">

                        <ReactFileReader 
                        multipleFiles={false}
                        fileTypes={[".csv"]} 
                        handleFiles={handleFiles}>
                            <button className="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Upload</button>
                        </ReactFileReader>

                   </div>

                   <div className="mb-4">
                       <textarea  className=" form-control w-full h-24" >

                       </textarea>

                   </div>

                       
                   <div className="mb-6">
                                <input 
                                type="submit"
                                onClick={cargarPreguntas}
                                className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                value="Agregar Preguntas"
                                />
                     
                      </div>


                   

                   </div>
             </div>

       
          </>
    );
}
 
export default RackPreguntas;