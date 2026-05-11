import React, { useEffect, useState } from 'react';

export const StatusPersonajes_Isabel = () => {

    const [personajes, setPersonajes] = useState(0);


    const getCharacters = async () => {

        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();

        console.log(data);

    }

    useEffect(() => {
        getCharacters();
    }, [])

    return (
        <>
            <div> Status Isabel </div>
            <h1>Personajes: {personajes}</h1>

            <div className="personajes">
                <button onClick={() => { setPersonajes(prev => prev + 1) }}> personaje 1 🐞 </button>
                <button onClick={() => { setPersonajes(prev => prev + 1) }}>personaje 2 *emoji*</button>
                <button onClick={() => { setPersonajes(prev => prev + 1) }}>personaje 3 🫠 </button>
                <button onClick={() => { setPersonajes(prev => prev + 1) }}>personaje 4 </button>
            </div>

            <h1>Personajes rick and morty (Isabel)</h1>

            {characters.map((char, index) => (
                <li key={index}>{char.name}</li>
            ))}
            
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>

        </>
    )

}

export default StatusPersonajes_Isabel