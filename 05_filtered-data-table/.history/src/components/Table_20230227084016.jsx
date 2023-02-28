import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faTableList } from '@fortawesome/free-solid-svg-icons'
import Head from './Table/Head'
import Body from './Table/Body'
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
        <Head data={data} />
        <Body data={data} />
      </table>
    </>
  )
}

export default Table
