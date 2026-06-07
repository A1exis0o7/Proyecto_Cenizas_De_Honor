import lottieReact from "lottie-react";
import animacionMiguel from "../assets/animacionmiguel.json";

const Lottie = lottieReact.default;

const LottieMiguel = () => {
  return (
    <Lottie
      animationData={animacionMiguel}
      loop={true}
    />
  );
};

export default LottieMiguel;