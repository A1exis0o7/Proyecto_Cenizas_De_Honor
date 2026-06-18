import lottieReact from "lottie-react";
import { useRef } from "react";

import animacionMiguel from "../assets/OsoMiguel.json";
import animacionPingui from "../assets/pinguinoAndres.json";

import "./styleMiguel.css";

const Lottie = lottieReact.default;

const LottieMiguel = () => {
  const osoRef = useRef(null);
  const pinguiRef = useRef(null);

  const reproducir = () => {
    osoRef.current?.goToAndPlay(0, true);
  };

  const reproducirPingui = () => {
    pinguiRef.current?.goToAndPlay(0, true);
  };

  return (
    <div className="pantalla">

      {/* Fondo */}
      <img
        className="position-absolute fondo"
        src="/bbs/Fondo.png"
        alt="Fondo"
      />

      <img
        className="position-absolute nube1"
        src="/bbs/Nube 1.png"
        alt="Nube 1"
      />

      <img
        className="position-absolute nube2"
        src="/bbs/Nube 2.png"
        alt="Nube 2"
      />

      <img
        className="position-absolute cubo-hielo"
        src="/bbs/Cubo hielo.png"
        alt="Cubo de hielo"
      />

      <img
        className="position-absolute pez-espinas"
        src="/bbs/Pez espinas.png"
        alt="Pez"
      />

      {/* Oso */}
      <div
        className="position-absolute oso"
        onClick={reproducir}
      >
        <Lottie
          lottieRef={osoRef}
          animationData={animacionMiguel}
          loop={false}
          autoplay={false}
          style={{
            width: 366,
            height: 500,
            cursor: "pointer",
          }}
        />
      </div>

      {/* Pingüino */}
      <div
        className="position-absolute pingui"
        onClick={reproducirPingui}
      >
        <Lottie className="pingui-sombra"
          lottieRef={pinguiRef}
          animationData={animacionPingui}
          loop={false}
          autoplay={false}
          style={{
            width: 200,
            height: 200,
            cursor: "pointer",
          }}
        />
      </div>

    </div>
  );
};

export default LottieMiguel;