import React,{useContext,useState,useEffect} from 'react';
import PreguntasContext from '../../src/Context/Preguntas/PreguntasContext';
import TipoContext from  '../../src/Context/Tipo/TipoContext';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import {useParams}  from  'react-router-dom'
const EditarPregunta = () => {
     const {obterPregunta,preguntaInfo,editarPregunta,inicialisarError,error,mensaje} = useContext(PreguntasContext);
     const  {tipos}= useContext(TipoContext);
     const {id} = useParams();
     
     ///Validadores  
      const [ errorP,setErrorP] = useState(0);
      /////Estados de respuestas 
      const  [respuestas1,setResp] = useState(); ///para poder resetear  y cambiar los valo0res de los resultados iniciales
      const  [respuestas2,setResp2] = useState();/// valor que entra a ser modificado 
      const [respuestaFinal,setRespuestas]= useState(null); // Valor  final que recibe la respuestas  <<<<<--->>>>>
      
      ///Validador de respuestas--->si las respuestqas ya estan
       const [valrespuestas,setValresp] = useState(false); 
        
         useEffect(() => {
        
            obtenerPreguntaId()        
               
         }, [])
         const   obtenerPreguntaId =() =>{
            obterPregunta(id);
         } 

         useEffect(()=>{
              if(error==true){
                   console.log('ok modificado');
                   Swal.fire(
                    'Pregunta agregada correctamente',
                    ' ',
                    'success'
                  )
                   inicialisarError()
              }else if(error==false){
                console.log('error al modificar .. :(');
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ocurrio un error intente de nuevo!',
                    
                  })
                inicialisarError()
              }
         },[error])
         
          const [tamarespuestas,setTamResp]= useState(null);
          const  [respuestasPre,setRespuestasPr]= useState(null);
             ////Esatdo para editar Preguntas...
       const [preguntasEstado,setEstadoP ]= useState({
        pregunta: "",
        respuesta:"",
        tipo: "",
        respuestas: "",
        id: ""
    })
      let arregloRespuestas=[];
      let  r="r";
      let  respuestasTemporal="";
          //Efect para asignar valores a estado inicial 
           useEffect(() => {
                 if(preguntaInfo){
                    const{ pregunta,_id,respuesta,tipo,respuestas}=  preguntaInfo;
                  setEstadoP({
                    ...preguntasEstado,
                    pregunta: pregunta,
                    respuesta: respuesta,
                    tipo: tipo,
                    id: _id
                  })
                  setRespuestasPr(JSON.parse(respuestas))
                 }
           }, [preguntaInfo])
           ////Efect para cargar tamaño
           useEffect(()=>{
              if(respuestasPre){
                 console.log('ok respuestas')
                 console.log(respuestasPre);
                 setTamResp(respuestasPre.tama)
              }
           },[respuestasPre])   
         // let respuestas;
           useEffect(()=>{
              if(tamarespuestas){
                 let  i;
                 for(i=1;i<=tamarespuestas+1;i++){
                    r= `${r}${i}`;
                    arregloRespuestas.push(r);
                    r="r"
                 }
           

                 arregloRespuestas.map((dat,index)=>{
                     //console.log(respuestasPre[arregloRespuestas[index]]);
                     respuestasTemporal=respuestasTemporal+respuestasPre[arregloRespuestas[index]]+"\n";
                 })
                 console.log('Final respuestas');
                 console.log(respuestasTemporal);
                 setResp(respuestasTemporal)
              }
           },[tamarespuestas])
          let hola= "ok"
     
        
         
      
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
            let rf;
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
         console.log(preguntasRack);
        setEstadoP({
            ...preguntasEstado,
            respuestas: JSON.stringify(preguntasRack),

          })

        } 
    /// Casi todo viene en respuestaFinal
        
    const  respuestasEstado =(e) =>{
            console.log("---->>>>>Ok valores");
             console.log(e.target.value);
             setEstadoP({
                 ...preguntasEstado,
                  [e.target.name]: e.target.value
             })
    }

     const cargarValores =(e) =>{
            e.preventDefault();
        
         console.log('Realizando Update ------->>>>>>>> :)');
           console.log(preguntasEstado);
           editarPregunta(preguntasEstado)
     }
   // }

    return ( <>
           <h1 className="text-3xl text-center font-light mb-4 mt-4">Editar Pregunta</h1>    
           {preguntaInfo ?
           <div className="flex justify-center mt-10">


            <div className="w-full max-w-3xl">
            <form   onSubmit={cargarValores}>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="respuesta">Selecione Respuesta</label>
                
                    <select   
                        className="custom-select"
                            id="respuesta"          
                            name="respuesta"
                            value={preguntasEstado.respuesta}
                            onChange={respuestasEstado}
                            
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




                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipo"> Selecione el Tipo </label>
                
                    <select  
                    className="custom-select"
                    value={preguntasEstado.tipo}
                    name="tipo"
                    onChange={respuestasEstado}
                        >
                                           
                                            {tipos.map( (tip,index)=>(
                                            <option key={index} value={tip.tipo}>{tip.tipo}</option>
                                            ))}
                                        </select>
                       
             



                </div>
                                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pregunta">Pregunta</label>
                <textarea className=" form-control w-full h-64" 
                name="pregunta"
                 value={ preguntasEstado.pregunta} 
                id="pregunta"
                onChange={respuestasEstado}
              
                >



                </textarea>
                
                </div>


               


            
                <div >
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="respuesta">Respuestas</label>
                
                <textarea className=" form-control w-full h-64" 
                id="respuestas"
                onChange={onChanRes}
                value={respuestas1}
                >
                 


                </textarea> 
                {errorP ?(
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                <p className="font-bold">Hubo un error:</p>
                    <p>Por favor  llene todos los campos</p>
                </div>

                ): null}


                </div>

            
                

                <div className="mb-6">
                <input 
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                value="Guardar Pregunta Editada"
                />
            </div>
            </form>

            </div>
            
            </div>
    : null}
    </> );
}
 
export default EditarPregunta;