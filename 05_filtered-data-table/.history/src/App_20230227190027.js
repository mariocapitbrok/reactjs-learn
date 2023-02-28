import SearchInput from './components/SearchInput'
import ToogleOption from './components/ToogleOption'
import Table from './components/Table'
import './App.css'

const products = require('./data/products')
const categorizeData = require('./components/Table/helpers/categorizeData')
categorizeData(products, 'category')
console.log(products)

function App() {
  return (
    <div className="App">
      <SearchInput />
      <ToogleOption />
      <Table id="my-table" data={products} />
    </div>
  )
}

export default App
