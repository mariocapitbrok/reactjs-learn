function createKey() {
  const randomStr = Math.random().toString(36).slice(2, 11)
  return `${randomStr}`
}

module.exports = createKey
