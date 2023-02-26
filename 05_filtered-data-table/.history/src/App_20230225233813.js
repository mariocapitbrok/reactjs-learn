import Table from './components/Table'
import styled from 'styled-components'
import './App.css'

function App() {
  return (
    <div className="App">
      <Table id={getTableId(data)} data={data} />
    </div>
  )
}

export default App

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
]

const data = PRODUCTS.map(p => ({
  name: p.name,
  price: p.price,
}))

function getTableId(arr) {
  const firstObj = arr[0]
  let result = ''
  let maxLength = 16

  for (const key in firstObj) {
    const firstThreeChars = key.slice(0, 3)
    result += firstThreeChars
    if (result.length >= maxLength) {
      break
    }
  }

  return result
}
