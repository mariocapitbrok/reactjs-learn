import { useState } from 'react'

function Square() {
  const [value, setValue] = useState(null)

  function handleClick() {
    console.log(`clicked ${value}!`)
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  )
}

export default Square
