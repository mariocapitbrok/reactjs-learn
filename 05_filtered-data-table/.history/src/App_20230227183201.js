import SearchInput from './components/SearchInput'
import ToogleOption from './components/ToogleOption'
import Table from './components/Table'
import './App.css'

const PRODUCTS = require('./data/products')
const categorizeData = require('./components/Table/helpers/categorizeData')
const data = categorizeData(PRODUCTS, 'category')

function App() {
  return (
    <div className="App">
      <SearchInput />
      <ToogleOption />
      <Table id="my-table" data={PRODUCTS} />
    </div>
  )
}

export default App
