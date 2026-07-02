import React, { useRef, useEffect } from "react";
import LottieModule from "lottie-react";

const Lottie = LottieModule.default;

import "../Components/StyleComic.css";

import AnimacionEscena1 from "../assets/escena1.json";
import BotonAnimado from "../assets/boton.json";

import * as LottieReact from "lottie-react";

console.log(LottieReact);







const Comic = () => {

  const escenaRef = useRef(null);

  // Frame donde quieres que se detenga
  const FRAME_PAUSA = 150;



  // Reproduce la primera mitad al cargar la página
  useEffect(() => {
    escenaRef.current?.playSegments([0, FRAME_PAUSA], true);
  }, []);


  // Continúa desde donde se quedó
const continuarEscena = () => {
  const totalFrames = escenaRef.current.getDuration(true);

  escenaRef.current.playSegments(
    [FRAME_PAUSA, totalFrames],
    true
  );
};

  return (
    <div className="Escenario-Completo">

      {/* Animación principal */}
      <Lottie
    lottieRef={escenaRef}
    animationData={AnimacionEscena1}
    autoplay={false}
    loop={false}
    className="Fondo-escena1"
    style={{
        width: "100%",
        height: "100%"
    }}
/>

      {/* Botón */}
      <div className="Boton-Continuar">
        <Lottie
          animationData={BotonAnimado}
          autoplay={true}
          loop={true}
          onClick={continuarEscena}
          style={{
            width: 120,
            cursor: "pointer",
          }}
        />
      </div>

    </div>
  );
};

export default Comic;