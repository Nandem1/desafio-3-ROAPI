import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './assets/components/NavbarMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyContext from './MyContext';
import Monsters from './views/Monsters';
import Home from './views/Home';

function App() {
  const [roData, setRoData] = useState([])
  const globalContext = { roData }

  return (
    <div className="App">
      <MyContext.Provider value={globalContext}>
        <BrowserRouter>
          <NavbarMain />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/monsters' element={<Monsters />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
