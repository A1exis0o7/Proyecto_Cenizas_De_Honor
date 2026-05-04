import React, { useState } from 'react'

export const StatusMiguel = () => {

      const [puntos, setPuntos] = useState('');
   
  return (
     <>
    <div>StatusMiguel</div>
    <div className='puntos'>
        
        <button>100</button>
        <button>100 *emoji*</button>
        <button>200 😒</button>
        <button>200 😶‍🌫️🤍</button>
        
      </div>
      </>
  )
}
