const categorizeData = require('./categorizeData')

test('with a flat array of objects', () => {
  const data = getData()
  const sample = getCategorizedData()
  const result = categorizeData(data, 'category')

  expect(result).toEqual(sample)
})

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
      items: [
        { price: 1, stocked: true, name: 'Apple' },
        { price: 1, stocked: true, name: 'Dragonfruit' },
        { price: 2, stocked: false, name: 'Passionfruit' },
      ],
      itemsCount: 3,
    },
    {
      category: 'Vegetables',
      items: [
        { price: 2, stocked: true, name: 'Spinach' },
        { price: 4, stocked: false, name: 'Pumpkin' },
        { price: 1, stocked: true, name: 'Peas' },
      ],
      itemsCount: 3,
    },
  ]
  return categorizedData
}
