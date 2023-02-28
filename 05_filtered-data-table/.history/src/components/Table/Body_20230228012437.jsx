function Body({ data }) {
  const tableRows = createRows(data)

  return <tbody>{tableRows}</tbody>
}

export default Body

function createRows(data) {
  return data.map(row => {
    const cells = createCells(row)
    return <tr key={row.id || createUniqueId()}>{cells}</tr>
  })
}

function createCells(row) {
  return Object.entries(row).map(([key, value]) => {
    if (!Array.isArray(value)) {
      return (
        <td
          key={row.id ? `${row.id}-${key}` : createUniqueId()}
          className={key}
        >
          {value}
        </td>
      )
    } else {
      return console.log('is an array')
    }
  })
}

function createUniqueId() {
  const randomStr = Math.random().toString(36).slice(2, 11)
  return `${randomStr}`
}
