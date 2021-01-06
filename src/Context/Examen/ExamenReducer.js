import {
    CONSULTAR_EXAMEN,
    ERROR_EXAMEN,
    EXITO_EXAMEN,
    NULL_EXAMEN,
    CONSULTAR_TIPOS,
    CONSULTAR_EXAMENES,
    DELETE_EXAMEN,
    SETEARANULL
  }   from '../../../src/types/index'
  export default (state,action)=>{
    switch (action.type) {
        case  CONSULTAR_EXAMEN:
            return{
                  ...state,
                  examen: action.payload
            }
            case  CONSULTAR_EXAMENES:
                return{
                  ...state,
                  examenes: action.payload
                   
                }
           case  CONSULTAR_TIPOS : 
            return {
                  ...state,
                  tiposExam  :action.payload
            }
             case DELETE_EXAMEN :
                 return{
                     ...state,
                     examen: state.examen.filter(exam=>{
                           return  exam._id != action.payload
                     })
                 }
        case  EXITO_EXAMEN:
            return{
               ...state,
               error: false   
            }
       case ERROR_EXAMEN:
           return{
               ...state,
               error:true,
               mensajeError: action.payload
           }
        case  NULL_EXAMEN :
            return{
                ...state,
                error: null,
                mensajeError:""
            }
     
   
    
      
   }
}

