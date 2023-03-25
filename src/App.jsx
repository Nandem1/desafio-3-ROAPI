import { useState, useEffect } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './assets/components/NavbarMain';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MyContext from './MyContext';
import Monsters from './views/Monsters';
import Home from './views/Home';
import MonsterSelected from './views/MonsterSelected';

function App() {
  const [roData, setRoData] = useState([])
  const [monsterSelected, setMonsterSelected] = useState("")
  const globalContext = { roData, monsterSelected, setMonsterSelected }

  const getData = async () => {
    const req = await fetch("https://ragnarokapi.bravan.cloudns.cl/monsters/?page=1&limit=500")
    const res = await req.json()
    setRoData(res)
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className="App">
      <MyContext.Provider value={globalContext}>
        <BrowserRouter>
          <NavbarMain />
          <Routes>
            <Route path='/desafio-3-ROAPI' element={<Home />} />
            <Route path='/monsters' element={<Monsters />} />
            <Route path='/monsters/:monsterSelected' element={ monsterSelected !== "" ? <MonsterSelected /> : <Navigate to='/monsters'/>}/>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
