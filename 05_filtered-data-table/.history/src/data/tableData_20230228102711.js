import Caption from '../components/Table/Caption'
import THead from '../components/Table/THead'
import TBody from '../components/Table/TBody'
import TFoot from '../components/Table/TFoot'
import TR from '../components/Table/tr'

const products = require('./products')
const groupData = require('../components/Table/helpers/groupData')

const createUniqueId = require('./createUniqueKey')

const headers = {
  name: null,
  price: null,
}

let rows = []
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

const tableData = [
  <tbody key="1">
    <tr key="1">
      <td>Hello World</td>
    </tr>
  </tbody>,
]

export default tableData

function createTr(data) {
  return data.map(row => {
    const cells = createTd(row)
    return <tr key={row.id || createUniqueId()}>{cells}</tr>
  })
}

function createTd(row) {
  return Object.entries(row).map(([key, value]) => {
    if (!Array.isArray(value)) {
      return (
        <td
          key={row.id ? `${row.id}-${key}` : createUniqueId()}
          className={key}
        >
          {value}
        </td>
      )
    } else {
      return null
    }
  })
}
