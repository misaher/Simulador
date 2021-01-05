import React,{useState,useContext} from 'react';
import firebase,{FirebaseContext}  from '../firebase/index'; 

const FirebaseProvider =(props) =>{
      const [hello, setHello]= useState('Hola Desde provider')
     return(
      

     <FirebaseContext.Provider
       value={{
           firebase,
           hello
       }}
     >
        
         {props.children}
     </FirebaseContext.Provider>
     
    )

}

export default   FirebaseProvider;

