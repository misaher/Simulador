import React,{useContext,useEffect,useState} from 'react';
import ExamenContext  from '../Context/Examen/ExamenContext';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import {useParams}  from  'react-router-dom';
const AsignarExamen = () => {
      const {asignarExamen,error,mensajeError,setEeroresandMesagesToNull} =useContext(ExamenContext) ;
      const   {id} = useParams();
       const  imfoId = JSON.parse(id)
       let id2 = imfoId.id;
      const   {email}  =imfoId;
      useEffect(()=>{
              if(error==true){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: mensajeError,
                    
                  })
                  setEeroresandMesagesToNull()     
               
              }else if(error==false){
                  Swal.fire(
                    'Dato agregado correctamente',
                    ' ',
                    'success'
                  )
                  setEeroresandMesagesToNull()
            }
      },[error])
    const formik =  useFormik({
        initialValues:{
            idUsuario:id2,
            email: email,
            nombre_eval:'',
            evaluar:true,
            numero_pre:'',
            califiacion:0
 
        },
 
         validationSchema : Yup.object({
            nombre_eval: Yup.string()
              .required('El nombre es obligatorio'),
              numero_pre: Yup.number()
              .min(0,'la cantidad debe ser agregado')
              .required('la cantidad debe ser agregada') 
              
         }),
 
        onSubmit:datos=>{
          console.log(datos);
        // agregarMaterialesN(datos);
          asignarExamen(datos)
        }
   
  })
    
 
    return ( 
        <>
       <h1 className="text-3xl text-center font-light mb-4 mt-5">Asignar   Examen</h1> 
                <div className="flex justify-center mt-10">

            <div className="w-full max-w-3xl">
            <form   onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre Examen</label>

                <input 
                    className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline-none focus:outline-none"
                    id="nombre_eval"
                    type="text"
                    placeholder="Nombre Examen"
                    onChange={formik.handleChange}
                    value={formik.values.nombre_eval}
                    onBlur={formik.handleBlur}
                />

                </div>

                {formik.touched.nombre_eval && formik.errors.nombre_eval? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.nombre_eval}</p>
                </div>

                ): null}


                <div className="mb-4">
            



                </div>
                                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cantidad">Cantidad de pregutas para el Examen </label>

                <input 
                    className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline-none focus:outline-none"
                    id="numero_pre"
                    type="number"
                    placeholder="0"
                    min="0"
                    onChange={formik.handleChange}
                    value={formik.values.numero_pre}
                    onBlur={formik.handleBlur}
                />
                </div>


                {formik.touched.numero_pre && formik.errors.numero_pre? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.numero_pre}</p>
                </div>

                ): null}


            
                
                <input 
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                value="Agregar Evaluacion"
                />

            </form>

            </div>
            
            </div>
      </>
     );
}
 
export default AsignarExamen;