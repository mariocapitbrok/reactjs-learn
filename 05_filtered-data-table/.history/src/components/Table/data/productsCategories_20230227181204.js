const PRODUCTS = require('./products')

const productsCategories = PRODUCTS.map(product => product.category).filter(
  (category, index, array) => array.indexOf(category) === index
)

module.exports = productsCategories
