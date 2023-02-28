const products = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
]

const categorizedProducts = [
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

//iterate(categorizedProducts)

function transformProducts(products) {
  const categorizedProducts = []

  // Loop through each product
  products.forEach(product => {
    // Find the index of the category in the categorizedProducts array
    const index = categorizedProducts.findIndex(
      category => category.category === product.category
    )

    // If the category doesn't exist yet, create a new one
    if (index === -1) {
      categorizedProducts.push({
        category: product.category,
        members: [product],
        countTotal: 1,
        priceTotal: product.price,
      })
    } else {
      // If the category exists, add the product to its members array
      categorizedProducts[index].members.push(product)
      categorizedProducts[index].countTotal += 1

      // Add the price of the new product to the total price of the category
      const priceTotal =
        parseFloat(categorizedProducts[index].priceTotal.slice(1)) +
        parseFloat(product.price.slice(1))
      categorizedProducts[index].priceTotal = `$${priceTotal.toFixed(2)}`
    }
  })

  return categorizedProducts
}

const result = transformProducts(products)
console.log(result)
