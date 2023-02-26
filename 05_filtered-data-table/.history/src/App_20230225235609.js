import Table from './components/Table'
import styled from 'styled-components'
import './App.css'

function App() {
  return (
    <div className="App">
      <Table data={data} />
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
  price: parseFloat(p.price.slice(1)).toFixed(2),
}))
