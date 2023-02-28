function categorizeData(data, categoryField) {
  const categories = []

  data.forEach(item => {
    const categoryValue = item[categoryField]
    const index = categories.findIndex(
      category => category.category === categoryValue
    )

    if (index === -1) {
      categories.push({
        category: categoryValue,
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
