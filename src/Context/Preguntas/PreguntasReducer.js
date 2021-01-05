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

export default (state,action)=>{
       switch (action.type) {
        case   CONSULTAR_PREGUNTAS :

        return{
            ...state,
            preguntas: action.payload

        }
        case CONSULTAR_PREGUNTA: 
         return{
           ...state,
           preguntaInfo: action.payload
         }

         case SETEARANULL :
            return{
                ...state,
                preguntaInfo: null
            } 
         case DELETE_PREGUNTAS:
            return{
                ...state,
                preguntas: state.preguntas.filter(pregunta=>{
                   return  pregunta._id != action.payload
                })
            } 
          case NULL_MENSAJE :
           return{
               ...state,
                error: null
           }
         case EXITO_PREGUNTA:
            return{
                ...state,
                error: true
            }

        case  ERROR_PREGUNTA:
          return{
             state,
             error: false
          }

       }


}