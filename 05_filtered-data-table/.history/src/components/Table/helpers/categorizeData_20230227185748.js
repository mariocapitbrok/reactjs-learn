function categorizeData(data, categoryFieldName) {
  let dataClone = Object.assign({}, data)
  const categories = []

  dataClone.forEach(item => {
    const categoryValue = item[categoryFieldName]

    if (!Array.isArray(categoryValue)) {
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
    } else {
      categoryValue.forEach(value => {
        const index = categories.findIndex(
          category => category.category === value
        )

        if (index === -1) {
          categories.push({
            category: value,
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
    }
  })

  return categories
}

module.exports = categorizeData
