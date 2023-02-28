import Tr from '../Tr.jsx'
import createCells from './createCells.js'
import createKey from './createKey.js'

function createRows(rows, isHeader = false) {
  return rows.map(row => {
    const cells = createCells(row, isHeader)
    return <Tr key={row.id || createKey()}>{cells}</Tr>
  })
}

export default createRows
