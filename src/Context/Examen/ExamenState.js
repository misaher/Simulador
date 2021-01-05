import React,{useState,useContext,useEffect,useReducer} from 'react';
import  ExamenContext  from './ExamenContext';
import  ExamenReducer  from  './ExamenReducer';
    
import {
    CONSULTAR_EXAMEN,
    ERROR_EXAMEN,
    EXITO_EXAMEN,
    NULL_EXAMEN,
    CONSULTAR_TIPOS,
    CONSULTAR_EXAMENES,
    SETEARANULL
  }  from '../../../src/types/index'

const ExamenState = props => {
     const InitialState={
              examenes:[],
              examen: null,
              tiposExam: [],
               error: null,
               mensajeError: ""

     } 
     const url= "http://localhost:4000"
   //const  [state,dispatch] = useReducer(PreguntasReducer,InitialSate);
     const  [state,dispatch] = useReducer(ExamenReducer,InitialState);

     const asignarExamen = async (examen)=>{
                 console.log('Ok iniciando Insercion')
                 let status 
                 const {nombre_eval} = examen;
                 let nombreEx = {
                      nombre: nombre_eval
                 }
             try{   ///api/nombreexam
                   let responNombre = await  fetch(`${url}/api/nombreexam`,{
                        method: 'POST',
                        body:   JSON.stringify(nombreEx),
                        headers:{
                            'Content-Type': 'application/json'
                        }   
                  })    
                    status = responNombre.status;
                       if(status ==300||status  == 200){
                            let respon = await fetch(`${url}/api/revision`,{
                                method: 'POST',
                                body:   JSON.stringify(examen),
                                headers:{
                                    'Content-Type': 'application/json'
                                }   
                           })    
                            
                            status= respon.status;
                             if(status==200){
                                console.log("Agregado correctamente--------->>>>>  :)");
                                  dispatch({
                                    type: EXITO_EXAMEN
        
                                  })
                           }else if(status==400){
                            let mensa= await respon.json()
                            console.log("Error al agregar :(");
                              dispatch({
                                   type: ERROR_EXAMEN,
                                   payload: mensa.msg
                              })
                             console.log(mensa.msg)
                           }
                       }else{
                        dispatch({
                            type: ERROR_EXAMEN,
                            payload: "Error al dar de alta evaluación"
                       })
                       }
                       


             }catch(e){
                
             }
     }
      const obternerTiposExam = async(nombre) =>{
            let status;
            try{
                let respon = await fetch(`${url}/api/revision/nombre/${nombre}`,{
                    method: 'GET',
                    headers:{
                        'Content-Type' : 'aplication-json'
                    }
              }) 
              status= respon.status;
               if(status==200){
                  let mensa= await respon.json()
                  
                  console.log("Datos ok--------->>>>>  :)");
                  console.log(mensa);
                    dispatch({
                        type: CONSULTAR_EXAMENES,
                        payload:mensa.tiporevision
                    })
                    dispatch({
                      type: EXITO_EXAMEN

                    })
             }else if(status==400){
              let mensa= await respon.json()
              console.log("Error al agregar :(");
                dispatch({
                     type: ERROR_EXAMEN,
                     payload: mensa.msg
                })
               console.log(mensa.msg)
             }
                    
                }catch(e){

                }
      }
      const obternerTipos = async() =>{
        /// revision/nombre/    Evaluación Misael Today 2
        
        let status;
        try{
            let respon = await fetch(`${url}/api/nombreexam`,{
                method: 'GET',
                headers:{
                    'Content-Type' : 'aplication-json'
                }
          }) 
          status= respon.status;
           if(status==200){
              let mensa= await respon.json()
              
              console.log("Datos ok--------->>>>>  :)");
              console.log(mensa);
                dispatch({
                    type: CONSULTAR_TIPOS,
                    payload:mensa.nombresExam
                })
                dispatch({
                  type: EXITO_EXAMEN

                })
         }else if(status==400){
          let mensa= await respon.json()
          console.log("Error al agregar :(");
            dispatch({
                 type: ERROR_EXAMEN,
                 payload: mensa.msg
            })
           console.log(mensa.msg)
         }
                
            }catch(e){

            }
  }

     const obtenerExamen = async(email)=>{
                 let status
                  try{
                    let respon = await fetch(`${url}/api/revision/${email}`,{
                          method: 'GET',
                          headers:{
                              'Content-Type' : 'aplication-json'
                          }
                    }) 
                    status= respon.status;
                     if(status==200){
                        let mensa= await respon.json()
                        console.log("Datos ok--------->>>>>  :)");
                          dispatch({
                              type: CONSULTAR_EXAMEN,
                              payload:mensa.revisiones
                          })
                          dispatch({
                            type: EXITO_EXAMEN

                          })
                   }else if(status==400){
                    let mensa= await respon.json()
                    console.log("Error al agregar :(");
                      dispatch({
                           type: ERROR_EXAMEN,
                           payload: mensa.msg
                      })
                     console.log(mensa.msg)
                   }
                   
                   

                  }catch(e){
                      console.log('Error ')
                  }
     }
     const editarExamen =  async(examen) =>{
          try{

          }catch(e){

          }
     }
    
        const  borrarExamen = async (id_examen)=>{
              try{

              }catch(e){
   
              }
        }
     
      const  setEeroresandMesagesToNull =() =>{
               dispatch({
                     type: NULL_EXAMEN
                }) 
      } 
      
    return (  
   <ExamenContext.Provider
     value={{
        examenes: state.examenes,
        examen: state.examen,
        error: state.error,
        tiposExam : state.tiposExam,
        mensajeError : state.mensajeError,
        asignarExamen,
        editarExamen,
        borrarExamen,
        setEeroresandMesagesToNull,
        obtenerExamen,
        obternerTipos,
        obternerTiposExam

     }}
   >
   
   {props.children}
   </ExamenContext.Provider>
    );
}
 
export default ExamenState;