import React,{useState,useContext,useEffect,useReducer} from 'react';
import PreguntasContext  from  './PreguntasContext';
import  PreguntasReducer  from  './PreguntasReducer';
import {
  ALTA_PREGUNTA,
  ALTA_PREGUNTAS_MASIVA,
  CONSULTAR_PREGUNTAS,
  CONSULTAR_PREGUNTA,
  CONSULTAR_PREGUNTAS_TIPO,
  UPDATE_PREGUNTAS,
  DELETE_PREGUNTAS,
  SETEARANULL,
  ERROR_PREGUNTA,
  EXITO_PREGUNTA,
  NULL_MENSAJE
}  from '../../types/index'

const PreguntasState = props => {
        const  InitialSate={
              preguntas:[],
              preguntaInfo: null,
              error: null,
              mensaje: ""
        }
        const  [state, dispatch]  = useReducer(PreguntasReducer,InitialSate);
        const url= "http://localhost:4000"
/////////
  
//////////
        const  InsertarPregunta = async(pregunta)=>{
             try{
                
                 let respon=  await fetch(`${url}/api/preguntas`,{
                       method: 'POST',
                       body : JSON.stringify(pregunta),
                       headers:{
                        'Content-Type': 'application/json'
                       }
                 })

                 let status= respon.status ;
                 let mensa= await respon.json()
                 if(status==200){
                    // console.log("Registro Insertado con exito"); 
                       console.log('Examen asignado correctamente .. :) ')
                 }else 
                 if(status==400){
                     console.log('hubo un error');
                 }


              /* dispatch({
                    action:ALTA_PREGUNTA,
                    payload: pregunta
               })*/
              }catch(e){
                
              }

             }
             
            const InsertarPreguntasMasivas= async (preguntasMasivas) =>{
                  try{
                      let respon =  await fetch(`${url}/api/preguntas/masivas`,{
                         method : 'POST',
                         body:  JSON.stringify(preguntasMasivas),
                         headers:{
                             'Content-Type':'application/json'
                         }
                      })
                     let status = respon.status;
                     let mensa= await respon.json()
                     if(status==200){
                        // console.log("Registro Insertado con exito"); 
                           console.log('Resgistro insertado con exito')
                     }else 
                     if(status==400){
                         console.log('hubo un error');
                     }
    
                    
                  }catch(e){

                  }

            }
            const  obtenerPreguntas = async () =>{
                    try{
                       let respon= await fetch(`${url}/api/preguntas`,{
                           method: 'GET',
                            headers:{
                               'Content-Type':'application/json'
                            }
                       })
                        let status = respon.status;
                        let mensa= await respon.json()
                     if(status==200){
                            dispatch({
                                type: CONSULTAR_PREGUNTAS,
                                payload: mensa.preguntas
                           })

                     }else 
                     if(status==400){
                         console.log('hubo un error en la consulta ');
                     }
    
                        
                    }catch(e){
          
                    }

            }
            const obtenerPreguntasTipos = async () =>{
                 console.log('Obtener Preguntas Tipos-------------------->>>>>')
                 const tip={    
                  tipo: "Mondo DB3"
                 }
                   
                   
              try{
                  let respons= await fetch(`${url}/api/preguntas/tipos`,{
                    method: 'GET',
                    body: JSON.stringify(tip),
                     headers:{
                        'Content-Type':'application/json'
                     }
                })
                 let status = respons.status;
                 if(status==200){
                  // console.log("Registro Insertado con exito"); 
                     console.log('Consulta realizada  con exito --->>>>>>>>>>>>>>>')
                     
               }else 
               if(status==400){
                   console.log('hubo un error');
               }
             }catch(e){
   
             }
            }

            const obterPregunta = async (id) =>{
                  console.log('Ok consulta pregunta -->> :)');
                try{
                  let respon =  await fetch(`${url}/api/preguntas/pregunta/${id}`,{
                     method : 'GET',
                     headers:{
                         'Content-Type':'application/json'
                     }
                  })
                 let status = respon.status;
                 let mensa= await respon.json()
                 if(status==200){
                      console.log(mensa.pregunta);
                      dispatch({
                           type: CONSULTAR_PREGUNTA,
                           payload: mensa.pregunta
                      })

                 }else 
                 if(status==400){
                     console.log('hubo un error');
                 }

                
              }catch(e){

              }

            }
             
            
            const editarPregunta = async (id_pregunta)=>{
                     try{
                         let respon = await fetch(`${url}/api/preguntas`,{
                           method: 'PUT',
                           body: JSON.stringify(id_pregunta),
                           headers:{
                              'Content-Type': 'application/json'
                           }
                         })
                          let status = respon.status; 
                          let mensa= await respon.json()
                 if(status==200){
                       console.log('Datos actualoizados con exito');
                  ///Udatate a el estado depsues de que fue exitoso
                   obtenerPreguntas()
                       dispatch({
                           type: CONSULTAR_PREGUNTA,
                           payload: id_pregunta
                      })
                      dispatch({
                         type: EXITO_PREGUNTA, 
                      })

                 }else 
                 if(status==400){
                     console.log('hubo un error');
                     dispatch({
                        type:ERROR_PREGUNTA
                     })

                 }

                     }catch(e){

                     }
            }  

            const borrarPregunta = async (id_pregunta) =>{
                    const {id}= id_pregunta;
                   console.log('Ok id de pregunta-->>>><>>>',id)
                  try{
                      let respon  = await  fetch (`${url}/api/preguntas`,{
                        method : 'DELETE',
                         body : JSON.stringify(id_pregunta),
                         headers:{
                           'Content-Type': 'application/json'
                         }
                         
                      })
                        let status =  respon.status
                        if(status==200){
                           console.log('Datos Eliminados con exito');
                           obtenerPreguntas()
                          dispatch({
                               type: DELETE_PREGUNTAS,
                               payload: id
                          })
    
                     }else 
                     if(status==400){
                         console.log('hubo un error');
                     }
                  }catch(e){
                       
                  }
            }
            const setearAnull = async() =>{
                 try{
                    dispatch({
                       type: SETEARANULL
                    })
                     console.log('Seteado a nulo  :)');
                 }catch(e){
                  console.log('Error  :(');
                 }
            }
            ///setear el mensaje de error 

            const  inicialisarError=async()=>{
                    try{
                       dispatch({
                          type: NULL_MENSAJE
                       })
                    }catch(e){

                    }
            }

    return(
       <PreguntasContext.Provider
         value={{
            preguntas: state.preguntas,
            preguntaInfo:state.preguntaInfo,
            error: state.error,
            mensaje: state.mensaje,
           InsertarPregunta,
           InsertarPreguntasMasivas,
           obtenerPreguntas,
           obtenerPreguntasTipos,
           obterPregunta,
           editarPregunta,
           borrarPregunta,
           setearAnull,
           inicialisarError
         }}
       >
       {props.children}
       </PreguntasContext.Provider>

    )
}
 
export default PreguntasState;