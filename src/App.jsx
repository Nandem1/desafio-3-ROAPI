import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './assets/components/NavbarMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Monsters from './views/Monsters';
import Home from './views/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMain />
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/monsters/' element={<Monsters />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
