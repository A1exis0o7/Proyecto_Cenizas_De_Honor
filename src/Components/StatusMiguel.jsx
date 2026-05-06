import React, { useState } from 'react'

export const StatusMiguel = () => {

      const [puntos, setPuntos] = useState(0);
   
  return (
     <>
      <h1>Puntos: {puntos}</h1>
    <div className='puntos'>
        
        <button onClick={ () => {setPuntos ((prev) => {prev + 100})}}>100</button>
        <button onClick={ () => {setPuntos ((prev) => {prev + 100})}}>100 *emoji*</button>
        <button onClick={ () => {setPuntos ((prev) => {prev + 200})}}>200 😒</button>
        <button onClick={ () => {setPuntos ((prev) => {prev + 200})}}>200 😶‍🌫️🤍</button>
      </div>
      </>
  )
}
