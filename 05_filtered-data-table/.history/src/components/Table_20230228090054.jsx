import TopMenu from './Table/TopMenu'
import DataTable from './Table/DataTable'
import '../App.css'

function Table({ id, data }) {
  return (
    <>
      <TopMenu />
      <DataTable id={id} data={data} />
    </>
  )
}

export default Table
