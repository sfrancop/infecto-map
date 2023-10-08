import React from 'react'
import titulo from "../../assets/titulo.png"
import './sistemas.css'
import { Link } from 'react-router-dom'

function Sistemas() {
  return (
    <div className='sistemas-contenedor'>

      <img className='sistemas-contenedor-titulo' src={titulo} alt='infecto-map' />

      <div className='sistemas-contenedor-contenido'>

      <div className='sistemas-contenedor-contenido-izquierda'>
        <Link to="/sistema-nervioso-central"><div className='sistemas-contenedor-contenido-boton'>SISTEMA NERVIOSO CENTRAL</div></Link>
        <Link to="/sistema-respiratorio"><div className='sistemas-contenedor-contenido-boton'>SISTEMA RESPIRATORIO</div></Link>
        <Link to="/sistema-digestivo"><div className='sistemas-contenedor-contenido-boton'>SISTEMA DIGESTIVO</div></Link>
      </div>

      <div className='sistemas-contenedor-contenido-centro'>
        <img className='sistemas-contenedor-contenido-centro-imagen' src="https://tucuerpohumano.com/wp-content/uploads/2018/08/anatomia-muscular-15.png" alt='anatomia humana' />
      </div>

      <div className='sistemas-contenedor-contenido-derecha'>
        <Link to="/sistema-genitourinario"><div id='rebelde' className='sistemas-contenedor-contenido-boton'>SISTEMA GENITOURINARIO</div></Link>
        <Link to="/piel-y-tejidos-blandos"><div className='sistemas-contenedor-contenido-boton'>PIEL Y TEJIDOS BLANDOS</div></Link>
        <Link to="/sistema-cardiovascular"><div className='sistemas-contenedor-contenido-boton'>SISTEMA CARDIOVASCULAR</div></Link>
        <Link to="/sistema-musculoesqueletico"><div className='sistemas-contenedor-contenido-boton'>SISTEMA MUSCULOESQUELETICO</div></Link>
        
        <div className='sistemas-contenedor-derecha-atras-contenedor'>
          <Link to="/">
            <img className='sistemas-contenedor-derecha-atras' src='https://www.vippng.com/png/full/91-917915_back-button-png.png' alt='boton atras' />
          </Link>
        </div>
        
      </div>

      </div>

    </div>
  )
}

export default Sistemas