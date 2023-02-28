import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faTableList } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

function TopMenu() {
  return (
    <div className="top-menu">
      <button className="densityBtn">
        <FontAwesomeIcon icon={faTableList} />
      </button>
      <button className="fullScreenBtn">
        <FontAwesomeIcon icon={faMaximize} />
      </button>
    </div>
  )
}

export default TopMenu
