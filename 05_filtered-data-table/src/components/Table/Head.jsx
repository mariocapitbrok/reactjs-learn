function Head({ data }) {
  const tableHeaders = createHeaders(data)

  return <thead>{tableHeaders}</thead>
}

export default Head

function createHeaders(data) {
  const keys = Object.keys(data[0])
  const headerCells = keys.map(key => (
    <th key={key} className={key}>
      {key}
    </th>
  ))

  return <tr>{headerCells}</tr>
}
