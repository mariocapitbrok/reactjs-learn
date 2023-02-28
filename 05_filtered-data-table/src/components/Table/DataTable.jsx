import Head from './Head'
import Body from './Body'
import '../../App.css'

function DataTable({ id, data }) {
  return (
    <table id={id}>
      <Head data={data} />
      <Body data={data} />
    </table>
  )
}

export default DataTable
