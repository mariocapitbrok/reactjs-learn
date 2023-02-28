function categorizeData(data, categoryField) {
  let isCategoryFieldArray = Array.isArray(categoryField)
  if (isCategoryFieldArray) {
    console.log('categoryField is an array')
  } else {
    console.log('categoryField is not an array')
  }

  const categories = []

  data.forEach(item => {
    let categoryValues = []
    if (isCategoryFieldArray) {
      categoryValues = categoryField.map(field => item[field])
    } else {
      categoryValues.push(item[categoryField])
    }

    let currentCategories = categories
    let currentCategory = null
    categoryValues.forEach(categoryValue => {
      currentCategory = currentCategories.find(
        category => category.category === categoryValue
      )
      if (!currentCategory) {
        currentCategory = {
          category: categoryValue,
          items: [],
          countTotal: 0,
          priceTotal: 0,
        }
        currentCategories.push(currentCategory)
      }
      currentCategories = currentCategory.items
    })

    currentCategory.items.push(item)
    currentCategory.countTotal += 1
    currentCategory.priceTotal += parseFloat(item.price)

    if (isCategoryFieldArray) {
      categoryField.forEach(field => delete item[field])
    } else {
      delete item[categoryField]
    }
  })

  return categories
}

module.exports = categorizeData
