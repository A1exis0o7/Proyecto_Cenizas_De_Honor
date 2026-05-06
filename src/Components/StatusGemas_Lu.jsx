import React, { useEffect, useState } from 'react'


export const StatusGemas_Lu = () => {

  const [gemas, setGemas] = useState(0);

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
      <div> Status Luna </div>
      <h1>Gemas: {gemas}</h1>
      <div className='Gemas'>

        <button onClick={() => { setGemas(prev => prev + 1) }}>Gemas Azules🫥</button>
        <button onClick={() => { setGemas(prev => prev + 5) }}>Gemas Grises😎</button>
        <button onClick={() => { setGemas(prev => prev + 10) }}>Gemas Verdes🐞</button>
        <button onClick={() => { setGemas(prev => prev + 20) }}>Gemas Rojas😮</button>

      </div>
    </>
  )
}

export default StatusGemas_Lu