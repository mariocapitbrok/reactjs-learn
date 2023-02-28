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
  if (!Array.isArray(obj)) return console.log('Finished...')

  array = [...obj]
  for (let i = 0; i < array.length; i++) {
    console.log(Object.keys(array[i]))
  }
}

iterate(categorizedProducts)
