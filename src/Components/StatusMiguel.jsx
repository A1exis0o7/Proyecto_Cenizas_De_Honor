import React, { useEffect, useState } from 'react'

export const StatusMiguel = () => {

      const [puntos, setPuntos] = useState(0);
            const [characters, setCharacters] = useState([]);
      const getCharacters = async () => { 
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        setCharacters(data.results);
        console.log(data);
      }
      
      useEffect(() => {
        getCharacters()
      
      }, [])
      
   
  return (
     <>
      <h1>Puntos: {puntos}</h1>
    <div className='puntos'>
        
        <button onClick={ () => {setPuntos (prev => prev + 100)}}>100</button>
        <button onClick={ () => {setPuntos (prev => prev + 100)}}>100 *emoji*</button>
        <button onClick={ () => {setPuntos (prev => prev + 200)}}>200 😒</button>
        <button onClick={ () => {setPuntos (prev => prev + 200)}}>200 😶‍🌫️🤍</button>

      </div>
      <h1>Personajes rick and morty (miguel)</h1>
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
