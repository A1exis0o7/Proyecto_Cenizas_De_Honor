import lottieReact from "lottie-react";
import animacionIsabel from "../assets/animacionOsito-Isabel.json";
import { useRef } from "react";
import animacionPingui from "../assets/pinguinoAndres.json";
import "./StyleIsabel.css"

const Lottie = lottieReact.default;

const LottieIsabel = () => {
  const LottieRef = useRef(null);

  const Reproducir = () => {
    LottieRef.current?.goToAndPlay(0, true);
  }

  return (

    <div className="Pantalla">
      <img className="position-absolute Fondo" src="public/bbs/Fondo.png" alt="" />
      <img className="position-absolute Nube 1" src="public/bbs/Nube 1.png" alt=""/>
      <img className="position-absolute Nube 2" src="public/bbs/Nube 2.png" alt=""/>
      <img className="position-absolute Cubo hielo" src="public/bbs/Cubo hielo.png" alt=""/>
      <img className="position-absolute Pez espinas" src="public/bbs/Pez espinas.png" alt=""/>

       <div className= "position-absolute osito" onClick = { reproducir} >
        <Lottie
          LottieRef={LottieRef}
          animationData={animacionOsito-Isabel}
          loop={false}
          autoPlay={false}
          style={{ width: 366, 
                   height: 500,
                   cursor: "pointer",}}

        />
      </div>


    </div>

  );
};

export default LottieIsabel;