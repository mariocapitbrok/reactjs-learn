const data = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
]

const categorizedData = [
  {
    category: 'Fruits',
    members: [
      { price: '$1', stocked: true, name: 'Apple' },
      { price: '$1', stocked: true, name: 'Dragonfruit' },
      { price: '$2', stocked: false, name: 'Passionfruit' },
    ],
    countTotal: 3,
    priceTotal: '$4.00',
  },
  {
    category: 'Vegetables',
    members: [
      { price: '$2', stocked: true, name: 'Spinach' },
      { price: '$4', stocked: false, name: 'Pumpkin' },
      { price: '$1', stocked: true, name: 'Peas' },
    ],
    countTotal: 3,
    priceTotal: '$7.00',
  },
]

const result = categorizeData(data)
console.log(result)

function categorizeData(data) {
  const categories = []

  // Loop through each item
  data.forEach(item => {
    // Find the index of the category in the categories array
    const index = categories.findIndex(
      category => category.category === item.category
    )

    // If the category doesn't exist yet, create a new one
    if (index === -1) {
      categories.push({
        category: item.category,
        members: [item],
        countTotal: 1,
        priceTotal: item.price,
      })
    } else {
      // If the category exists, add the item to its members array
      categories[index].members.push(item)
      categories[index].countTotal += 1

      // Add the price of the new item to the total price of the category
      const priceTotal =
        parseFloat(categories[index].priceTotal.slice(1)) +
        parseFloat(item.price.slice(1))
      categories[index].priceTotal = `$${priceTotal.toFixed(2)}`
    }
  })

  return categories
}

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
