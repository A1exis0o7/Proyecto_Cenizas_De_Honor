import React, { useState } from 'react'

export const StatusAlex = () => {

    const [vidas, setVidas] = useState("")
  return (
    <>
    <div className='vidas'>

        <button>vida 1 🐞:/</button>
        <button>vida 2 *emoji*</button>
        <button>vida 3 😮</button>

    </div>
    </>
  )
}

export default StatusAlex