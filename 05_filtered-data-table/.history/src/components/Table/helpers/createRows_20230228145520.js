import Tr from '../Tr'
import createCells from './createCells'

const createKey = require('./createKey')

function createRows(rows, isHeader = false) {
  return rows.map(row => {
    const cells = createCells(row, isHeader)
    return <Tr key={row.id || createKey()}>{cells}</Tr>
  })
}

export default createRows
