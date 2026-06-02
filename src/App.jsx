import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Tienda from './Pages/Tienda'
import Marca from './Pages/Marca'




 const App = () => {
  return (
  <>
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tienda" element={<Tienda/>} />
      <Route path="/conocenos" element={<Conocenos/>} />
      <Route path="/marca" element={<Marca/>} />
    </Routes>
  </BrowserRouter>
  
  </>
  )
}

export default App