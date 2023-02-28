import Head from './Head'
import Body from './Body'
import '../../App.css'

function DataTable({ id, data, headers }) {
  return (
    <table id={id}>
      <Head data={data} headers={headers} />
      <Body data={data} />
    </table>
  )
}

export default DataTable
