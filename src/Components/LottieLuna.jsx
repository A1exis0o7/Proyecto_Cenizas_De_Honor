import lottieReact from "lottie-react";
import animacionLuna from "../assets/animacionLuna.json";

const Lottie = lottieReact.default;

const LottieLuna = () => {
  return (
    <Lottie
      animationData={animacionLuna}
      loop={true}
    />
  );
};

export default LottieLuna;