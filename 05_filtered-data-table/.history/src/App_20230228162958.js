import SearchInput from './components/SearchInput.jsx'
import ToogleOption from './components/ToogleOption'
import Table from './components/Table'
import tableData from './data/tableData'
import './App.css'

function App() {
  return (
    <div className="App">
      <SearchInput />
      <ToogleOption />
      <Table id="my-table" data={tableData} />
    </div>
  )
}

export default App
