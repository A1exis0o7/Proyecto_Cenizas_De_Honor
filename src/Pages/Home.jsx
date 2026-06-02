import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container min-vh-100 min-vw-100 m-0 row mb-5">
        <div className="col col-12">
          <div className="w-25">
            <img
              src="img/hambuguer.png"
              className="img-fluid w-25 p-lg-0 p-md-0 pt-3"
              alt=""
            />
          </div>
        </div>

        <div className="col col-12 text-center">
          <h1 >CENIZAS DE HONOR</h1>

          <h5 className="pb-4 pt-4">
            Cenizas de Honor es un cómic medieval. Sigue a Sir Leon desde la caída de Roma hasta el último amanecer
          </h5>

          <button className="btn btn-dark rounded-pill">
            Explorar Comic
          </button>
        </div>

        <div className="row col mt-5 pt-5 align-items-end pb-5">
          <div className="col col-6 md-col-12">
            <div className="w-25">
              <img
                src="img/music.png"
                className="img-fluid w-50"
                alt=""
              />
            </div>
          </div>

          <div className="col col-6 p-0 d-none d-lg-block">
            <p>Scroll</p>
          </div>
        </div>
      </div>

      {/* NAVBAR */}

      <ul className="nav nav-pills justify-content-center mt-5 mb-5 md-mt-0 md-mb-0">
        <li className="nav-item h-auto">
          <a
            className="nav-link active bg-dark rounded-pill"
            aria-current="page"
            href="#"
          >
            Tienda
          </a>
        </li>

        <li className="nav-item h5 h-auto">
          <a className="nav-link link-secondary" href="#">
            Contacto
          </a>
        </li>

        <li className="nav-item h5 h-auto">
          <a className="nav-link link-secondary" href="#">
            Marca
          </a>
        </li>

        <li className="nav-item h5 h-auto">
          <a className="nav-link link-secondary" href="#">
            Galeria
          </a>
        </li>
      </ul>

      {/* TIENDA */}

      <div className="container">
        <div className="row text-center">
          <div className="col col-4">
            <img
              src="img/img.png"
              alt=""
              className="img-fluid p-3 d-none d-md-block"
            />
          </div>

          <div className="col col-12 col-md-4">
            <img
              src="img/img.png"
              alt=""
              className="img-fluid p-md-1 p-3"
            />
          </div>

          <div className="col col-4">
            <img
              src="img/img.png"
              alt=""
              className="img-fluid p-3 d-none d-md-block"
            />
          </div>

          <div className="col col-12">
            <Link to="/Tienda" className="h3 mt-4 mb-4">TIENDA</Link>
          </div>

          <div className="col col-12">
            <h4  className="h4 p-3 pb-5">
              Nuestra tienda digital donde podras comprar nuestros productos
              pensados para ti y tu bolsillo, todo de forma segura
            </h4>
          </div>
        </div>

        <div className="row p-4 d-none d-lg-block">
          <div className="col col-4">
            <img
              src="img/flechita.png"
              alt=""
              className="img-fluid ps-5 pb-5"
            />

            <img
              src="img/flechita2.png"
              alt=""
              className="img-fluid ps-5 pb-5"
            />
          </div>
        </div>
      </div>

      {/* COMIC */}

      <h1 className="h1 ps-5 pe-5 mt-5 pb-md-3 text-center">
        Nuestro comic
      </h1>

      <h5 className="h5 p-1 p-md-0 pb-md-3 p-md-5 text-center">
        En nuestro comic Digital, podras aprender sobre los eventos historicos
        que marcaron la edad media y dieron pie al conocimiento actual, todo
        esto gracias a transiciones historicas a manos de nuestros personajes,
        escenarios y sobre todo, mucha interactividad!
      </h5>

      <div className="row p-0 p-md-1 p-md-5">
        <div className="col col-6 d-none d-md-block">
          <div className="col col-12">
            <img
              src="img/img2.png"
              alt=""
              className="img-fluid p-4 p-md-1"
            />
          </div>

          <div className="col col-12">
            <h5 className="h5 text-center">
              ¿Que es un comic digital interactivo?
            </h5>
          </div>
        </div>

        <div className="col col-6 d-none d-md-block">
          <div className="col col-12">
            <h4 className="h4 ps-5 p-md-0">Contiene</h4>
          </div>

          <div className="col col-12 row align-items-center">
            <div className="col col-1 d-none d-lg-block">
              <img src="img/img0.png" alt="" className="img-fluid" />
            </div>

            <div className="col col-11">
              <h5>Elementos transmedia</h5>
            </div>
          </div>

          <div className="col col-10">
            <div className="p ps-5 p-md-0">
              En una era cada vez mas digitalizada, la transmedia es vital para
              contar mas eficientemente una historia.
            </div>
          </div>

          <div className="col col-12 row align-items-center">
            <div className="col col-1 d-none d-lg-block">
              <img src="img/img0.png" alt="" className="img-fluid" />
            </div>

            <div className="col col-11">
              <h5>Historia conectada</h5>
            </div>
          </div>

          <div className="col col-10">
            <div className="p ps-5 p-md-0">
              Aunque nuestra historia sea una secuela ligada a los capitulos 1 y
              2, para entenderla no es obligatorio conocerlos.
            </div>
          </div>

          <div className="col col-12 row align-items-center">
            <div className="col col-1 d-none d-lg-block">
              <img src="img/img0.png" alt="" className="img-fluid" />
            </div>

            <div className="col col-11">
              <h5>Elementos interactivos</h5>
            </div>
          </div>

          <div className="col col-10">
            <p className="p ps-5 p-md-0">
              En nuestro comic, podras tomar decisiones que cambien la historia.
              Habran animaciones, sonidos ambientales y minijuegos.
            </p>
          </div>
        </div>
      </div>

      {/* VIDEO */}

      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-dark mt-5 w-100">
        <img src="img/play.png" alt="" className="img-fluid" />
      </div>

      {/* PREMISA */}

      <div className="container-fluid">
        <div className="row p-5 p-md-0 pt-md-5">
          <div className="col col-12 col-md-6 row">
            <h1 className="pt-5 m-0 d-none d-md-block">Premisa</h1>

            <h2 className="pb-5 pe-5 ps-5">
              “Gracias al reloj de arena, un caballero recorre siglos de
              historia...”
            </h2>
          </div>

          <div className="col col-md-6 col-12 row">
            <div className="col col-12">
              <img
                src="img/img2.png"
                alt=""
                className="img-fluid p-md-2 p-0 mb-4"
              />
            </div>

            <div className="col col-12 col-md-12">
              <p className="h5 ps-5 pe-5 p-md-1">
                En nuestra aventura gráfica, viajaremos en el tiempo para
                regresar siglos atrás...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PERSONAJES */}

      <div className="contenedor mb-5 d-none d-md-block">
        <div className="row p-5 p-md-3">
          <div className="col col-12 text-center p-md-5">
            <h2>Personajes</h2>
          </div>

          <div className="col col-2">
            <img
              src="img/img3.png"
              alt=""
              className="img-fluid pt-4 p-2 pb-3"
            />
          </div>

          <div className="col col-2">
            <img
              src="img/img3.png"
              alt=""
              className="img-fluid pt-5 p-2 p-md-0"
            />
          </div>

          <div className="col col-4 text-center">
            <img
              src="img/img4.png"
              alt=""
              className="img-fluid ps-5 pe-5 pt-2 p-md-0"
            />
          </div>

          <div className="col col-2">
            <img
              src="img/img3.png"
              alt=""
              className="img-fluid pt-5 p-2 p-md-0"
            />
          </div>

          <div className="col col-2">
            <img
              src="img/img3.png"
              alt=""
              className="img-fluid pt-4 p-2 pb-3"
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}

      <footer className="py-5 text-center">
        <div
          className="mx-auto mb-4"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            backgroundColor: "#777",
          }}
        ></div>

        <h1
          className="fw-bold mb-4"
          style={{
            color: "#c7c7c7",
          }}
        >
          RUNAS CODEX
        </h1>

        <div className="d-flex justify-content-center gap-3 mb-5">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                backgroundColor: "#666",
              }}
            ></div>
          ))}
        </div>

        <div
          style={{
            width: "90%",
            height: "1px",
            backgroundColor: "#555",
            margin: "auto auto 20px auto",
          }}
        ></div>

        <div className="d-flex justify-content-between px-5 flex-wrap">
          <small style={{ color: "#888" }}>
            © COPYRIGHT 2023 - 2025 RUNAS CODEX
          </small>

          <small style={{ color: "#888" }}>
            RUNAS CODEX PRODUCTION
          </small>
        </div>
      </footer>
    </>
  );
};

export default Home;