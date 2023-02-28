import Caption from '../components/Table/Caption'
import THead from '../components/Table/THead'
import TBody from '../components/Table/TBody'
import TFoot from '../components/Table/TFoot'
import Tr from '../components/Table/Tr'
import Th from '../components/Table/Th'
import Td from '../components/Table/Td'

const products = require('./products')
const groupData = require('../components/Table/helpers/groupData')
const createUniqueKey = require('../components/Table/helpers/createUniqueKey')

const headers = {
  name: null,
  price: null,
}

let rows = []
let jsxHeaderRows = []

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

jsxHeaderRows.push(...createRows(rows, true))

/* console.log(createUniqueKey())
console.log(rows)
console.log(jsxHeaderRows) */

const tableData = (
  <>
    <THead>{jsxHeaderRows}</THead>
    <THead jsxRows={jsxHeaderRows} />
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
    return <tr key={row.id || createUniqueKey()}>{cells}</tr>
  })
}

function createCells(row, isHeader = false) {
  return Object.entries(row).map(([key, value]) => {
    if (!Array.isArray(value)) {
      if (isHeader) {
        return (
          <th
            key={row.id ? `${row.id}-${key}` : createUniqueKey()}
            className={key}
          >
            {value}
          </th>
        )
      } else {
        return (
          <td
            key={row.id ? `${row.id}-${key}` : createUniqueKey()}
            className={key}
          >
            {value}
          </td>
        )
      }
    } else {
      return null
    }
  })
}
