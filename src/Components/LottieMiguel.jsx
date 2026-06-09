import lottieReact from "lottie-react";
import animacionMiguel from "../assets/animacionmiguel.json";
import { useRef } from "react";

const Lottie = lottieReact.default;

const LottieMiguel = () => {
  
  const LottieRef = useRef();

  const Reproducir = () => {
    LottieRef.current.play()
  }

  return (
    <>
      <div onClick={Reproducir}>
        <Lottie
        lottieRef={LottieRef}
        animationData={animacionMiguel}
        loop={false}
        autoPlay={false}
        style={{ width: 500, height: 500 }}
        />
      </div>
    </>
      
  );
};

export default LottieMiguel;

