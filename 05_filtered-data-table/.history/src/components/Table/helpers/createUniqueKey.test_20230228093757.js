import createUniqueId from './createUniqueKey'

test('createUniqueId generates a unique ID string', () => {
  const id1 = createUniqueId()
  const id2 = createUniqueId()

  expect(id1).not.toBe(id2)
  expect(typeof id1).toBe('string')
  expect(id1.length).toBe(9)
})
