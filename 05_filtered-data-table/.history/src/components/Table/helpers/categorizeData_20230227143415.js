function categorizeData(data, categoryFieldName) {
  const categories = []

  data.forEach(item => {
    const categoryValue = item[categoryFieldName]
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
      delete item[categoryFieldName]
    } else {
      categories[index].items.push(item)
      categories[index].countTotal += 1

      const priceTotal =
        parseFloat(categories[index].priceTotal) + parseFloat(item.price)
      categories[index].priceTotal = priceTotal

      delete item[categoryFieldName]
    }
  })

  return categories
}

module.exports = categorizeData
