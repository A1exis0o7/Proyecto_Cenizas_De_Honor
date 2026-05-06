import React, { useState } from 'react'

export const StatusAlex = () => {

    const [vidas, setVidas] = useState(0)
  return (
    <>
    <h1> Vidas : {vidas} </h1>
    <div className='vidas'>

        <button onClick={ () => {setVidas( (prev ) =>  prev + 1 )}}>vida 1 🐞:/</button>
        <button onClick={ () => {setVidas( (prev ) =>  prev + 1 )}}>vida 2 *emoji*</button>
        <button onClick={ () => {setVidas( (prev ) =>  prev + 1 )}}>vida 3 😮</button>

    </div>
    </>
  )
}

export default StatusAlex