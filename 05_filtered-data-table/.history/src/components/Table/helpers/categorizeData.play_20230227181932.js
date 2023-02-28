const categorizeData = require('./categorizeData')
const fs = require('fs')

const COFFEES = require('../../../data/coffees')
const PRODUCTS = require('../../../data/products')

const result = categorizeData(PRODUCTS, 'ingredients')
console.log(result)

fs.writeFile(
  './src/tmp/result.js',
  `const result = ${JSON.stringify(result, null, 2)}\n`,
  err => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Result written to result.js')
  }
)
