import '../App.css'

function Table({ data }) {
  const tableHeaders = createTableHeaders(data)
  const tableRows = createTableRows(data)

  return (
    <table id={getTableId(data)}>
      <thead>{tableHeaders}</thead>
      <tbody>{tableRows}</tbody>
    </table>
  )
}

export default Table

function getTableId(arr) {
  const firstObj = arr[0]
  let result = ''
  let maxLength = 16

  for (const key in firstObj) {
    const firstThreeChars = key.slice(0, 3)
    result += firstThreeChars
    if (result.length >= maxLength) {
      break
    }
  }

  return result
}

function createTableHeaders(data) {
  const keys = Object.keys(data[0])
  const headerCells = keys.map(key => (
    <th key={key} className={key}>
      {key}
    </th>
  ))

  return <tr>{headerCells}</tr>
}

function createTableRows(data) {
  return data.map(row => {
    const cells = Object.entries(row).map(([key, value]) => (
      <td key={row.id ? `${row.id}-${key}` : createUniqueId()} className={key}>
        {value}
      </td>
    ))
    return <tr key={row.id || createUniqueId()}>{cells}</tr>
  })
}

function createUniqueId() {
  const randomStr = Math.random().toString(36).slice(2, 11)
  return `${randomStr}`
}
