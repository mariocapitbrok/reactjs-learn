import Caption from '../components/Table/Caption'
import THead from '../components/Table/THead'
import TBody from '../components/Table/TBody'
import TFoot from '../components/Table/TFoot'

const products = require('./products')
const groupData = require('../components/Table/helpers/groupData')
const createKey = require('../components/Table/helpers/createKey')
const createRows = require('../components/Table/helpers/createRows')

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
