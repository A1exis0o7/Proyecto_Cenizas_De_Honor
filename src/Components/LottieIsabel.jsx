import lottieReact from "lottie-react";
import animacionIsabel from "../assets/animacionisabel.json";

const Lottie = lottieReact.default;

const LottieIsabel = () => {
  return (
    <Lottie
      animationData={animacionIsabel}
      loop={true}
    />
  );
};

export default LottieIsabel;