import TopMenu from './Table/TopMenu'
import Head from './Table/Head'
import Body from './Table/Body'
import '../App.css'

function Table({ id, data }) {
  return (
    <>
      <TopMenu />
      <table id={id}>
        <Head data={data} />
        <Body data={data} />
      </table>
    </>
  )
}

export default Table
