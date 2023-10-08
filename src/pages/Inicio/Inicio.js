import React from 'react'
import "./inicio.css"
import titulo from "../../assets/titulo.png"
import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <div className='inicio-contenedor'>

      <img className='inicio-titulo' src={titulo} alt='infecto map'/>

      <div className='inicio-botones'>
        <Link to="/sistemas"><div className='inicio-botones-aprender'>Aprender</div></Link>
        <Link to="/desarrolladores"><div className='inicio-botones-desarrolladores'>Desarrolladores</div></Link>
      </div>

      <Link to="/como-aprender"><div className='inicio-comoaprender'>¿Cómo aprender?</div></Link>

    </div>
  )
}
