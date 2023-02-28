const products = require('./products')
const groupData = require('../components/Table/helpers/groupData')

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

function createUniqueId() {
  const randomStr = Math.random().toString(36).slice(2, 11)
  return `${randomStr}`
}
