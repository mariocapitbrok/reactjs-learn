import SearchInput from './components/SearchInput'
import ToogleOption from './components/ToogleOption'
import Table from './components/Table'
import './App.css'

const products = require('./data/products')
const categorizeData = require('./components/Table/helpers/categorizeData')

const headers = {
  namexx: 'Name description',
  pricexx: 'Price description',
}
const categories = categorizeData(products, 'category').map(i => ({
  category: i.category,
  itemsCount: `Count: ${i.itemsCount}`,
}))

const data = [...categories]
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
