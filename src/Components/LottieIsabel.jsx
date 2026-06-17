import lottieReact from "lottie-react";
import animacionIsabel from "../assets/animacionisabel.json";
import { useRef } from "react";

const Lottie = lottieReact.default;

const LottieIsabel = () => {

  const LottieRef = useRef();

  const Reproducir = () => {
    LottieRef.current.play()
  }

  return (
  
    <div className="Pantalla">
      <img src="public/bbs/Fondo.png" alt="" />
      <img src="public/bbs/Nube 1.png" alt="" />
      <img src="public/bbs/Nube 2.png" alt="" />
      <img src="public/bbs/Cubo hielo.png" alt="" />
      <img src="public/bbs/Pez espinas.png" alt="" />

      <div onClick={Reproducir}>
        <Lottie
          LottieRef={LottieRef}
          animationData={animacionIsabel}
          loop={true}
          autoPlay={false}
          style={{ width: 500, height: 500 }}
        />
       </div>

    
    </div>

  );
};

export default LottieIsabel;