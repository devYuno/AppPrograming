import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [visibility, setVisibility] = useState(true)
  const [color, setColor] = useState('white')
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{backgroundColor: color}}>
        <div>
          { visibility && 
              <div>
                <h1>Este é um teste de Texto para a atividade</h1>
              </div>
          }
          
          <button onClick={() => {setVisibility(visibility == true ? false : true)}}>
            Alterar visibilidade
          </button>
        </div>

        <div>
          <button onClick={() => {setColor(color == 'white' ? 'lightblue' : 'white')}}>
            Alterar cor
          </button>
        </div>

        <div>
          <h3>
            Contador: {count}
          </h3>
          <button onClick={() => {setCount(count => count += 1)}}>
            Contar
          </button>
        </div>
      </div>
    </>
  )
}


export default App
