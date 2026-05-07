import React, { useEffect, useState } from 'react'


export const StatusGemas_Lu = () => {

  const [gemas, setGemas] = useState(0);
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {

    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();

    setCharacters(data.results);

    console.log(data);

  }

  useEffect(() => {
    getCharacters();
  }, [])

  return (
    <>
      <div> Status Luna </div>
      <h1>Gemas: {gemas}</h1>
      <div className='Gemas'>

        <button onClick={() => { setGemas(prev => prev + 1) }}>Gemas Azules🫥</button>
        <button onClick={() => { setGemas(prev => prev + 5) }}>Gemas Grises😎</button>
        <button onClick={() => { setGemas(prev => prev + 10) }}>Gemas Verdes🐞</button>
        <button onClick={() => { setGemas(prev => prev + 20) }}>Gemas Rojas😮</button>

      </div>

      <h1>Personajes Rick and Morty (Luna) </h1>
{characters.map((char, index) => (
  <li key={index}>{char.name}</li>
  
))}

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."> </img>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>

    </>
  )
}

export default StatusGemas_Lu