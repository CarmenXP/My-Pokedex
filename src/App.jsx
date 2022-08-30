import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import PokedexDetail from './components/PokedexDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route element ={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>}/>
            <Route path='/pokedex/:name' element={<PokedexDetail/>}/>
          </Route>

      </Routes>

    </div>
  )
}

export default App
