import Tr from '../Tr'

const createCells = require('./createCells')
const createKey = require('./createKey')

function createRows(rows, isHeader = false) {
  return rows.map(row => {
    const cells = createCells(row, isHeader)
    return <Tr key={row.id || createKey()}>{cells}</Tr>
  })
}

module.exports = createRows
