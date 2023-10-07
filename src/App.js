import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Inicio from "./pages/Inicio"
import Sistema from "./pages/Sistema"

function App() {
  return (
    <div className='app-container'>
      <HashRouter >
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/sistema" element={<Sistema/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
