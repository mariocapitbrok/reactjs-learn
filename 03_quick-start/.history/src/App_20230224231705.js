import ShoppingList from './components/shoppingList'
import MyButton from './components/MyButton'

function MyButton() {
  return <button>I'm a button</button>
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <ShoppingList />
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  )
}

export default MyApp
