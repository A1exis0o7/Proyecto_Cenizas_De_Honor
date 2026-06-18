import lottieReact from "lottie-react";
import animacionIsabel from "../assets/animacionOsito-Isabel.json";
import { useRef } from "react";
import animacionPingui from "../assets/pinguinoAndres.json";
import "./StyleIsabel.css"

const Lottie = lottieReact.default;

const LottieIsabel = () => {
  const LottieRef = useRef(null);

  const reproducir = () => {
    LottieRef.current?.goToAndPlay(0, true);
  }

  return (

    <div className="Pantalla">
      
      <img className="position-absolute fondo" src="public/bbs/Fondo.png" alt="" />
      <img className="position-absolute nube1" src="public/bbs/Nube 1.png" alt=""/>
      <img className="position-absolute nube2" src="public/bbs/Nube 2.png" alt=""/>
      <img className="position-absolute cuboHielo" src="public/bbs/Cubo hielo.png" alt=""/>
      <img className="position-absolute pezEspinas" src="public/bbs/Pez espinas.png" alt=""/>
      <img className="position-absolute iglu" src="public/bbs/Iglu.png" alt=""/>
      

       <div className= "position-absolute osito" onClick = { reproducir} >
        <Lottie
          LottieRef={LottieRef}
          animationData={animacionIsabel}
          loop={false}
          autoPlay={false}
          style={{ width: 366, 
                   height: 500,
                   cursor: "pointer",}}

        />
      </div>

      <div className = "position-absolute pingui" onClick = { reproducir} >
        <Lottie
          LottieRef={LottieRef}
          animationData={animacionPingui}
          loop={false}
          autoPlay={false}
          style={{ width: 180, 
                   height: 500,
                   cursor: "pointer",}}

        />
      </div>

    </div>

  );
};

export default LottieIsabel;