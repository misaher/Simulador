import React,{useState,useEffect,useContext} from 'react';
import {Link} from  'react-router-dom';
const  MenuExamenes = () => {
    return (
        <>
        <div className="mt-4 text-center">
        <Link to="/Examenes" className="bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-5 ml-10  text-white uppercase font-bold"> Examenes Asignados :) </Link>
        
        
        </div> 
  
     </>
      );
}
 
export default MenuExamenes;