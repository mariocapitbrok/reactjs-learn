function groupData(data, categoryFieldName) {
  const categories = []

  data.forEach(item => {
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
      } else {
        categories[index].items.push(item)
        categories[index].itemsCount += 1
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
        } else {
          categories[index].items.push(item)
          categories[index].itemsCount += 1
        }
      })
    }
  })

  const categoriesB = categories.map(category => ({
    ...category,
    items: category.items.map(item => {
      const { [categoryFieldName]: ignored, ...rest } = item
      return rest
    }),
  }))

  return categoriesB
}

export default groupData
