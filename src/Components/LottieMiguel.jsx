import lottieReact from "lottie-react";
import animacionMiguel from "../assets/animacionmiguel.json";
import { useRef } from "react";

const Lottie = lottieReact.default;

export const LottieMiguel = () => {

    const lottieRef = useRef()
    const reproducir = () => {
        lottieRef.current.play()
    }

    return (
        <>

            <div onClick={reproducir}>
                <Lottie
                lottieRef={lottieRef}
                    animationData={animacionMiguel}
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

export default LottieMiguel;