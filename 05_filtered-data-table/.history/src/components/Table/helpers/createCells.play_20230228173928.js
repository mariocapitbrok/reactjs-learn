const createCells = require('esm')('./createCells.js')

const row = { id: 1, name: 'John Doe', age: 30 }
const isHeader = false

const result = createCells(row, isHeader)
console.log(result)
