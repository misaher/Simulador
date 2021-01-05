import {
   ALTA_TIPO,
CONSULTAR_TIPO,
UPDATE_TIPOS,
DELETE_TIPOS
} from  '../../../src/types/index';

export default (state,action)=>{
   switch(action.type){
     case CONSULTAR_TIPO: 
      return{
         ...state,
          tipos: action.payload
      }
    
   }


}