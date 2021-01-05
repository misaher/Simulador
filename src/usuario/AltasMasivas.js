import React,{useState,useEffect,useContext} from 'react';
import ReactFileReader from 'react-file-reader';
import UsuariosContext from  '../../src/Context/Usuarios/usuariosContext';

const AltasMasivas = () => {
       const  [datos,setDatos] = useState();
       const  [usuariosMas,setUsuariosMas] = useState([]);
       const {CargaMasivaUsuarios} = useContext(UsuariosContext);
       let   usuariosArr=[];
   const  handleFiles = files => {
        console.log('Ok carga de archivos ');
         console.log(files)
         var reader = new FileReader();
         reader.onload =  (e) => {
            // Use reader.result
               console.log('ok resultados ----------------------->>>');
               console.log(reader.result);
               console.log('-----------------------------------------<<>>');
              setDatos(
               reader.result
            )
          }
          reader.readAsText(files[0]);   
      }
  
    const cargarUsuarios = ()=>{
           console.log('ok cargando los archivos ');           
           let usu = datos.split('\n')
           console.log(usu);
            console.log('----------------->>>>>>');
            
           let palabras;
           let usuResp;
           let usuario={    
                 nombre:"",
                 email:""
           }
               for (let i=1 ; i<usu.length; i++){
                usuResp=usu[i].split(',')
                    //console.log(usuResp);
                     usuario.nombre=usuResp[0]
                     usuario.email=usuResp[1]
                      console.log(usuario);
                      usuariosArr.push(usuario);
                      usuario={    
                        nombre:"",
                        email:""
                  }

               }
                console.log('--->>>>'); 
                 console.log(usuariosArr);
                console.log(JSON.stringify(usuariosArr));
                CargaMasivaUsuarios(usuariosArr)
            
    }

    return ( 
        <>
     
        <h1 className="text-3xl font-hight mb-4 text-center mt-10">Alta Masiva Usuarios </h1>
        <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
               <div className="mb-4">
                
                <ReactFileReader 
                  multipleFiles={false}
                  fileTypes={[".csv"]} 
                handleFiles={handleFiles}>
                      <button className="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Upload</button>
                </ReactFileReader>

               </div>                     
               <div className="mb-6">
                                <input 
                                 onClick={cargarUsuarios}
                                type="submit"
                                className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                value="Cargar Usuarios"
                                />
                     
                      </div>

        </div>
 

        </div>
        </>



    );
}
 
export default AltasMasivas;