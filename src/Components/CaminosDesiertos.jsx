import lottieReact from "lottie-react";
import React, { useRef } from "react";
import "../Components/StyleComic.css";
import animacionLeon from "../assets/lotties miguel/sir leon-caminos-desiertos.json";

const Lottie = lottieReact.default;

const CaminosDesiertos = () => {

  const leonRef = useRef(null);

  const reproducir = () => {
    leonRef.current?.goToAndPlay(0, true);
  };

  return (
    <div className="Escenario-Completo Fondo">

      <div
        className="position-absolute oso"
        onClick={reproducir}
      >
        <Lottie
          lottieRef={leonRef}
          animationData={animacionLeon}
          loop={false}
          autoplay={false}
          style={{
            width: 366,
            height: 500,
            cursor: "pointer",
          }}
        />
      </div>

    </div>
  );
};

export default CaminosDesiertos;