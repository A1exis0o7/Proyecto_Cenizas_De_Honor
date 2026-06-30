import React, { useRef } from "react";
import animacionLeon from "../assets/AnimaciónLuna/Llanuraleón.json";
import Lottie from "lottie-react";

export const LottieLlanuras = () => {
    const leonRef = useRef(null);

    return (
        <div className="contenedor-personajes">
            <Lottie
                lottieRef={leonRef}
                animationData={animacionLeon}
                loop={true}
                autoplay={true}
                
            />
        </div>);
    
};