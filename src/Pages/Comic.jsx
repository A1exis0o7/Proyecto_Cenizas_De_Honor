import React, { useRef, useEffect } from "react";
import LottieModule from "lottie-react";

const Lottie = LottieModule.default;

import "../Components/StyleComic.css";

import AnimacionEscena1 from "../assets/escena1.json";
import BotonAnimado from "../assets/boton.json";










const Comic = () => {

  




  return (
    <div className="Escenario-Completo">

      {/* Animación principal */}
      <Lottie

    animationData={AnimacionEscena1}
    autoplay={true}
    loop={true}
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
       
          style={{
            
            cursor: "pointer",
          }}
        />
      </div>

    </div>
  );
};

export default Comic;