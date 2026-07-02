import React, { useRef } from "react";
import lottieReact from "lottie-react";
import animacionLeon from "../assets/AnimaciónLuna/Llanuraleón.json";

import "./StyleLlanuras.css"
import imgCielo from "../assets/Llanuras-Luna/Cielo.png";
import imgSol from "../assets/Llanuras-Luna/Sol.png";
import imgLlanura from "../assets/Llanuras-Luna/Llanura.png";
import imgNubes from "../assets/Llanuras-Luna/Nubes.png";

const Lottie = lottieReact.default;

export const Llanuras = () => {
    const leonRef = useRef(null);

    return (
        <div className="pantalla-llanuras"> 
                <img className="fondo-capa cielo" src={imgCielo} alt="Cielo" />
                <img className="fondo-capa sol" src={imgSol} alt="Sol" />
                <img className="fondo-capa llanura" src={imgLlanura} alt="Llanura" />
                
                <Lottie
                    lottieRef={leonRef}
                    animationData={animacionLeon}
                    loop={true}
                    autoplay={true}
                    style={{ width: 600, height: 600, position: 'absolute', zIndex: 10 }}
                />
           
                <img className="fondo-capa nubes" src={imgNubes} alt="Nubes" />
            </div>
    
    );
};

export default Llanuras;