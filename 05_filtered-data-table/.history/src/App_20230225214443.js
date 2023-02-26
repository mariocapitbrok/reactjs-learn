import Table from './components/Table'
import styled from 'styled-components'
import './App.css'

function App() {
  return (
    <div className="App">
      <StyledTable />
    </div>
  )
}

export default App

const StyledTable = styled(Table).attrs(props => ({
  data: PRODUCTS,
}))``

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
]
