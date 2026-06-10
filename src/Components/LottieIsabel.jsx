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

    <>
      <div onClick={Reproducir}>

        <Lottie
          LottieRef={LottieRef}
          animationData={animacionIsabel}
          loop={true}
          autoPlay={false}
          style={{ width: 500, height: 500 }}
        />
        
      </div>

    </>

  );
};

export default LottieIsabel;