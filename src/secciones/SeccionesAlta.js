import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from  '../firebase/index';
import TipoContext  from  '../../src/Context/Tipo/TipoContext';
import {Link} from  'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'

const SeccionesAlta = () => {
     const {firebase} = useContext(FirebaseContext);
     const {insertarTipo}  = useContext(TipoContext);
     const [datos,setDatos] = useState();

    const formik =  useFormik({
        initialValues:{
                tipo:'',
        },
 
         validationSchema : Yup.object({
              tipo: Yup.string()
              .required('Favor de agregar el modulo'),
                
         }),
 
        onSubmit:tipo=>{
              console.log('OK Tipo------>>>>>');
             console.log(tipo);
              
                 try{        
                   

                  insertarTipo(tipo);
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
                        console.log('El error e-->')
                        console.log(e);

                 }
         // agregarMaterialesN(datos);
         
        }
   
  })
       
   

    return (  
          <>
             <h1 className="text-3xl font-hight mb-4 text-center mt-10">Alta Modulo</h1>
             <div className="flex justify-center mt-10">
                   <div className="w-full max-w-3xl">
                   <form   onSubmit={formik.handleSubmit}>
                   <div className="mb-4">
                              
                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Nombre Modulo</label>

                                <input 
                                className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline-none focus:outline-none"
                                id="tipo"
                                placeholder="Agregar Modulo"
                              
                                onChange={formik.handleChange}
                                value={formik.values.tipo}
                                onBlur={formik.handleBlur}
                                />

                                {formik.touched.tipo && formik.errors.tipo? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.tipo}</p>
                                </div>

                                ): null}

                   </div>
                   <div className="mb-6">
                                <input 
                                type="submit"
                                className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                value="Agregar Modulo"
                                />
                      </div>


                   </form>

                   </div>
             </div>

       
          </>
    );
}
 
export default SeccionesAlta;