import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faTableList } from '@fortawesome/free-solid-svg-icons'
import TableHead from './Table/TableHead'
import TableBody from './Table/Body'
import '../App.css'

function Table({ id, data }) {
  return (
    <>
      <div className="header-menu">
        <button className="densityBtn">
          <FontAwesomeIcon icon={faTableList} />
        </button>
        <button className="fullScreenBtn">
          <FontAwesomeIcon icon={faMaximize} />
        </button>
      </div>
      <table id={id}>
        <TableHead data={data} />
        <TableBody data={data} />
      </table>
    </>
  )
}

export default Table
