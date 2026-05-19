import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaArrowUp,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Nosotros = () => {
  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'Georgia, serif',
        overflowX: 'hidden',
      }}
    >
    
      <section
        style={{
          minHeight: '100vh',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            background: 'rgba(0,0,0,0.65)',
            position: 'absolute',
            inset: 0,
          }}
        />

        {/* NAV */}
        <div className="position-relative z-1">
          <div className="d-flex justify-content-between align-items-center p-4">
            <button
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: 'none',
                background: '#c98a43',
                color: '#fff',
                fontSize: '22px',
              }}
            >
              ←
            </button>

            <button
              style={{
                border: 'none',
                background: 'transparent',
                color: '#c98a43',
                fontSize: '30px',
              }}
            >
              ☰
            </button>
          </div>

          {/* HERO CONTENT */}
          <div className="container h-100 d-flex align-items-center">
            <div className="row align-items-center w-100">
              <div className="col-lg-6">
                <h1
                  style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                  }}
                >
                  RUNAS CODEX
                </h1>

                <h5
                  style={{
                    color: '#d69a49',
                    marginTop: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  ¿Cómo nació nuestra marca?
                </h5>

                <p
                  style={{
                    marginTop: '20px',
                    lineHeight: '1.9',
                    color: '#ddd',
                  }}
                >
                  Nacimos con el sueño de llevar la historia y el aprendizaje
                  medieval a una nueva era. Buscamos transformar la educación en
                  una experiencia visual, interactiva y emocionante para niños y
                  jóvenes.
                </p>
              </div>

              <div className="col-lg-6 text-center mt-5 mt-lg-0">
                <img
                  src="https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop"
                  alt=""
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    maxHeight: '450px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="text-center pb-4">
            <span style={{ fontSize: '40px', color: '#fff' }}>⌄</span>
          </div>
        </div>
      </section>

      {/* ================= QUIENES ================= */}
      <section className="py-5 position-relative">
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
            }}
          >
            ¿QUIÉNES LA FUNDAMOS Y <br /> PORQUÉ?
          </h2>

          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="img-fluid rounded-4"
              />

              <p
                className="mt-4"
                style={{
                  lineHeight: '1.9',
                  color: '#d6d6d6',
                }}
              >
                Runas Codex fue fundada por un grupo joven apasionado por la
                tecnología, el diseño y la educación. Nuestro objetivo era crear
                una forma diferente y más entretenida de aprender.
              </p>
            </div>

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-5">
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
            }}
          >
            ¿QUÉ PROBLEMA QUERÍAMOS <br /> RESOLVER?
          </h2>

          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p
                style={{
                  lineHeight: '2',
                  color: '#d6d6d6',
                }}
              >
                Queríamos mejorar la forma en que los estudiantes aprenden
                historia y cultura medieval. Muchas veces estos temas se sienten
                aburridos o difíciles de comprender.
              </p>

              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="img-fluid rounded-4 mt-4"
              />
            </div>

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="img-fluid rounded-4"
              />

              <p
                className="mt-4"
                style={{
                  lineHeight: '2',
                  color: '#d6d6d6',
                }}
              >
                Por eso desarrollamos una experiencia interactiva que combina
                narrativa, ilustración y tecnología para generar interés real en
                los jóvenes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISION  */}
      <section className="py-5">
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
            }}
          >
          
          </h2>

          <div className="row g-5">
            <div className="col-lg-6">
              <h4 style={{ color: '#d69a49' }}>
                ¿Cuál es el propósito principal de nuestra marca?
              </h4>

              <p className="mt-4" style={{ lineHeight: '2', color: '#d6d6d6' }}>
                Crear herramientas educativas modernas que despierten la
                creatividad y motiven el aprendizaje mediante experiencias
                digitales inmersivas.
              </p>
            </div>

            <div className="col-lg-6">
              <h4 style={{ color: '#d69a49' }}>
                ¿Qué impacto buscamos generar?
              </h4>

              <p className="mt-4" style={{ lineHeight: '2', color: '#d6d6d6' }}>
                Buscamos que niños y jóvenes conecten con la historia de forma
                divertida, desarrollando pensamiento crítico e imaginación.
              </p>
            </div>
          </div>
        </div>
      </section>

  
      <section className="py-5">
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
            }}
          >
            NUESTRA VISIÓN
          </h2>

          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h4 style={{ color: '#d69a49' }}>
                ¿A dónde queremos llegar?
              </h4>

              <p className="mt-4" style={{ lineHeight: '2', color: '#d6d6d6' }}>
                Queremos convertirnos en una marca referente en educación
                interactiva y narrativa digital para colegios y plataformas
                educativas.
              </p>

              <h4 className="mt-5" style={{ color: '#d69a49' }}>
                ¿Qué futuro imaginamos?
              </h4>

              <p className="mt-4" style={{ lineHeight: '2', color: '#d6d6d6' }}>
                Imaginamos una comunidad creativa donde aprender historia sea
                tan emocionante como vivir una aventura.
              </p>
            </div>

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALORES ================= */}
      <section className="py-5">
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
            }}
          >
            ¿QUÉ VALORES NOS REPRESENTAN?
          </h2>

          <div className="row text-center g-5">
            {[
              'Creatividad',
              'Adaptabilidad',
              'Curiosidad',
              'Tolerancia',
              'Diversión',
              'Cercanía',
              'Confianza y calidad',
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <h4 style={{ color: '#d69a49' }}>{item}</h4>

                <p
                  className="mt-3"
                  style={{
                    color: '#d6d6d6',
                    lineHeight: '1.8',
                  }}
                >
                  Valor fundamental que representa la esencia de nuestra marca y
                  la experiencia educativa que queremos transmitir.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOGO ================= */}
      <section className="py-5">
        <div className="container text-center">
          <h2
            className="mb-5"
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
            }}
          >
            LOGO Y EXPLICACIÓN
          </h2>

          <div
            className="mx-auto d-flex justify-content-center align-items-center"
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: '#111',
              border: '4px solid #d69a49',
            }}
          >
            <div>
              <div style={{ fontSize: '80px' }}>📖</div>
              <h3 style={{ color: '#d69a49' }}>Runas Codex</h3>
            </div>
          </div>

          <div className="row mt-5 g-4">
            <div className="col-md-4">
              <h5 style={{ color: '#d69a49' }}>Robot</h5>
              <p style={{ color: '#d6d6d6' }}>
                Representa innovación y tecnología.
              </p>
            </div>

            <div className="col-md-4">
              <h5 style={{ color: '#d69a49' }}>Libro abierto</h5>
              <p style={{ color: '#d6d6d6' }}>
                Simboliza conocimiento y aprendizaje.
              </p>
            </div>

            <div className="col-md-4">
              <h5 style={{ color: '#d69a49' }}>Corona</h5>
              <p style={{ color: '#d6d6d6' }}>
                Inspiración medieval y liderazgo creativo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        className="py-5 mt-5"
        style={{
          borderTop: '1px solid #333',
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-center gap-4 fs-2">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaTiktok />
          </div>

          <div className="text-center mt-4">
            <p style={{ color: '#999' }}>
              © COPYRIGHT 2026 - RUNAS CODEX
            </p>
          </div>

          {/* BOTON SUBIR */}
          <div className="text-end mt-4">
            <button
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: 'none',
                background: '#d69a49',
                color: '#fff',
                fontSize: '24px',
              }}
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Nosotros;