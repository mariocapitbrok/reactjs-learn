function Head({ data, headers = {} }) {
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
      return null
    }
  })

  return <tr>{headerCells}</tr>
}
