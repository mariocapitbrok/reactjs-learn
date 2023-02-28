import { render, screen } from '@testing-library/react'
import createCells from './createCells'

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

  it('when no id field, should use createKey function to generate key props', () => {
    const row = { name: 'John Doe', age: 30 }
    const isHeader = true
    render(
      <table>
        <thead>
          <tr>{createCells(row, isHeader)}</tr>
        </thead>
      </table>
    )
    expect(screen.getByText('John Doe').getAttribute('key')).toBe(
      `${row.key}-name`
    )
    expect(screen.getByText('30').getAttribute('key')).toBe(`${row.key}-age`)
  })
})
