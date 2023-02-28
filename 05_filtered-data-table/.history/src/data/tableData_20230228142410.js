import Caption from '../components/Table/Caption'
import THead from '../components/Table/THead'
import TBody from '../components/Table/TBody'
import TFoot from '../components/Table/TFoot'
import Tr from '../components/Table/Tr'
import Th from '../components/Table/Th'
import Td from '../components/Table/Td'

const products = require('./products')
const groupData = require('../components/Table/helpers/groupData')
const getKey = require('../components/Table/helpers/getKey')

const headers = {
  name: null,
  price: null,
}

let rows = []
let jsxRows = []

const categories = groupData(products, 'category').map(i => ({
  category: `${i.itemsCount} ${i.category}`,
  itemsCount: ``,
  items: i.items,
}))
categories.forEach(c => {
  const { items, ...rest } = c
  rows.push({ ...rest })
  rows.push(...items.map(i => ({ name: i.name, price: i.price })))
})

jsxRows.push(...createRows(rows, false))

/* console.log(getKey())
console.log(rows)
console.log(jsxRows) */

const tableData = (
  <>
    <THead key={getKey()}>{jsxRows}</THead>
    <THead key={getKey()} jsxRows={jsxRows} />
    <tbody>
      <tr>
        <Td>Hello World</Td>
      </tr>
    </tbody>
  </>
)

export default tableData

function createRows(rows, isHeader = false) {
  return rows.map(row => {
    const cells = createCells(row, isHeader)
    return <Tr key={row.id || getKey()}>{cells}</Tr>
  })
}

function createCells(row, isHeader = false) {
  return Object.entries(row).map(([key, value]) => {
    if (!Array.isArray(value)) {
      if (isHeader) {
        return (
          <Th key={row.id ? `${row.id}-${key}` : getKey()} className={key}>
            {value}
          </Th>
        )
      } else {
        return (
          <Td key={row.id ? `${row.id}-${key}` : getKey()} className={key}>
            {value}
          </Td>
        )
      }
    } else {
      return null
    }
  })
}
