import React,{useContext,useState,useEffect,useReducer} from 'react';
import TipoContext from  './TipoContext';
import  TiposReducer  from './TipoReducer';
        import {
            ALTA_TIPO,
        CONSULTAR_TIPO,
        UPDATE_TIPOS,
        DELETE_TIPOS
        } from  '../../../src/types/index';
const TipoState = props => {
    const  inicialState ={
           tipos:[],
           errores: false,
           errormsg: ""
    }   
    const url= "http://localhost:4000"
      const [state,dispatch] = useReducer(TiposReducer,inicialState);
       useEffect(() => {
        consultarTipos()     
       }, [])

     const  insertarTipo = async(tipo)=>{
       try{
         let respon=  await  fetch(`${url}/api/tipos`,{
            method : 'POST',
            body:  JSON.stringify(tipo),
            headers:{
                'Content-Type':'application/json'
            }
         })

         let status = respon.status;
                  let mensa= await respon.json()
                  if(status==200){
                        console.log('Consulta realizada con extito ------>>>> :) ')
                         console.log(mensa);
                         /*dispatch({
                             type: CONSULTAR_TIPO,
                             payload: mensa.tipos
                        })*/

                  }else 
                  if(status==400){
                      console.log('hubo un error en la consulta :(');
                  }

      }catch(e){
        console.log('Error al insertar :( ');
      }

     }


         const consultarTipos  =async() =>{
            try{
             let  respon=  await  fetch(`${url}/api/tipos`,{
                     method: 'GET',
                     headers:{
                       'Content-Type': 'application/Json'
                     }
                 })
                  let status = respon.status;
                  let mensa= await respon.json()
                  if(status==200){
                        console.log('Consulta realizada con extito ------>>>> :) ')
                         console.log(mensa);
                         dispatch({
                             type: CONSULTAR_TIPO,
                             payload: mensa.tipos
                        })

                  }else 
                  if(status==400){
                      console.log('hubo un error en la consulta ');
                  }
                 ///CONSULTAR_TIPO
            }catch(e){

            }
         }

       

    return ( 
   <TipoContext.Provider
      value={{
         tipos: state.tipos,
        consultarTipos,
        insertarTipo
      }}
   >
    
      {props.children}
   </TipoContext.Provider>
     );
}
 
export default TipoState;