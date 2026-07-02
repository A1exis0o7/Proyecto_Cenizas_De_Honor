import React, { useRef } from "react";
import LottieModule from "lottie-react";

const Lottie = LottieModule.default;

import "../Components/StyleComic.css";

import AnimacionEscena1 from "../assets/escena1.json";
import BotonAnimado from "../assets/boton.json";

const Comic = () => {
  const fondoRef = useRef(null);
  const botonRef = useRef(null);

  const reproducirFondo = () => {
    fondoRef.current?.goToAndPlay(0, true);
    botonRef.current?.goToAndPlay(0, true);
  };

  return (
    <div className="Escenario-Completo">

      {/* Animación principal */}
      <Lottie
        lottieRef={fondoRef}
        animationData={AnimacionEscena1}
        autoplay={false}
        loop={false}
        className="Fondo-escena1"
        style={{
          width: "100%",
          height: "100%",
        }}
      />

      {/* Botón */}
      <div className="Boton-Continuar" onClick={reproducirFondo}>
        <Lottie
          lottieRef={botonRef}
          animationData={BotonAnimado}
          autoplay={false}
          loop={false}
          style={{
            cursor: "pointer",
          }}
        />
      </div>

    </div>
  );
};

export default Comic;
