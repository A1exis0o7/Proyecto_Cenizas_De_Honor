import lottieReact from "lottie-react";
import animacionMiguel from "../assets/OsoMiguel.json";
import { useRef } from "react";

const Lottie = lottieReact.default;

const LottieMiguel = () => {
  const lottieRef = useRef(null);

  const reproducir = () => {
    lottieRef.current?.goToAndPlay(0, true);
  };

  return (
    <div onClick={reproducir}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animacionMiguel}
        loop={false}
        autoplay={false}
        style={{
          width: 500,
          height: 500,
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default LottieMiguel;