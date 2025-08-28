import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BlueSquare } from './Components/BlueSquare/BlueSquare'
import { RedSquare } from './Components/RedSquare/RedSquare.jsx'
import { YellowSquare } from './Components/YellowSquare/YellowSquare.jsx'
import { Square } from './Components/Square.jsx'

function App() {
  const [texto, setTexto] = useState("")
  return (
    <>
      <Square color='#66d381ff'/>
      <BlueSquare />
      <RedSquare />
      <YellowSquare />
      <Square color='#66d381ff'/>

      <input type="text" onChange={(e) => setTexto(e.target.value)} style={{height: 30, width: 400}} />
      <h1>{texto}</h1>
    </>
  )
}

export default App


