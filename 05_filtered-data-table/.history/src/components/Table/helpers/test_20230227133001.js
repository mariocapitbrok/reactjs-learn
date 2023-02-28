//const categorizeData = require('./categorizeData')
const categorizeData = require('./categorizeData')

const data = [
  { category: 'Fruits', price: 1, stocked: true, name: 'Apple' },
  { category: 'Fruits', price: 1, stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: 2, stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: 2, stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: 4, stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: 1, stocked: true, name: 'Peas' },
]

const categorizedData = [
  {
    category: 'Fruits',
    members: [
      { price: 1, stocked: true, name: 'Apple' },
      { price: 1, stocked: true, name: 'Dragonfruit' },
      { price: 2, stocked: false, name: 'Passionfruit' },
    ],
    countTotal: 3,
    priceTotal: '$4.00',
  },
  {
    category: 'Vegetables',
    items: [
      { price: 2, stocked: true, name: 'Spinach' },
      { price: 4, stocked: false, name: 'Pumpkin' },
      { price: 1, stocked: true, name: 'Peas' },
    ],
    countTotal: 3,
    priceTotal: 7,
  },
]

const result = categorizeData(data)
console.log(result)

function iterate(obj) {
  let array = []
  let rows = []
  if (!Array.isArray(obj)) return //console.log('Finished...')

  array = [...obj]
  for (let i = 0; i < array.length; i++) {
    let entries = Object.entries(array[i])
    let row = entries.map(([key, value]) => key)
    rows.push(row)
  }

  console.log(rows)
}
