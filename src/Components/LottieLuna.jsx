import lottieReact from "lottie-react";
import animacionLuna from "../assets/OsitoLu.json";
import animacionAndres from "../assets/pinguinoAndres.json";
import "./StyleLuna.css";
import { useRef } from "react";


const Lottie = lottieReact.default;

export const LottieLuna = () => {
    const PinguRef = useRef()
    const lottieRef = useRef()
    const reproducir = () => {
        lottieRef.current.stop()
        lottieRef.current.play()
    }

        const reproducirPingu = () => {
        PinguRef.current.stop()
        PinguRef.current.play()
    }

    return (
        <>

            <div className="pantalla">
                <img className="position-absolute fondo" src="./public/bbs/Fondo.png" alt="" />
                <img className="position-absolute nube1" src="./public/bbs/Nube 1.png" alt="" />
                <img className="position-absolute nube2" src="./public/bbs/Nube 2.png" alt="" />
                <img className="position-absolute cubo-hielo" src="./public/bbs/Cubo hielo.png" alt="" />
                <img className="position-absolute pez-espinas" src="./public/bbs/Pez espinas.png" alt="" />
                <img className="position-absolute iglu" src="./public/bbs/Iglu.png" alt="" />


                <div className="position-absolute osito-luna" onClick={reproducir}>
                    <Lottie
                        lottieRef={lottieRef}
                        animationData={animacionLuna}
                        loop={false}
                        autoplay={false}
                        style={{
                            width: 400,
                            height: 400,
                        }}
                    />
                </div>

                <div className="position-absolute pingu" onClick={reproducirPingu}>

                    <Lottie
                        lottieRef={PinguRef}
                        animationData={animacionAndres}
                        loop={false}
                        autoplay={false}
                        style={{
                            width: 200,
                            height: 200,
                        }}
                    />
                </div>
            </div>


        </>)
};

export default LottieLuna;