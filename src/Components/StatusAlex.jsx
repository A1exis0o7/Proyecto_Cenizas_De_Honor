import React, { useEffect, useState } from 'react'


export const StatusAlex = () => {

    const [vidas, setVidas] = useState(0)
    const [personajes, setPersonajes] = useState([])

    const getCharacters = async () => {
      const res = await fetch ( "https://rickandmortyapi.com/api/character" )
      const data = await res.json()
      setPersonajes(data.results)
      console.log(data);

    }


    useEffect(() => {
      getCharacters()
    }, [])



  return (
    <>
    <h1> Vidas : {vidas} </h1>
    <div className='vidas'>

        <button onClick={ () => {setVidas( (prev ) =>  prev + 1 )}}>vida 1 🐞:/</button>
        <button onClick={ () => {setVidas( (prev ) =>  prev + 2 )}}>vida 2 *emoji*</button>
        <button onClick={ () => {setVidas( (prev ) =>  prev + 3 )}}>vida 3 😮</button>

    </div>

    <h1>personajes rick and morty () </h1>

    {
      personajes.map(( p , index ) =>(
        <li key={index}>{p.name}</li>
      ))
    }

    </>
  )
}

export default StatusAlex