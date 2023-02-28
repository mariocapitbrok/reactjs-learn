import SearchInput from './components/SearchInput'
import ToogleOption from './components/ToogleOption'
import Table from './components/Table'
import './App.css'

const products = require('./data/products')
//const categorizeData = require('./components/Table/helpers/categorizeData')
const data = products

function App() {
  return (
    <div className="App">
      <SearchInput />
      <ToogleOption />
      <Table id="my-table" data={data} />
    </div>
  )
}

export default App
