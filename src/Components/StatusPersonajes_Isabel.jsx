import React,{useState} from 'react';

export const StatusPersonajes_Isabel = ( ) => {

    const [puntos, setPuntos] = useState('');
      
return (
<>

<div className="personajes">

    <button>personaje 1 🐞 </button>
    <button>personaje 2 *emoji*</button> 
    <button>personaje 3 🫠 </button>

</div>

</>
)

}