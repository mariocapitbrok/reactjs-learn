import { useState } from 'react'

function MyCounterButton() {
  const [count, setCount] = useState(0)

  return <button onClick={handleClick}>Clicked {count} times</button>
}

export default MyCounterButton
