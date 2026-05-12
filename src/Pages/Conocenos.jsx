import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

const Contactenos = () => {
  const integrantes = [
    {
      nombre: 'Miguel',
      descripcion:
        'Soy alguien más bien tranquilo y reservado. Prefiero observar antes que hablar, y me siento más cómodo en espacios donde no hace falta forzar nada.',
      imagen:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop',
    },
    {
      nombre: 'Alexis',
      descripcion:
        'Él es tranquilo, no anda hablando de más, pero siempre está pendiente de todo. Puede parecer reservado al principio, aunque cuando agarra confianza suelta comentarios memorables.',
      imagen:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop',
    },
    {
      nombre: 'Luna',
      descripcion:
        'Ella es amable y agradable, siempre con esa forma tranquila de estar. No hace falta que se esfuerce mucho, porque de alguna manera consigue que uno se sienta cómodo.',
      imagen:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=900&auto=format&fit=crop',
    },
    {
      nombre: 'Isabel',
      descripcion:
        'Ella es tranquila y más bien introvertida, no es de hacer mucho ruido. Tiene esa forma de estar presente sin necesidad de llamar la atención.',
      imagen:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=900&auto=format&fit=crop',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        overflowX: 'hidden',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* HERO */}
      <section
        className="position-relative d-flex align-items-center"
        style={{
          height: '100vh',
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <button
          className="btn rounded-circle position-absolute"
          style={{
            top: '20px',
            left: '20px',
            width: '55px',
            height: '55px',
            backgroundColor: '#c88b2a',
            border: 'none',
            color: '#fff',
            fontSize: '24px',
          }}
        >
          ←
        </button>

        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1
                style={{
                  fontSize: '4rem',
                  fontWeight: 'bold',
                  color: '#fff',
                  letterSpacing: '4px',
                }}
              >
                CONÓCENOS
              </h1>

              <h3
                style={{
                  color: '#d69b42',
                  fontWeight: 'bold',
                }}
              >
                ¿Quiénes somos?
              </h3>

              <p
                style={{
                  color: '#ddd',
                  lineHeight: '1.8',
                }}
              >
                Somos Runas Codex, cuatro compañeros que nos conocimos desde el
                colegio. Hemos imaginado mundos de aventuras, caballeros, magia
                y leyendas, y hoy les damos vida a través de nuestras historias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRANTES */}
      <section className="py-5 position-relative">
        <div className="container">
          {integrantes.map((persona, index) => (
            <div
              key={index}
              className="mx-auto mb-5 p-4"
              style={{
                backgroundColor: '#c88b2a',
                borderRadius: '20px',
                maxWidth: '750px',
              }}
            >
              <div
                className="row align-items-center p-3"
                style={{
                  backgroundColor: '#f3f3f3',
                  borderRadius: '18px',
                  color: '#000',
                }}
              >
                <div className="col-md-4 text-center">
                  <img
                    src={persona.imagen}
                    alt={persona.nombre}
                    className="img-fluid"
                    style={{
                      borderRadius: '15px',
                      height: '220px',
                      objectFit: 'cover',
                      filter: 'grayscale(100%)',
                    }}
                  />
                </div>

                <div className="col-md-8 mt-4 mt-md-0">
                  <h2
                    style={{
                      color: '#7b4c18',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                    }}
                  >
                    {persona.nombre}
                  </h2>

                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.8',
                    }}
                  >
                    {persona.descripcion}
                  </p>

                  <div className="d-flex gap-4 mt-4">
                    <FaFacebookF size={28} />
                    <FaInstagram size={28} />
                    <FaTiktok size={28} />
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
              color: '#fff',
              fontWeight: 'bold',
              letterSpacing: '3px',
            }}
          >
            CONTÁCTANOS
          </h1>

          <div
            className="mx-auto p-4"
            style={{
              maxWidth: '520px',
              backgroundColor: '#c88b2a',
              borderRadius: '20px',
            }}
          >
            <form>
              <div className="mb-4">
                <label className="form-label text-white">
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
                  <label className="form-label text-white">Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <label className="form-label text-white invisible">
                    apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellido"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <label className="form-label text-white">Teléfono</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="País"
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <label className="form-label text-white">
                    Correo electrónico
                  </label>
                  <input type="email" className="form-control" />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-white">Mensaje</label>

                <textarea
                  className="form-control"
                  rows="10"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn px-5 py-2"
                style={{
                  backgroundColor: '#8f551c',
                  color: '#fff',
                  border: 'none',
                  fontWeight: 'bold',
                }}
              >
                ENTREGAR
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-5 text-center">
        <div className="container">
          <div
            className="mx-auto mb-4 d-flex justify-content-center align-items-center"
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              color: '#c88b2a',
              fontSize: '60px',
              fontWeight: 'bold',
            }}
          >
            📖
          </div>

          <h1
            style={{
              color: '#b67b2f',
              letterSpacing: '4px',
              fontWeight: 'bold',
            }}
          >
            RUNAS CODEX
          </h1>

          <div className="d-flex justify-content-center gap-4 mt-4">
            <FaFacebookF size={32} color="#c88b2a" />
            <FaXTwitter size={32} color="#c88b2a" />
            <FaInstagram size={32} color="#c88b2a" />
            <FaYoutube size={32} color="#c88b2a" />
            <FaTiktok size={32} color="#c88b2a" />
          </div>

          <hr
            className="my-5"
            style={{
              borderColor: '#555',
            }}
          />

          <div className="d-flex justify-content-between flex-wrap">
            <small style={{ color: '#999' }}>
              © COPYRIGHT 2023-2025 RUNAS CODEX
            </small>

            <small style={{ color: '#999' }}>
              RUNAS CODEX PRODUCTION
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contactenos;