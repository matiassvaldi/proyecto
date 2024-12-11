import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Contador from './Contador.jsx'
// import Pokemons from './Pokemons.jsx'
// import Cronometro from './Cronometro'
import Navbar from './IEStech'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
  </StrictMode>,
)
