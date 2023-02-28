const products = require('./data/products')
const groupData = require('./components/Table/helpers/groupData')

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

const data = [...rows]

module.exports = data
