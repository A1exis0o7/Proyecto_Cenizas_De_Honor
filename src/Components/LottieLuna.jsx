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

    const LanzarHielo = () => {
        PinguRef.current.playSegments([0,20], true)
    }

     const LanzarPez = () => {
        PinguRef.current.playSegments([20,50], true)
    }
    return (
        <>

            <div className="pantalla">
                <img className="position-absolute fondo" src="./public/bbs/Fondo.png" alt="" />
                <img className="position-absolute nube1" src="./public/bbs/Nube 1.png" alt="" />
                <img className="position-absolute nube2" src="./public/bbs/Nube 2.png" alt="" />
                <img onClick={LanzarHielo} className="position-absolute cubo-hielo" src="./public/bbs/Cubo hielo.png" alt="" />
                <img onClick={LanzarPez} className="position-absolute pez-espinas" src="./public/bbs/Pez espinas.png" alt="" />
                <img className="position-absolute iglu" src="./public/bbs/Iglu.png" alt="" />


                <div className="position-absolute osito-luna" onClick={reproducir}>
                    <Lottie
                        lottieRef={lottieRef}
                        animationData={animacionLuna}
                        loop={false}
                        autoplay={false}
                        style={{
                            width: 300,
                            height: 300,
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
                            width: 100,
                            height: 100,
                        }}
                    />
                </div>
            </div>


        </>)
};

export default LottieLuna;