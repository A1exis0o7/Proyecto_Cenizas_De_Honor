import React from 'react';

const TiendaCodex = () => {
  const productos = [
    {
      nombre: "Camisas",
      img: "https://via.placeholder.com/200x200?text=Camisas"
    },
    {
      nombre: "Gorras",
      img: "https://via.placeholder.com/200x200?text=Gorras"
    },
    {
      nombre: "Cuadernos",
      img: "https://via.placeholder.com/200x200?text=Cuadernos"
    },
    {
      nombre: "Buzos",
      img: "https://via.placeholder.com/200x200?text=Buzos"
    },
    {
      nombre: "Bolsos",
      img: "https://via.placeholder.com/200x200?text=Bolsos"
    },
    {
      nombre: "Termos",
      img: "https://via.placeholder.com/200x200?text=Termos"
    }
  ];

  return (
    <div className="bg-dark text-white min-vh-100">
      
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
        <a className="navbar-brand fw-bold" href="#">🐵</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <a className="nav-link active" href="#">Inicio</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">Tienda</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>

        <button className="btn btn-light btn-sm">Login</button>
      </nav>

      {/* Hero */}
      <div className="text-center py-5">
        <h1 className="fw-bold">
          TIENDA <span className="text-warning">CODEX</span>
        </h1>
      </div>

      {/* Grid de productos */}
      <div className="container pb-5">
        <div className="row g-3">

          {productos.map((producto, index) => (
            <div key={index} className="col-6 col-md-4">
              <div className="bg-light text-dark text-center p-3 rounded h-100">
                <img 
                  src={producto.img} 
                  alt={producto.nombre} 
                  className="img-fluid mb-2"
                />
                <h6 className="fw-bold">{producto.nombre.toUpperCase()}</h6>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default TiendaCodex;