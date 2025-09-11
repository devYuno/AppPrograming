import { Question1 } from './Routes/Question1.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <>
      {/* NÃO ESQUEÇA DE INSTALAR O BROWSE ROUTER "npm i react-router-dom"*/}
      <BrowserRouter> 
        <Routes>
          <Route path='/1' element={<Question1/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
