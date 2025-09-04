import './App.css'
import { Clock } from './Components/Clock'
import { Home } from './Components/Home'
import { Temporizador } from './Components/Temp'
import { Contador } from './Components/Contador'
import { Alterar } from './Components/Alterar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/relogio' element={<Clock/>}></Route>
          <Route path='/temporizador' element={<Temporizador/>}></Route>
          <Route path='/contador' element={<Contador/>}></Route>
          <Route path='/alterar' element={<Alterar/>}></Route>
        </Routes>
      </BrowserRouter>  
    
    </>
  )
}
export default App



