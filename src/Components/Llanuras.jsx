import React from "react";
import { LottieLlanuras } from "./LottieLlanuras"; 
import "../Components/StyleLlanuras.css";

import imgCielo from "../assets/Llanuras-Luna/Cielo.png";
import imgSol from "../assets/Llanuras-Luna/Sol.png";
import imgLlanura from "../assets/Llanuras-Luna/Llanura.png";
import imgNubes from "../assets/Llanuras-Luna/Nubes.png";

export const Llanuras = () => {
    return (
        <div className="pantalla-llanuras">
            <img className="fondo-capa cielo" src={imgCielo} alt="Cielo" />
            <img className="fondo-capa sol" src={imgSol} alt="Sol" />
            <img className="fondo-capa llanura" src={imgLlanura} alt="Llanura" />
            <img className="fondo-capa nubes" src={imgNubes} alt="Nubes" />
            
            <LottieLlanuras />
        </div>
    );
};

export default Llanuras;