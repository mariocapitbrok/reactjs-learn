function Head({ data, headers }) {
  const tableHeaders = createHeaders(data, headers)

  return <thead>{tableHeaders}</thead>
}

export default Head

function createHeaders(data, headers) {
  if (headers) {
    const headerCells = Object.keys(headers).map(key => (
      <th key={key} className={key}>
        {key}
      </th>
    ))

    return <tr>{headerCells}</tr>
  } else {
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
}
