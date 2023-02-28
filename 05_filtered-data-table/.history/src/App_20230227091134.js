import SearchInput from './components/SearchInput'
import ToogleOption from './components/ToogleOption'
import Table from './components/Table'
import { dataA as dataB } from './components/Table/data'
import './App.css'

function App() {
  return (
    <div className="App">
      <SearchInput />
      <ToogleOption />
      <Table id="my-table" data={dataB} />
    </div>
  )
}

export default App
