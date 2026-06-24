

import Conocenos from './Pages/Conocenos'
import Home from './Pages/Home'
import Comic from  './Pages/Comic'
import Tienda from './Pages/Tienda'
import Marca from './Pages/Marca'
import LottieMiguel from './Components/LottieMiguel'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Comic" element={<Comic />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/marca" element={<Marca />} />
          <Route path="/LottieMiguel" element={<LottieMiguel />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App