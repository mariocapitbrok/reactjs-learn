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
        itemsCount: 1,
      })

      delete item[categoryFieldName]
    } else {
      categories[index].items.push(item)
      categories[index].itemsCount += 1

      delete item[categoryFieldName]
    }
  })

  return categories
}

module.exports = categorizeData
