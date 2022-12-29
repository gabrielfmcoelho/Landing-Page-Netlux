//  ------------------------------------------------
//  # Impotação de componentes seções e bibliotecas
import React from 'react'
import Contato from './components/sections/contato.jsx'
import Home from './components/sections/home.jsx'
import Obras from './components/sections/obras.jsx'
import SobreNos from './components/sections/sobreNos.jsx'
//  ------------------------------------------------

// ------------------------------------------------
// # Inicio da função principal
// Coelho -> A função principal é o que será renderizado no index.html,
// ... componentes podem ser importados e renderizados aqui em ordem (um abaixo do outro).
function App() {
  return (
    <div>
      <Home/>
      <SobreNos/>
      <Obras/>
      <Contato/>
   

    </div>
  )
}
// Fim da função principal
/* 
      <Obras/>
      <SobreNos/>
      <Contato/>
*/ 
// ------------------------------------------------

export default App
