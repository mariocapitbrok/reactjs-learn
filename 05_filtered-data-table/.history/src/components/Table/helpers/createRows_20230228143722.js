import Tr from '../Tr'
import Th from '../Th'
import Td from '../Td'

const createKey = require('./createKey')

function createRows(rows, isHeader = false) {
  return rows.map(row => {
    const cells = createCells(row, isHeader)
    return <Tr key={row.id || createKey()}>{cells}</Tr>
  })
}

function createCells(row, isHeader = false) {
  return Object.entries(row).map(([key, value]) => {
    if (!Array.isArray(value)) {
      if (isHeader) {
        return (
          <Th key={row.id ? `${row.id}-${key}` : createKey()} className={key}>
            {value}
          </Th>
        )
      } else {
        return (
          <Td key={row.id ? `${row.id}-${key}` : createKey()} className={key}>
            {value}
          </Td>
        )
      }
    } else {
      return null
    }
  })
}

module.exports = createRows
