function categorizeData(data, categoryField) {
  if (Array.isArray(categoryField)) {
    console.log('categoryField is an array')
  } else {
    console.log('categoryField is not an array')
  }

  const categories = []

  data.forEach(item => {
    const index = categories.findIndex(
      category => category.category === item[categoryField]
    )

    if (index === -1) {
      categories.push({
        category: item[categoryField],
        items: [item],
        countTotal: 1,
        priceTotal: item.price,
      })
      delete item[categoryField]
    } else {
      categories[index].items.push(item)
      categories[index].countTotal += 1

      const priceTotal =
        parseFloat(categories[index].priceTotal) + parseFloat(item.price)
      categories[index].priceTotal = priceTotal

      delete item[categoryField]
    }
  })

  return categories
}

module.exports = categorizeData
