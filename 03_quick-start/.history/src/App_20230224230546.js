import ShoppingList from './components/shoppingList'
import MyCounterButton from './components/countersThatUpdate'
import MyCounterButton from './../.history/src/components/countersThatUpdate_20230224230332'

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
    </div>
  )
}

export default MyApp
