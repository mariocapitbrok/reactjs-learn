const categorizeData = require('./categorizeData')
const { data } = require('../data')

const result = categorizeData(data)
console.log(result)

function iterate(obj) {
  let array = []
  let rows = []
  if (!Array.isArray(obj)) return //console.log('Finished...')

  array = [...obj]
  for (let i = 0; i < array.length; i++) {
    let entries = Object.entries(array[i])
    let row = entries.map(([key, value]) => key)
    rows.push(row)
  }

  console.log(rows)
}
