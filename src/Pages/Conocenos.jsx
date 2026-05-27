import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaBars,
} from "react-icons/fa";

const Conocenos = () => {
  return (
    <div className="bg-dark text-light min-vh-100 overflow-hidden">
      
      {/* HERO */}
      <section
  style={{
    minHeight: "100vh",
    backgroundColor: "#2b2b2b",
  }}
>

  {/* NAVBAR */}
  <nav
    className="d-flex justify-content-between align-items-center px-4 py-3"
    style={{
      backgroundColor: "#6e6e6e",
    }}
  >
    {/* LOGO */}
    <div className="d-flex align-items-center gap-2">

      <img
        src="public/img miguel/logo.png"
        alt="Runas Codex"
        style={{
          width: "55px",
          height: "55px",
          objectFit: "contain",
        }}
      />

      <h5
        className="m-0 fw-bold"
        style={{
          color: "#c57b2b",
          fontSize: "0.9rem",
        }}
      >
        RUNAS CODEX
      </h5>
    </div>

    {/* MENU HAMBURGUESA */}
    <button
      className="btn border-0 shadow-none"
      style={{
        color: "#111",
        fontSize: "1.6rem",
      }}
    >
      <FaBars />
    </button>
  </nav>

  {/* HERO */}
  <div className="d-flex align-items-center" style={{ minHeight: "85vh" }}>
    <div className="container">
      <div className="col-lg-5">

        <h1
          className="fw-bold"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4rem)",
            color: "#d9d9d9",
          }}
        >
          CONÓCENOS
        </h1>

        <h3
          className="mb-4"
          style={{
            color: "#a8a8a8",
          }}
        >
          ¿Quiénes somos?
        </h3>

        <p
          style={{
            color: "#c7c7c7",
            lineHeight: "1.8",
          }}
        >
          Somos Runas Codex, un grupo creativo apasionado por las historias,
          el diseño y la imaginación. Creamos experiencias inspiradas en la
          fantasía, los videojuegos y las aventuras medievales.
        </p>

      </div>
    </div>
  </div>

</section>

      {/* CARDS */}
      <section className="py-5">
        <div className="container">

          {/* CARD 1 */}
          <div
            className="mx-auto mb-5 p-4"
            style={{
              backgroundColor: "#3a3a3a",
              borderRadius: "20px",
              maxWidth: "900px",
            }}
          >
            <div
              className="row align-items-center p-3"
              style={{
                backgroundColor: "#d9d9d9",
                borderRadius: "15px",
              }}
            >
              {/* Imagen */}
              <div className="col-md-4 text-center d-flex justify-content-center">
                <div
                  style={{
                    width: "70%",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src="/img miguel/yo.png"
                    alt="Miguel"
                    className="img-fluid w-100 h-100"
                    style={{
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="col-md-8 mt-4 mt-md-0">
                <h2
                  className="fw-bold mb-4"
                  style={{
                    color: "#444",
                  }}
                >
                  Miguel
                </h2>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "1.8",
                  }}
                >
                  Soy alguien tranquilo y reservado. Prefiero observar antes que
                  hablar y me siento cómodo en espacios simples.
                </p>

                {/* Redes */}
                <div className="d-flex gap-3 mt-4">

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaFacebookF />
                    </div>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaInstagram />
                    </div>
                  </a>

                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaTiktok />
                    </div>
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaYoutube />
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="mx-auto mb-5 p-4"
            style={{
              backgroundColor: "#3a3a3a",
              borderRadius: "20px",
              maxWidth: "900px",
            }}
          >
            <div
              className="row align-items-center p-3"
              style={{
                backgroundColor: "#d9d9d9",
                borderRadius: "15px",
              }}
            >
              {/* Imagen */}
              <div className="col-md-4 text-center d-flex justify-content-center">
                <div
                  style={{
                    width: "70%",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src="/img miguel/alexis.png"
                    alt="Alexis"
                    className="img-fluid w-100 h-100"
                    style={{
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="col-md-8 mt-4 mt-md-0">
                <h2
                  className="fw-bold mb-4"
                  style={{
                    color: "#444",
                  }}
                >
                  Alexis
                </h2>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "1.8",
                  }}
                >
                  Siempre está pendiente de todo. Puede parecer serio al
                  principio, pero cuando entra en confianza destaca mucho.
                </p>

                {/* Redes */}
                <div className="d-flex gap-3 mt-4">

                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaFacebookF />
                    </div>
                  </a>

                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaInstagram />
                    </div>
                  </a>

                  <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaTiktok />
                    </div>
                  </a>

                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaYoutube />
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="mx-auto mb-5 p-4"
            style={{
              backgroundColor: "#3a3a3a",
              borderRadius: "20px",
              maxWidth: "900px",
            }}
          >
            <div
              className="row align-items-center p-3"
              style={{
                backgroundColor: "#d9d9d9",
                borderRadius: "15px",
              }}
            >
              {/* Imagen */}
              <div className="col-md-4 text-center d-flex justify-content-center">
                <div
                  style={{
                    width: "70%",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src="/img miguel/luna.png"
                    alt="Luna"
                    className="img-fluid w-100 h-100"
                    style={{
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="col-md-8 mt-4 mt-md-0">
                <h2
                  className="fw-bold mb-4"
                  style={{
                    color: "#444",
                  }}
                >
                  Luna
                </h2>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "1.8",
                  }}
                >
                  Es amable y relajada. Tiene una forma muy natural de hacer
                  sentir cómodas a las personas.
                </p>

                {/* Redes */}
                <div className="d-flex gap-3 mt-4">

                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaFacebookF />
                    </div>
                  </a>

                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaInstagram />
                    </div>
                  </a>

                  <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaTiktok />
                    </div>
                  </a>

                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaYoutube />
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div
            className="mx-auto mb-5 p-4"
            style={{
              backgroundColor: "#3a3a3a",
              borderRadius: "20px",
              maxWidth: "900px",
            }}
          >
            <div
              className="row align-items-center p-3"
              style={{
                backgroundColor: "#d9d9d9",
                borderRadius: "15px",
              }}
            >
              {/* Imagen */}
              <div className="col-md-4 text-center d-flex justify-content-center">
                <div
                  style={{
                    width: "70%",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src="/img miguel/sa.png"
                    alt="Isabel"
                    className="img-fluid w-100 h-100"
                    style={{
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="col-md-8 mt-4 mt-md-0">
                <h2
                  className="fw-bold mb-4"
                  style={{
                    color: "#444",
                  }}
                >
                  Isabel
                </h2>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "1.8",
                  }}
                >
                  Es introvertida y tranquila. Tiene una energía calmada y
                  transmite confianza sin llamar demasiado la atención.
                </p>

                {/* Redes */}
                <div className="d-flex gap-3 mt-4">

                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaFacebookF />
                    </div>
                  </a>

                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaInstagram />
                    </div>
                  </a>

                  <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaTiktok />
                    </div>
                  </a>

                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                        color: "white",
                      }}
                    >
                      <FaYoutube />
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-5">
        <div className="container">
          <h1
            className="text-center mb-5 fw-bold"
            style={{
              color: "#d9d9d9",
            }}
          >
            CONTÁCTANOS
          </h1>

          <div
            className="mx-auto p-4"
            style={{
              maxWidth: "500px",
              backgroundColor: "#444",
              borderRadius: "20px",
            }}
          >
            <form>
              <div className="mb-4">
                <label className="form-label text-light">
                  Motivo de contacto
                </label>

                <select className="form-select">
                  <option>Soporte</option>
                  <option>Información</option>
                  <option>Colaboración</option>
                </select>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <label className="form-label text-light">Nombre</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <label className="form-label text-light">Apellido</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellido"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <label className="form-label text-light">Teléfono</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Teléfono"
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <label className="form-label text-light">
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Correo"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-light">Mensaje</label>

                <textarea
                  className="form-control"
                  rows="8"
                  placeholder="Escribe tu mensaje..."
                ></textarea>
              </div>

              <button className="btn btn-secondary px-5">
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-5 text-center">
       <div className="mx-auto">
        <img
          src="public/img miguel/logo.png"
          alt="Runas Codex"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "contain",
          }}
        />
      </div>

        <h1
          className="fw-bold mb-4"
          style={{
            color: "#8D552D",
          }}
        >
          RUNAS CODEX
        </h1>

        <div className="d-flex justify-content-center gap-3 mb-5">

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noreferrer"
    className="text-decoration-none"
  >
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        backgroundColor: "#666",
        color: "white",
      }}
    >
      <FaFacebookF />
    </div>
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noreferrer"
    className="text-decoration-none"
  >
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        backgroundColor: "#666",
        color: "white",
      }}
    >
      <FaInstagram />
    </div>
  </a>

  <a
    href="https://tiktok.com"
    target="_blank"
    rel="noreferrer"
    className="text-decoration-none"
  >
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        backgroundColor: "#666",
        color: "white",
      }}
    >
      <FaTiktok />
    </div>
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
    rel="noreferrer"
    className="text-decoration-none"
  >
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        backgroundColor: "#666",
        color: "white",
      }}
    >
      <FaYoutube />
    </div>
  </a>

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
    </div>
  );
};

export default Conocenos;