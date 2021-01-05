import React from 'react';
import { act } from 'react-dom/test-utils';
import {
    ALTA_USUARIO,
    ALTA_USUARIO_MASIVA,
    CONSULTAR_USUARIOS,
    UPDATE_USUARIO,
    DELETE_USUARIO

} from '../../../src/types/index'

export default (state,action)=>{
  switch (action.type){

    case  CONSULTAR_USUARIOS:

    return{
         ...state,
         usuarios: action.payload
    }
    case  DELETE_USUARIO:
        return{
            ...state,
             usuarios: state.usuarios.filter(usuario=>{
                  return  usuario.email != action.payload
             })
        }


  }



}