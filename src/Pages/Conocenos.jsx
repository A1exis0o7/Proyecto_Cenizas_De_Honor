import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Conocenos = () => {
  const integrantes = [
    {
      nombre: "Miguel",
      descripcion:
        "Soy alguien tranquilo y reservado. Prefiero observar antes que hablar y me siento cómodo en espacios simples.",
      imagen: "/img miguel/yo.png",
    },
    {
      nombre: "Alexis",
      descripcion:
        "Siempre está pendiente de todo. Puede parecer serio al principio, pero cuando entra en confianza destaca mucho.",
      imagen: "/img miguel/alexis.png",
    },
    {
      nombre: "Luna",
      descripcion:
        "Es amable y relajada. Tiene una forma muy natural de hacer sentir cómodas a las personas.",
      imagen: "/img miguel/luna.png",
    },
    {
      nombre: "Isabel",
      descripcion:
        "Es introvertida y tranquila. Tiene una energía calmada y transmite confianza sin llamar demasiado la atención.",
      imagen: "/img miguel/sa.png",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "white",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* HERO */}
      <section
        className="d-flex align-items-center"
        style={{
          height: "100vh",
          backgroundColor: "#2b2b2b",
        }}
      >
        <div className="container">
          <div className="col-lg-5">
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                color: "#d9d9d9",
              }}
            >
              CONÓCENOS
            </h1>

            <h3
              style={{
                color: "#a8a8a8",
                marginBottom: "20px",
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
      </section>

      {/* CARDS */}
      <section className="py-5">
        <div className="container">
          {integrantes.map((persona, index) => (
            <div
              key={index}
              className="mx-auto mb-5 p-4"
              style={{
                backgroundColor: "#3a3a3a",
                borderRadius: "20px",
                maxWidth: "800px",
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
                <div className="col-md-4 text-center">
                  <img
                    src={persona.imagen}
                    alt={persona.nombre}
                    className="img-fluid"
                    style={{
                      width: "180px",
                      maxHeight: "220px",
                      objectFit: "contain",
                      objectPosition: "top",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                {/* Texto */}
                <div className="col-md-8 mt-4 mt-md-0">
                  <h2
                    style={{
                      color: "#444",
                      marginBottom: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {persona.nombre}
                  </h2>

                  <p
                    style={{
                      color: "#555",
                      lineHeight: "1.8",
                    }}
                  >
                    {persona.descripcion}
                  </p>

                  {/* Redes */}
                  <div className="d-flex gap-3 mt-4">
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                      }}
                    ></div>

                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                      }}
                    ></div>

                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#666",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-5">
        <div className="container">
          <h1
            className="text-center mb-5"
            style={{
              color: "#d9d9d9",
              fontWeight: "bold",
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
          style={{
            color: "#c7c7c7",
            fontWeight: "bold",
            marginBottom: "30px",
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
    </div>
  );
};

export default Conocenos;