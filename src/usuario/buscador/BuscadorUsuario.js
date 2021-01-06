import React,{useState,useContext,useEffect} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import UsuariosContext  from '../../../src/Context/Usuarios/usuariosContext';
     const BuscadorUsuario = () => {
          const   {filtrarUsuarios} = useContext(UsuariosContext); 

                const formik =  useFormik({
                    initialValues:{
                        buscar:''
                    },


                onSubmit:(datos) =>{
                    //gFiltrado(1);
                    console.log(datos.buscar.toLowerCase());
                    filtrarUsuarios(datos.buscar.toLowerCase())
                    
                }
            
                
                })
            
               /* if(vfiltrado===1){
                        console.log('Ok Filtrado echo');
                }else{
                        console.log('Sin filtrar aun');
                }*/

                

    return ( 
        <>
             <div>
                <form className="w-full max-w-sm m-auto"
                  onSubmit={formik.handleSubmit}
                >
                        <div className="flex items-center border-b border-teal-500 py-2">
                            <input id="buscar"className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Buscar Usuarios" aria-label="Full name" 
                               onChange={formik.handleChange}

                            />
                               
                            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit"
                            
                            >
                            Buscar
                            </button>
                        </div>
                        </form> 

                </div>
        </>
    );
}
 
export default BuscadorUsuario;