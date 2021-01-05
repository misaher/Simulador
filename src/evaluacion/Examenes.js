import React,{useEffect,useState,useContext} from 'react';  
import  ExamenContext  from '../../src/Context/Examen/ExamenContext';
import TabTipos from './TabTipos';
const Examenes = () => {
    const  {obternerTipos,tiposExam}  = useContext(ExamenContext) ;
    useEffect(() => {
        obternerTipos();
     }, [])
    return (  <>
       <h1 className="text-3xl font-hight mb-10 text-center mt-10 ">Examnes Realizados</h1>
       <div className="m-10 ">
        <table className="table-auto">
            <thead>
                <tr>
                <th className="border w-1/2 px-4 py-2">Tipo</th>
                <th className="border w-1/2 px-4 py-2">Ver Deatalles</th>    
                </tr>
            </thead>

    <tbody>

    {tiposExam.map(tipos=>(
                    <TabTipos
                    key={tipos._id}
                     tipos={tipos}
                  />
              ))}
        
    
  </tbody>

    </table>
       </div>    
      
      </>
      );
}
 
export default Examenes;

/*

    {tiposExam.map(exam=>(
                    <TabTipos
                    key={exam._id}
                     exam={exam}
                  />
              ))}


*/