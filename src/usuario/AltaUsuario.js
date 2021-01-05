import React,{useState,useEffect,useContext} from 'react';
import UsuariosContext from  '../../src/Context/Usuarios/usuariosContext';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'


const AltaUsuario = () => {
  const  {InsertarUsuario}  = useContext(UsuariosContext);
   
    const formik =  useFormik({
        initialValues:{
            
                 nombre:'',
                 email:'',
    
 
        },
      
         validationSchema : Yup.object({
              nombre: Yup.string()
              .required('Favor de agregar el nomrbre'),
              email: Yup.string()
              .required('Favor de agregue el correo'),
                
         }),
 
        onSubmit:usuario=>{
          //console.log(tipo);
                  
                 try{        
                   
                  InsertarUsuario(usuario);
                          Swal.fire(
                            'Dato agregado correctamente',
                            ' ',
                            'success'
                          )
                          
                 }  catch(e){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ocurrio un error intente de nuevo!',
                        
                      })

                 }
         // agregarMaterialesN(datos);
         
        }
   
  })

    return ( 
    <>
     
     <h1 className="text-3xl font-hight mb-4 text-center mt-10">Altas Usuarios </h1>
     <div className="flex justify-center mt-10">
     <div className="w-full max-w-3xl">
     <form   onSubmit={formik.handleSubmit}>
                   <div className="mb-4">
                              
                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Nombre Usuario</label>

                                <input 
                                className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline-none focus:outline-none"
                                id="nombre"
                                placeholder="Nombre"
                              
                                onChange={formik.handleChange}
                                value={formik.values.nombre}
                                onBlur={formik.handleBlur}
                                />

                                {formik.touched.nombre && formik.errors.nombre? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.nombre}</p>
                                </div>

                                ): null}

                   </div>

                   <div className="mb-4">
                              
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Correo</label>
           
                                           <input 
                                           className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline-none focus:outline-none"
                                           id="email"
                                           placeholder="correo@"
                                         
                                           onChange={formik.handleChange}
                                           value={formik.values.email}
                                           onBlur={formik.handleBlur}
                                           />
           
                                           {formik.touched.email && formik.errors.email? (
                                           <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                           <p className="font-bold">Hubo un error:</p>
                                           <p>{formik.errors.email}</p>
                                           </div>
           
                                           ): null}
           
                              </div>
                   <div className="mb-6">
                                <input 
                                type="submit"
                                className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                value="Agregar Usuario"
                                />
                      </div>


                   </form>
                   </div>
         </div> 
             
    </>

     );
}
 
export default AltaUsuario;
