import React from "react";
import "../App.css";
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
    backgroundImage: "url('/img miguel/fondo 1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

     {/* NAVBAR */}
        <nav
          className="d-flex justify-content-between align-items-center px-4 py-3"
          style={{
            backgroundColor: "rgba(50, 40, 30, 0.9)",
            borderBottom: "2px solid #8D552D",
          }}
        >
          {/* LOGO */}
          <div className="d-flex align-items-center gap-3">

            <img
              src="/img miguel/logo.png"
              alt="Runas Codex"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
              }}
            />

            <h5
              className="m-0 fw-bold"
              style={{
                color: "#D4A373",
                fontSize: "1rem",
                fontFamily: "'Caesar Dressing', system-ui",
                letterSpacing: "2px",
              }}
            >
              RUNAS CODEX
            </h5>
          </div>

          {/* MENU HAMBURGUESA */}
          <button
            className="btn border-0 shadow-none"
            style={{
              color: "#D4A373",
              fontSize: "1.8rem",
            }}
          >
            <FaBars />
          </button>
        </nav>

  {/* HERO */}
        <div className="d-flex align-items-center" style={{ minHeight: "85vh" }}>
          <div className="container">
            <div className="col-lg-6">

              <h1
                className="fw-bold"
                style={{
                  fontSize: "clamp(3rem, 8vw, 5rem)",
                  color: "#E6C097",
                  fontFamily: "'Caesar Dressing', system-ui",
                  textShadow: "3px 3px 10px black",
                }}
              >
                CONÓCENOS
              </h1>

              <h3
                className="mb-4"
                style={{
                  color: "#C9A66B",
                  fontFamily: "'Caesar Dressing', system-ui",
                }}
              >
                ¿Quiénes somos?
              </h3>

              <p
                style={{
                  color: "#d8d8d8",
                  lineHeight: "1.9",
                  fontSize: "1.05rem",
                  maxWidth: "600px",
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
      <section
        className="py-0"
        style={{
          backgroundImage: "url('/img miguel/fondo2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            background: "rgba(15,15,15,0.88)",
            padding: "40px 0",
          }}
        >
          <div className="container">

{/* CARD 1 */}
<div
  className="mx-auto mb-5 p-4"
  style={{
    backgroundColor: "#1a120d",
    borderRadius: "20px",
    maxWidth: "900px",
    border: "1px solid #8D552D",
    boxShadow: "0 0 25px rgba(141, 85, 45, 0.25)",
  }}
>
  <div
    className="row align-items-center p-3"
    style={{
      backgroundColor: "#d8c3a5",
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
          border: "3px solid #8D552D",
          backgroundColor: "#f2f2f2",
        }}
      >
        <img
          src="/img miguel/yo.png"
          alt="Miguel"
          className="img-fluid w-100 h-100"
          style={{
            objectFit: "cover",
            objectPosition: "top",
            filter: "grayscale(100%) contrast(120%)",
          }}
        />
      </div>
    </div>

    {/* Texto */}
    <div className="col-md-8 mt-4 mt-md-0">
      <h2
        className="fw-bold mb-4"
        style={{
          color: "#6e3f1d",
          fontFamily: "'Caesar Dressing', system-ui",
          fontSize: "2.2rem",
        }}
      >
        MIGUEL
      </h2>

      <p
        style={{
          color: "#5a4634",
          lineHeight: "2",
          fontSize: "1.05rem",
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
              backgroundColor: "#8D552D",
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
              backgroundColor: "#8D552D",
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
              backgroundColor: "#8D552D",
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
              backgroundColor: "#8D552D",
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
    backgroundColor: "#1a120d",
    borderRadius: "20px",
    maxWidth: "900px",
    border: "1px solid #8D552D",
    boxShadow: "0 0 25px rgba(141, 85, 45, 0.25)",
  }}
>
  <div
    className="row align-items-center p-3"
    style={{
      backgroundColor: "#d8c3a5",
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
          border: "3px solid #8D552D",
          backgroundColor: "#f2f2f2",
        }}
      >
        <img
          src="/img miguel/alexis.png"
          alt="Alexis"
          className="img-fluid w-100 h-100"
          style={{
            objectFit: "cover",
            objectPosition: "top",
            filter: "grayscale(100%) contrast(120%)",
          }}
        />
      </div>
    </div>

    {/* Texto */}
    <div className="col-md-8 mt-4 mt-md-0">
      <h2
        className="fw-bold mb-4"
        style={{
          color: "#6e3f1d",
          fontFamily: "'Caesar Dressing', system-ui",
          fontSize: "2.2rem",
        }}
      >
        ALEXIS
      </h2>

      <p
        style={{
          color: "#5a4634",
          lineHeight: "2",
          fontSize: "1.05rem",
        }}
      >
        Siempre está pendiente de todo. Puede parecer serio al
        principio, pero cuando entra en confianza destaca mucho.
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
              backgroundColor: "#8D552D",
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
              backgroundColor: "#8D552D",
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
              backgroundColor: "#8D552D",
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
              backgroundColor: "#8D552D",
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
    backgroundColor: "#1a120d",
    borderRadius: "20px",
    maxWidth: "900px",
    border: "1px solid #8D552D",
    boxShadow: "0 0 25px rgba(141, 85, 45, 0.25)",
  }}
>
  <div
    className="row align-items-center p-3"
    style={{
      backgroundColor: "#d8c3a5",
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
          border: "3px solid #8D552D",
          backgroundColor: "#f2f2f2",
        }}
      >
        <img
          src="/img miguel/luna.png"
          alt="Luna"
          className="img-fluid w-100 h-100"
          style={{
            objectFit: "cover",
            objectPosition: "top",
            filter: "grayscale(100%) contrast(120%)",
          }}
        />
      </div>
    </div>

    {/* Texto */}
    <div className="col-md-8 mt-4 mt-md-0">
      <h2
        className="fw-bold mb-4"
        style={{
          color: "#6e3f1d",
          fontFamily: "'Caesar Dressing', system-ui",
          fontSize: "2.2rem",
        }}
      >
        LUNA
      </h2>

      <p
        style={{
          color: "#5a4634",
          lineHeight: "2",
          fontSize: "1.05rem",
        }}
      >
        Es amable y relajada. Tiene una forma muy natural de hacer
        sentir cómodas a las personas.
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
              backgroundColor: "#8D552D",
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
              backgroundColor: "#8D552D",
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
              backgroundColor: "#8D552D",
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
              backgroundColor: "#8D552D",
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
    backgroundColor: "#1a120d",
    borderRadius: "20px",
    maxWidth: "900px",
    border: "1px solid #8D552D",
    boxShadow: "0 0 25px rgba(141, 85, 45, 0.25)",
  }}
>
  <div
    className="row align-items-center p-3"
    style={{
      backgroundColor: "#d8c3a5",
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
          border: "3px solid #8D552D",
          backgroundColor: "#f2f2f2",
        }}
      >
        <img
          src="/img miguel/sa.png"
          alt="Isabel"
          className="img-fluid w-100 h-100"
          style={{
            objectFit: "cover",
            objectPosition: "top",
            filter: "grayscale(100%) contrast(120%)",
          }}
        />
      </div>
    </div>

    {/* Texto */}
    <div className="col-md-8 mt-4 mt-md-0">
      <h2
        className="fw-bold mb-4"
        style={{
          color: "#6e3f1d",
          fontFamily: "'Caesar Dressing', system-ui",
          fontSize: "2.2rem",
        }}
      >
        ISABEL
      </h2>

      <p
        style={{
          color: "#5a4634",
          lineHeight: "2",
          fontSize: "1.05rem",
        }}
      >
        Es introvertida y tranquila. Tiene una energía calmada y
        transmite confianza sin llamar demasiado la atención.
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
              backgroundColor: "#8D552D",
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
              backgroundColor: "#8D552D",
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
              backgroundColor: "#8D552D",
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
              backgroundColor: "#8D552D",
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
      </div>
      </section>
      

{/* CONTACTO */}
<section className="py-0">
  <div className="container">

    <h1
      className="text-center mb-5 fw-bold py-5"
      style={{
        color: "#d8c3a5",
        fontFamily: "'Caesar Dressing', system-ui",
        fontSize: "3rem",
        textShadow: "0 0 10px rgba(141,85,45,0.4)",
      }}
    >
      CONTÁCTANOS
    </h1>

    <div
      className="mx-auto p-4 p-md-5"
      style={{
        maxWidth: "700px",
        backgroundColor: "#1a120d",
        borderRadius: "20px",
        border: "1px solid #8D552D",
        boxShadow: "0 0 25px rgba(141, 85, 45, 0.25)",
      }}
    >

      <div
        style={{
          backgroundColor: "#d8c3a5",
          borderRadius: "15px",
          padding: "30px",
        }}
      >

        <form>

          {/* SELECT */}
          <div className="mb-4">
            <label
              className="form-label fw-bold"
              style={{
                color: "#5a4634",
              }}
            >
              Motivo de contacto
            </label>

            <select
              className="form-select"
              style={{
                backgroundColor: "#2a1d14",
                color: "#d8c3a5",
                border: "2px solid #8D552D",
                padding: "12px",
              }}
            >
              <option>Soporte</option>
              <option>Información</option>
              <option>Colaboración</option>
            </select>
          </div>

          {/* NOMBRE Y APELLIDO */}
          <div className="row">

            <div className="col-md-6 mb-4">
              <label
                className="form-label fw-bold"
                style={{
                  color: "#5a4634",
                }}
              >
                Nombre
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                style={{
                  backgroundColor: "#2a1d14",
                  color: "#d8c3a5",
                  border: "2px solid #8D552D",
                  padding: "12px",
                }}
              />
            </div>

            <div className="col-md-6 mb-4">
              <label
                className="form-label fw-bold"
                style={{
                  color: "#5a4634",
                }}
              >
                Apellido
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                style={{
                  backgroundColor: "#2a1d14",
                  color: "#d8c3a5",
                  border: "2px solid #8D552D",
                  padding: "12px",
                }}
              />
            </div>

          </div>

          {/* TELEFONO Y CORREO */}
          <div className="row">

            <div className="col-md-6 mb-4">
              <label
                className="form-label fw-bold"
                style={{
                  color: "#5a4634",
                }}
              >
                Teléfono
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Teléfono"
                style={{
                  backgroundColor: "#2a1d14",
                  color: "#d8c3a5",
                  border: "2px solid #8D552D",
                  padding: "12px",
                }}
              />
            </div>

            <div className="col-md-6 mb-4">
              <label
                className="form-label fw-bold"
                style={{
                  color: "#5a4634",
                }}
              >
                Correo electrónico
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                style={{
                  backgroundColor: "#2a1d14",
                  color: "#d8c3a5",
                  border: "2px solid #8D552D",
                  padding: "12px",
                }}
              />
            </div>

          </div>

          {/* MENSAJE */}
          <div className="mb-4">
            <label
              className="form-label fw-bold"
              style={{
                color: "#5a4634",
              }}
            >
              Mensaje
            </label>

            <textarea
              className="form-control"
              rows="8"
              placeholder="Escribe tu mensaje..."
              style={{
                backgroundColor: "#2a1d14",
                color: "#d8c3a5",
                border: "2px solid #8D552D",
                padding: "15px",
                resize: "none",
              }}
            ></textarea>
          </div>

          {/* BOTON */}
          <button
            className="btn px-5 py-2 fw-bold"
            style={{
              backgroundColor: "#8D552D",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              letterSpacing: "1px",
            }}
          >
            ENVIAR
          </button>

        </form>

      </div>
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
            fontFamily: "'Caesar Dressing', system-ui",
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