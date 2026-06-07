import lottieReact from "lottie-react";
import animacionAlexis from "../assets/data.json";

const Lottie = lottieReact.default;

const LottieAlexis = () => {
  return (
    <Lottie
      animationData={animacionAlexis}
      loop={true}
    />
  );
};

export default LottieAlexis;