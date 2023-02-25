import ShoppingList from './components/shoppingList'
import MyCounterButton from './components/countersThatUpdate'

function MyButton() {
  return <button>I'm a button</button>
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <ShoppingList />
      <MyCounterButton />
      <MyCounterButton />
      <MyCounterButton />
    </div>
  )
}

export default MyApp
