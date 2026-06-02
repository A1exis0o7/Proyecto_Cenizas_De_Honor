import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
<<<<<<< HEAD
import Tienda from './Pages/Tienda'
import Marca from './Pages/Marca'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

=======
>>>>>>> e589fa04933f024420bb23791395eb03d94933b0


 const App = () => {
  return (
  <>
<<<<<<< HEAD
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tienda" element={<Tienda/>} />
      <Route path="/conocenos" element={<Conocenos/>} />
      <Route path="/marca" element={<Marca/>} />
    </Routes>
  </BrowserRouter>
=======
    <BrowserRouter>
    
     <Routes >

     <Route path="/" element={<Home />} />
     
>>>>>>> e589fa04933f024420bb23791395eb03d94933b0

     </Routes>

    </BrowserRouter>
    

    
  </>
  )
}

export default App