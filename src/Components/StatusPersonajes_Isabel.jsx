import React,{useState} from 'react';

export const StatusPersonajes_Isabel = ( ) => {

    const [personajes, setPersonajes] = useState(0);

return (
<>
<div> Status Isabel </div>
<h1>Personajes: {personajes}</h1>

<div className="personajes">
    <button onClick={() =>  {setPersonajes( prev  =>  prev + 1 )}}> personaje 1 🐞 </button>
    <button onClick={() =>  {setPersonajes( prev  =>  prev + 1 )}}>personaje 2 *emoji*</button> 
    <button onClick={() =>  {setPersonajes( prev  =>  prev + 1 )}}>personaje 3 🫠 </button>
    <button onClick={() =>  {setPersonajes( prev  =>  prev + 1 )}}>personaje 4 </button>
</div>

</>
)

}

export default StatusPersonajes_Isabel