import SearchInput from './components/SearchInput'
import ToogleOption from './components/ToogleOption'
import Table from './components/Table'
import './App.css'

const products = require('./data/products')
const categorizeData = require('./components/Table/helpers/categorizeData')

const headers = {
  name: null,
  price: null,
}
const categories = categorizeData(products, 'category').map(i => ({
  category: `${i.category}: ${i.itemsCount}`,
  itemsCount: ``,
  items: i.items,
}))

const categoryRows = categories.map(c => {
  const { items, ...rest } = c
  items.forEach(i => i)
})

const data = [...categoryRows]
console.log(data)

function App() {
  return (
    <div className="App">
      <SearchInput />
      <ToogleOption />
      <Table id="my-table" data={data} headers={headers} />
    </div>
  )
}

export default App
