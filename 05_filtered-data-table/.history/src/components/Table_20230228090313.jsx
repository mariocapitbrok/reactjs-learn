import TopMenu from './Table/TopMenu'
import DataTable from './Table/DataTable'
import '../App.css'

function Table({ id, data }) {
  return (
    <>
      <TopMenu />
      <table id={id}>{data}</table>
    </>
  )
}

export default Table
