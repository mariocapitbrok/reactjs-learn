import { useState } from 'react'

function MyCounterButton() {
  const [count, setCount] = useState(0)

  return <button>Clicked {count} times</button>
}
