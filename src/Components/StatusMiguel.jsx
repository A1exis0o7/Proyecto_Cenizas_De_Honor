import React, { useEffect, useState } from 'react'

export const StatusMiguel = () => {

      const [puntos, setPuntos] = useState(0);
      const getCharacters = async () => { 
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
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
      </>
  )
}
