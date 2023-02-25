import ShoppingList from './components/shoppingList'

function MyButton() {
  return <button>I'm a button</button>
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <ShoppingList />
    </div>
  )
}

export default MyApp
