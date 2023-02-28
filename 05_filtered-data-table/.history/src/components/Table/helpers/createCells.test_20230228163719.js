import { render, screen } from '@testing-library/react'
import createCells from './createCells.js'

describe('createCells function', () => {
  it('should render Td components when isHeader is false', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const isHeader = false
    render(
      <table>
        <tbody>
          <tr>{createCells(row, isHeader)}</tr>
        </tbody>
      </table>
    )
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
  })

  it('should render Th components when isHeader is true', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const isHeader = true
    render(
      <table>
        <thead>
          <tr>{createCells(row, isHeader)}</tr>
        </thead>
      </table>
    )
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
  })

  it('when there is id field, should use it to generate key', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const data = createCells(row)
    expect(data[0].key).toBe('1-id')
  })

  it('when NO id field use createKey() for a string key of length 9', () => {
    const row = { name: 'John Doe', age: 30 }
    const data = createCells(row)
    const createdId = data[0].key
    expect(typeof createdId).toBe('string')
    expect(createdId.length).toBe(9)
  })
})
