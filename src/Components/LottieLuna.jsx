import lottieReact from "lottie-react";
import animacionLuna from "../assets/OsitoLu.json";
import { useRef } from "react";


const Lottie = lottieReact.default;

export const LottieLuna = () => {

    const lottieRef = useRef()
    const reproducir = () => {
        lottieRef.current.play()
    }

    return (
        <>

            <div onClick={reproducir}>
                <Lottie
                lottieRef={lottieRef}
                    animationData={animacionLuna}
                    loop={false}
                    autoplay={false}
                    style={{
                        width: 500,
                        heigth: 500,
                    }}
                />
            </div>
        </>

    );
};

export default LottieLuna;