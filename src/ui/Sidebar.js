import {Link,NavLink} from 'react-router-dom';
const Sidebar = () => {
    return ( 
           
        <div className="md:w-2/5 xl:w-1/5 bg-gray-800">

            <div className="p-6">
            <p className="uppercase  text-white text-xl tracking-wide font-bold">Exam</p>
            <p className="mt-3 text-gray-600"> Apartado de Administrador</p>
             <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500  hover:text-gray-900" activeClassName="text-yellow-500"  to="/AltasGeneral"> Altas General Preguntas</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" to="/Secciones">Secciones</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500  hover:text-gray-900" activeClassName="text-yellow-500"  to="/Usuarios">Usuarios</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500  hover:text-gray-900" activeClassName="text-yellow-500"  to="/MenuExamenes">Examenes</NavLink>    
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500  hover:text-gray-900" activeClassName="text-yellow-500"  to="/BusquedaUno">Temporal Preguntas</NavLink>
             
             </nav>
                
            </div>
 

        </div>

     );
}
 
export default Sidebar;