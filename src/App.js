import React from 'react'
import{
       BrowserRouter as Router,
       Switch,
       Route
       
}  from  'react-router-dom';

import AltaPregunta from './components/AltaPregunta';
import Secciones from './components/Secciones';
import Usuarios  from './components/Usuarios';
import Sidebar  from './ui/Sidebar';
////Preguntas
import AltasGeneral  from './components/AltasGeneral';
import SeccionesAlta  from  './secciones/SeccionesAlta'
import RackPreguntas from './rackPreguntas/RackPreguntas';
//// Temporales solo para pruebas 
import BusquedaUno from  './busquedaPreguntas/BusquedaUno';
/////Usuarios
import AltaUsuario from  './usuario/AltaUsuario';
import UsuariosGeneral from './usuario/UsuariosGeneral';
import AltasMasivas  from './usuario/AltasMasivas';
import EditarUsuario  from './usuario/EditarUsuario'
import InformacionUsuario from  './usuario/InformacionUsuario'
/////Preguntas
import  Preguntas from  './rackPreguntas/Pregutas';
import  EditarPregunta from  './rackPreguntas/EditarPregunta';
import  PreguntaDetalles from  './rackPreguntas/PreguntaDetalles';

/////   States
import   FirebaseProvider from './provider/FirebaseProvider';
import   UsuarioState  from '../src/Context/Usuarios/usuariosState';
import   PreguntasState  from  './Context/Preguntas/PreguntasState';
import   TipoState  from  './Context/Tipo/TipoState';
import   ExamenState  from  './Context/Examen/ExamenState';

////  Evaluacion
import MenuExamenes from './evaluacion/MenuExamenes';
import AsignarExamen  from './evaluacion/AsignarExamen';
import Examenes from  './evaluacion/Examenes';
import Detalles from  './evaluacion/detallesEvalucaion/Detalles';
function App() {
  return (
        <FirebaseProvider>
         <UsuarioState>
           <PreguntasState>
              <TipoState>
                 <ExamenState>
                                <Router>
                                        
                                        <div className="md:flex">
                                        < Sidebar/> 
                                                <div className="md:w-3/5 xl:w-4/5 min-h-screen">
                                                
                                        <Switch>
                                                <Route exact path="/AltaPregunta">
                                                        <AltaPregunta/>
                                                </Route>
                                                <Route exact path="/Secciones">
                                                        <Secciones/>
                                                </Route>
                                                
                                                <Route exact path="/Usuarios">
                                                        <Usuarios/>
                                                </Route>
                                                <Route exact path="/AltasGeneral">
                                                        <AltasGeneral/>
                                                </Route>
                                                <Route exact path="/SeccionesAlta">
                                                        <SeccionesAlta/>
                                                </Route>
                                                <Route exact path="/RackPreguntas">
                                                        <RackPreguntas/>
                                                </Route>

                                                <Route exact path="/BusquedaUno">
                                                        <BusquedaUno/>
                                                </Route>
                                                
                                                <Route exact path="/AltaUsuario">
                                                        <AltaUsuario/>
                                                </Route>
                                                <Route exact path="/UsuariosGeneral">
                                                        <UsuariosGeneral/>
                                                </Route>
                                                
                                                <Route exact path="/AltasMasivas">
                                                        <AltasMasivas/>
                                                </Route>
                                                <Route exact path="/EditarUsuario/:id">
                                                        <EditarUsuario/>
                                                </Route>
                                                <Route  exact path ="/InformacionUsuario/:id">
                                                        <InformacionUsuario/>
                                                </Route>
                                                <Route  exact path="/Preguntas">
                                                <Preguntas/>
                                                </Route>
                                                
                                                <Route  exact path="/EditarPregunta/:id">
                                                <EditarPregunta/>
                                                </Route>
                                                <Route  exact path="/PreguntaDetalles/:id">
                                                <PreguntaDetalles/>
                                                </Route>
                                                <Route  exact path="/AsignarExamen/:id">
                                                <AsignarExamen/>
                                                </Route>

                                                <Route  exact path="/MenuExamenes">
                                                <MenuExamenes/>
                                                </Route>
                                        
                                                <Route  exact path="/Examenes">
                                                <Examenes/>
                                                </Route>
                                                <Route  exact path="/Detalles/:id">
                                                <Detalles/>
                                                </Route>
                                        
                                        </Switch>
                                        
                                        </div>
                                </div>
                                </Router>
                  </ExamenState>
                </TipoState> 
           </PreguntasState>
         </UsuarioState>
    </FirebaseProvider>  
  );
}

export default App;
