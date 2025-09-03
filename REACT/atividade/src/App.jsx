import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [visibility, setVisibility] = useState(true)
  const [color, setColor] = useState('white')

  return (
    <>
      { visibility && 
          <div>
            <h1>Este é um teste de Texto para a atividade</h1>
          </div>
      }
      
      <button onClick={() => {setVisibility(visibility == true ? false : true)}}>
        Alterar visibilidade
      </button>
      <div style={{backgroundColor: color, width: "100vh", height: "200px"}}>
        <button onClick={() => {setColor(color == 'white' ? 'rebeccapurple' : 'white')}}>
          Alterar cor
        </button>
        
      </div>
    </>
  )
}


export default App
