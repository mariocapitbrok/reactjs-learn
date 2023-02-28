import SearchInput from './components/SearchInput.jsx'
import ToogleOption from './components/ToogleOption.jsx'
import Table from './components/Table.jsx'
import tableData from './data/tableData.js'
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
