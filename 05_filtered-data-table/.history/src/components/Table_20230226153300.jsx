import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

function Table({ id, data }) {
  const tableHeaders = createHeaders(data)
  const tableRows = createRows(data)

  return (
    <>
      <button id="densityBtn">
        <FontAwesomeIcon icon="fa-table-cells" />
      </button>
      <button id="fullScreenBtn">FS</button>
      <table id={id}>
        <thead>{tableHeaders}</thead>
        <tbody>{tableRows}</tbody>
      </table>
    </>
  )
}

export default Table

function createHeaders(data) {
  const keys = Object.keys(data[0])
  const headerCells = keys.map(key => (
    <th key={key} className={key}>
      {key}
    </th>
  ))

  return <tr>{headerCells}</tr>
}

function createRows(data) {
  return data.map(row => {
    const cells = createCells(row)
    return <tr key={row.id || createUniqueId()}>{cells}</tr>
  })
}

function createCells(row) {
  return Object.entries(row).map(([key, value]) => (
    <td key={row.id ? `${row.id}-${key}` : createUniqueId()} className={key}>
      {value}
    </td>
  ))
}

function createUniqueId() {
  const randomStr = Math.random().toString(36).slice(2, 11)
  return `${randomStr}`
}
