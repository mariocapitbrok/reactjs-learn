import TopMenu from './Table/TopMenu'
import DataTable from './Table/DataTable'
import '../App.css'

function Table({ id, data, headers }) {
  return (
    <>
      <TopMenu />
      <DataTable id={id} data={data} headers={headers} />
    </>
  )
}

export default Table
