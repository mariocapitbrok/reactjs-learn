import TopMenu from './Table/TopMenu'
import Table from './Table/Table'
import '../App.css'

function Table({ id, data }) {
  return (
    <>
      <TopMenu />
      <Table id={id} data={data} />
    </>
  )
}

export default Table
