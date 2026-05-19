import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Conocenos = () => {
  return (
    <div
      style={{
        backgroundColor: "#111",
        minHeight: "100vh",
        color: "white",
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
            <div
              style={{
                width: "200px",
                height: "50px",
                backgroundColor: "#555",
                marginBottom: "20px",
              }}
            ></div>

            <div
              style={{
                width: "300px",
                height: "20px",
                backgroundColor: "#666",
                marginBottom: "15px",
              }}
            ></div>

            <div
              style={{
                width: "100%",
                height: "100px",
                backgroundColor: "#444",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-5">
        <div className="container">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
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
                  <div
                    style={{
                      width: "180px",
                      height: "220px",
                      backgroundColor: "#999",
                      borderRadius: "10px",
                      margin: "auto",
                    }}
                  ></div>
                </div>

                {/* Texto */}
                <div className="col-md-8 mt-4 mt-md-0">
                  <div
                    style={{
                      width: "150px",
                      height: "30px",
                      backgroundColor: "#777",
                      marginBottom: "20px",
                    }}
                  ></div>

                  <div
                    style={{
                      width: "100%",
                      height: "80px",
                      backgroundColor: "#b5b5b5",
                      marginBottom: "20px",
                    }}
                  ></div>

                  {/* Redes */}
                  <div className="d-flex gap-3">
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#555",
                      }}
                    ></div>

                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#555",
                      }}
                    ></div>

                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#555",
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
          <div
            className="mx-auto p-4"
            style={{
              maxWidth: "500px",
              backgroundColor: "#444",
              borderRadius: "20px",
            }}
          >
            {/* Título */}
            <div
              style={{
                width: "200px",
                height: "40px",
                backgroundColor: "#777",
                margin: "0 auto 30px auto",
              }}
            ></div>

            {/* Input */}
            <div
              style={{
                width: "100%",
                height: "45px",
                backgroundColor: "#d9d9d9",
                marginBottom: "20px",
              }}
            ></div>

            <div className="row">
              <div className="col-md-6">
                <div
                  style={{
                    width: "100%",
                    height: "45px",
                    backgroundColor: "#d9d9d9",
                    marginBottom: "20px",
                  }}
                ></div>
              </div>

              <div className="col-md-6">
                <div
                  style={{
                    width: "100%",
                    height: "45px",
                    backgroundColor: "#d9d9d9",
                    marginBottom: "20px",
                  }}
                ></div>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#d9d9d9",
                marginBottom: "20px",
              }}
            ></div>

            <div
              style={{
                width: "140px",
                height: "45px",
                backgroundColor: "#666",
              }}
            ></div>
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

        <div
          className="mx-auto mb-4"
          style={{
            width: "250px",
            height: "40px",
            backgroundColor: "#555",
          }}
        ></div>

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
            margin: "auto",
          }}
        ></div>
      </footer>
    </div>
  );
};

export default Conocenos;