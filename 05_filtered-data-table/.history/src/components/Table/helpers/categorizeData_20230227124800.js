function categorizeData(data) {
  const categories = []

  // Loop through each item
  data.forEach(item => {
    // Find the index of the category in the categories array
    const index = categories.findIndex(
      category => category.category === item.category
    )

    // If the category doesn't exist yet, create a new one
    if (index === -1) {
      categories.push({
        category: item.category,
        items: [item],
        countTotal: 1,
        priceTotal: item.price,
      })
    } else {
      // If the category exists, add the item to its items array
      categories[index].items.push(item)
      categories[index].countTotal += 1

      // Add the price of the new item to the total price of the category
      const priceTotal =
        parseFloat(categories[index].priceTotal) + parseFloat(item.price)
      categories[index].priceTotal = priceTotal
    }
  })

  return categories
}

//module.exports = categorizeData
export default categorizeData
