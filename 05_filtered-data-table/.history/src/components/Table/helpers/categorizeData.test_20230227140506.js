const categorizeData = require('./categorizeData')

test('categorizeData', () => {
  const data = getData()
  const result = getCategorizedData()
  expect(categorizeData(data)).toEqual(result)
})

/* const data = getData()
const categorizedData = getCategorizedData()

const result = categorizeData(data)
console.log(result) */

function getData() {
  const data = [
    { category: 'Fruits', price: 1, stocked: true, name: 'Apple' },
    { category: 'Fruits', price: 1, stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: 2, stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: 2, stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: 4, stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: 1, stocked: true, name: 'Peas' },
  ]
  return data
}

function getCategorizedData() {
  const categorizedData = [
    {
      category: 'Fruits',
      members: [
        { price: 1, stocked: true, name: 'Apple' },
        { price: 1, stocked: true, name: 'Dragonfruit' },
        { price: 2, stocked: false, name: 'Passionfruit' },
      ],
      countTotal: 3,
      priceTotal: 4,
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
  return categorizedData
}
