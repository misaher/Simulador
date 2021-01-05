import  app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from './config';

class Firebase{
      constructor(){
            if(!app.apps.length){
                 app.initializeApp(firebaseConfig);
            }
            this.aut = app.auth();
            this.db = app.firestore();
           }
       
            async registrar(){
                 try{
       
              const  nuevoUsuario = await app.auth().createUserWithEmailAndPassword();
                   return   "Registro Exitoso"
                  }catch (e){
                       return e
                  }
        }  
       


}
   const firebase = new Firebase();

export default firebase;
 