import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6'; */



const Tienda = () => {

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
      
  
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
        <a className="navbar-brand fw-bold" href="#">🐵</a>
        <div className="mx-auto">
          <ul className="navbar-nav d-flex flex-row gap-4">
            <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Tienda</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
          </ul>
        </div>
        <span className="text-white">🛒</span>
      </nav>

      
      <div className="text-center my-5">
        <h1 className="fw-bold" style={{ letterSpacing: '3px' }}>
          TIENDA <span style={{ color: '#f5a623' }}>CODEX</span>
        </h1>
      </div>

     
      <div className="container pb-5">
        <div className="row g-3">

          {[
            { title: "CAMISAS", src: "./img - isa/Camisa 1.jpg" },
            { title: "GORRAS", src: "./img - isa/Gorra.jpg" },
            { title: "CUADERNOS", src: "./img - isa/Cuaderno.jpg" },
            { title: "BUZOS", src: "./img - isa/Buso 1.jpg" },
            { title: "BOLSOS", src: "./img - isa/Mochila.jpg" },
            { title: "TERMOS", src: "./img - isa/Termo 1.jpg" },
          ].map((item, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div 
                className="card text-center border-0"
                style={{ backgroundColor: '#e9e9e9' }}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">
                    {item.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>

  );

}
export default Tienda;