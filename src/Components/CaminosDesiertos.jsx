import lottieReact from "lottie-react";
import React, { useRef, useState } from "react";
import "../Components/StyleComic.css";
import animacionLeon from "../assets/lotties miguel/sir leon-caminos-desiertos.json";
import "../Components/StylecaminosDesiertos.css";

const Lottie = lottieReact.default;

const CaminosDesiertos = () => {

  const leonRef = useRef(null);

  const [animando, setAnimando] = useState(false);
  const [keyLottie, setKeyLottie] = useState(0);

  const reproducir = () => {
    if (animando) return; // Evita varios click

    setAnimando(true);
    leonRef.current?.goToAndPlay(0, true);
  };

  const finalizarAnimacion = () => {
    setAnimando(false);
    setKeyLottie(prev => prev + 1);
  };

  return (
    <div className="Escenario-Completo Fondo">

      <div
        className="position-absolute oso"
        onClick={reproducir}
      >
        <Lottie
          key={keyLottie}
          className={`
            ${!animando ? "aura" : ""}
            ${animando ? "lottie-leon" : ""}
          `}
          lottieRef={leonRef}
          animationData={animacionLeon}
          loop={false}
          autoplay={false}
          onComplete={finalizarAnimacion}
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