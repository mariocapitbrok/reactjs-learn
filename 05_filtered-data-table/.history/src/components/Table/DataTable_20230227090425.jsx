import Head from './Table/Head'
import Body from './Table/Body'
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
