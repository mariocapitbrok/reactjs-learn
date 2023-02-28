function Head({ data }) {
  const tableHeaders = createHeaders(data)

  return <thead>{tableHeaders}</thead>
}

export default Head

function createHeaders(data) {
  const entries = Object.entries(data[0])
  const headerCells = entries.map(([key, value]) => {
    if (!Array.isArray(value)) {
      return (
        <th key={key} className={key}>
          {key}
        </th>
      )
    } else {
      return console.log('no header for an array item')
    }
  })

  return <tr>{headerCells}</tr>
}
