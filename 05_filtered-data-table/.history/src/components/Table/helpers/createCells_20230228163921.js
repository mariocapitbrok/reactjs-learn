import Th from '../Th.jsx'
import Td from '../Td.jsx'

const createKey = require('./createKey.js')

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

export default createCells
