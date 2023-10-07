import './App.css';
import data from "./data.json"
import { HashRouter, Routes, Route } from 'react-router-dom';
import Inicio from "./pages/Inicio"
import Sistema from "./pages/Sistema"

function App() {
  const enfermedades = data
  return (
    <div className='app-container'>
      <HashRouter >
        <Routes>
          <Route path="/" element={<Inicio/>} />
          {
            enfermedades.map((enfermedad) =>{
              let ruta = enfermedad.nombre.replace(/\s+/g, "-").toLowerCase();
              console.log(ruta);
              return <Route path="/:ruta" element={<Sistema nombre = {enfermedad.nombre} />} />
            })
          }
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
