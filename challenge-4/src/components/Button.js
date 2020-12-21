import React, { useState } from 'react'

const Button = () => {

  const [colour, setColour] = useState('black')

  return (
    <div style={{ height: '100px', width: '100px', backgroundColor: colour }}>
      <button onClick={() => setColour('black')}>black</button>
      <button onClick={() => setColour('blue')}>blue</button>
    </div>
  )
}

export default Button