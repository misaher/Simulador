import React,{useReducer } from 'react';
import UsuariosContext from './usuariosContext';
import UsuarioReducer from './usuarioReducer';
import {
    ALTA_USUARIO,
    ALTA_USUARIO_MASIVA,
    CONSULTAR_USUARIOS,
    UPDATE_USUARIO,
    DELETE_USUARIO

} from '../../../src/types/index'

const UsuarioState = props =>{
     const url= "http://localhost:4000"
    ////
    const  initialState  ={
         usuarios:[],
         error: false,
         msgerror: ""
    }

 const  [state,dispatch] = useReducer(UsuarioReducer,initialState);
    
  const InsertarUsuario = async usuario=>{
        try{
            let respon = await fetch(`${url}/api/usuarios`, {
                method: 'POST', // or 'PUT'
                 body: JSON.stringify(usuario), // data can be `string` or {object}!
                 headers:{
                   'Content-Type': 'application/json'
                 }
                 })

                 let status= respon.status ;
                let mensa= await respon.json()
                    if(status==200){
                       // console.log("Registro Insertado con exito"); 
                          console.log('Resgistro insertado con exito')
                    }else 
                    if(status==400){
                        console.log('hubo un error');
                    }


        }catch(e){
              console.log("error  :( ")
        }

  }
   const  ConsultarUsuarios = async() =>{
           try{
            let respon = await fetch(`${url}/api/usuarios`, {
                method: 'GET', // or 'PUT'
                 headers:{
                   'Content-Type': 'application/json'
                 }
                 })    
                  console.log('Ok respuesta -->')
                  console.log(respon);
                 let status= respon.status ;
                 let mensa= await respon.json()
                 if(status==200){
                    // console.log("Registro Insertado con exito"); 
                       console.log('Datos consultados  con exito')
                 }else 
                 if(status==400){
                     console.log('hubo un error');
                 }
                  console.log('mensaje--->>>>>>>>');
                  console.log(mensa.usuarios);
                    dispatch({
                        type:CONSULTAR_USUARIOS,
                        payload:mensa.usuarios
                    })

           }catch(e){
            console.log("error  :( ")

           }
   }
  
    const UpdateUsuario =async(usuario) =>{
           console.log('Ok entrado a Udtae de usuario')
             try{

                let respon = await fetch(`${url}/api/usuarios`, {
                    method: 'PUT', // or 'PUT'
                     body: JSON.stringify(usuario), // data can be `string` or {object}!
                     headers:{
                       'Content-Type': 'application/json'
                     }
                     })
                     let status= respon.status ;
                 let mensa= await respon.json()
                 if(status==200){
                    ConsultarUsuarios()
                       console.log('Datos actulizados   con exito')
                 }else 
                 if(status==400){
                     console.log('hubo un error');
                 }

             }catch(e){
                 console.log('Hubo un error  :( ');
             }
    }
     const CargaMasivaUsuarios = async (usuariosMas) =>{
                try{
                    
                let respon = await fetch(`${url}/api/usuarios/masivos`, {
                    method: 'POST', // or 'PUT'
                     body: JSON.stringify(usuariosMas), // data can be `string` or {object}!
                     headers:{
                       'Content-Type': 'application/json'
                     }
                     })
                     let status= respon.status ;
                 let mensa= await respon.json()
                 if(status==200){
                    // console.log("Registro Insertado con exito"); 
                       console.log('Datos cargados  con exito :) ')
                 }else 
                 if(status==400){
                     console.log('hubo un error');
                 }

                    
                }catch(e){
                    console.log('hubo un error');
                }
     }
    
    const  EliminarUsuario= async(useremail)=>{
          const {email} = useremail;
        try{
            let respon = await fetch(`${url}/api/usuarios`, {
                method: 'DELETE', // or 'PUT'
                 body: JSON.stringify(useremail), // data can be `string` or {object}!
                 headers:{
                   'Content-Type': 'application/json'
                 }
                 })
                 let status= respon.status ;
             let mensa= await respon.json()  
             if(status==200){
                    dispatch({
                          type: DELETE_USUARIO ,
                          payload: email
                    })
                // console.log("Registro Insertado con exito"); 
                   console.log('Usuario actualizado con exito')
             }else 
             if(status==400){
                 console.log('hubo un error al actulizar ');
             }  
        
        }catch(e){
            console.log('Hubo un error  :( ');
        }

    } 

   return(
   <UsuariosContext.Provider
      value={{
         usuarios: state.usuarios,
        InsertarUsuario,
        ConsultarUsuarios,
        UpdateUsuario,
        EliminarUsuario,
        CargaMasivaUsuarios
      }}
    >
     {props.children}
     
  </UsuariosContext.Provider>
   )

}
export default  UsuarioState;