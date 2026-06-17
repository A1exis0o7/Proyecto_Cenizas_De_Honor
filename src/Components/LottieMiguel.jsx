import lottieReact from "lottie-react";
import animacionMiguel from "../assets/OsoMiguel.json";
import { useRef } from "react";
import animacionPingui from "../assets/pinguinoAndres.json";
import "./styleMiguel.css"

const Lottie = lottieReact.default;

const LottieMiguel = () => {
  const lottieRef = useRef(null);

  const reproducir = () => {
    lottieRef.current?.goToAndPlay(0, true);
  };

  return (<div className = "pantalla">
      
      <img className="position-absolute fondo" src="public/bbs/Fondo.png" alt="" />
      <img className="position-absolute nube1" src="public/bbs/Nube 1.png" alt="" />
      <img className="position-absolute nube2" src="public/bbs/Nube 2.png" alt="" />
      <img className="position-absolute cubo-hielo" src="public/bbs/Cubo hielo.png" alt="" />
      <img className="position-absolute pez-espinas" src="public/bbs/Pez espinas.png" alt="" />
     <div className="position-absolute oso" onClick={reproducir}>
      <Lottie 
        lottieRef={lottieRef}
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
    

    </div>
  );
};

export default LottieMiguel;