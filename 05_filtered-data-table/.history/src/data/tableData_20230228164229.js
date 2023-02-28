import Caption from '../components/Table/Caption.jsx'
import THead from '../components/Table/THead.jsx'
import TBody from '../components/Table/TBody.jsx'
import TFoot from '../components/Table/TFoot.jsx'
import createRows from '../components/Table/helpers/createRows.js'
import products from './products.js'
import createKey from '../components/Table/helpers/createKey.js'
import groupData from '../components/Table/helpers/groupData.js'

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

const tableData = (
  <>
    <THead key={createKey()}>{jsxRows}</THead>
    <THead key={createKey()} jsxRows={jsxRows} />
  </>
)

export default tableData
