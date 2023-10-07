import './App.css';
import data from "./data.json"
import { HashRouter, Routes, Route } from 'react-router-dom';
import Inicio from "./pages/Inicio"
import Sistema from "./pages/Sistema"
import Enfermedad from './pages/Enfermedad';
import Desarrolladores from './pages/Desarrolladores';

function App() {
  const sistemas = data
  return (
    <div className='app-container'>
      <HashRouter>
        <Routes>

          <Route path="/" element={<Inicio />} />

          <Route path="/desarrolladores" element={<Desarrolladores />} />

          {sistemas.map((sistema) => {
            let sistemaRuta = sistema.nombre.replace(/\s+/g, "-").toLowerCase();
            return (
              <Route
                key={sistemaRuta}
                path={"/" + sistemaRuta}
                element={<Sistema nombre={sistema.nombre} />}
              />
            );
          })}

          {sistemas.map((sistema) => {
            let sistemaRuta = sistema.nombre.replace(/\s+/g, "-").toLowerCase();
            return sistema.enfermedades.map((enfermedad) => {
              let enfermedadRuta = enfermedad.nombre.replace(/\s+/g, "-").toLowerCase();
              return (
                <Route
                  key={sistemaRuta + "-" + enfermedadRuta}
                  path={"/" + sistemaRuta + "/" + enfermedadRuta}
                  element={<Enfermedad nombre={enfermedad.nombre} />}
                />
              );
            });
          })}

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
