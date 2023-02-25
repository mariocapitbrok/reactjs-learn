import { useState } from 'react'
import ShoppingList from './components/shoppingList'
import MyButton from './components/MyButton'

function MyApp() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
      <ShoppingList />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  )
}

export default MyApp
