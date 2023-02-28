import TopMenu from './Table/TopMenu'
import '../App.css'

function Table({ id, classes, data }) {
  let className = classes ? classes : 'capitbrok'
  return (
    <>
      <TopMenu />
      <table id={id} className={className}>
        {data}
      </table>
    </>
  )
}

export default Table
