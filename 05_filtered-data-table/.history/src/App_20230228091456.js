import SearchInput from './components/SearchInput'
import ToogleOption from './components/ToogleOption'
import Table from './components/Table'
import './App.css'

const data = [
  <tbody>
    <tr key="1">
      <td>Hello World</td>
    </tr>
  </tbody>,
]

console.log(data)

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
