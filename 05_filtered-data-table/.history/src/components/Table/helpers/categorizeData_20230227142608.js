function categorizeData(data) {
  const categories = []

  data.forEach(item => {
    const index = categories.findIndex(
      category => category.category === item.category
    )

    if (index === -1) {
      categories.push({
        category: item.category,
        items: [item],
        countTotal: 1,
        priceTotal: item.price,
      })
      delete item.category
    } else {
      categories[index].items.push(item)
      categories[index].countTotal += 1

      const priceTotal =
        parseFloat(categories[index].priceTotal) + parseFloat(item.price)
      categories[index].priceTotal = priceTotal

      delete item.category
    }
  })

  return categories
}

module.exports = categorizeData
