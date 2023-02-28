import { render } from '@testing-library/react'
import createCells from './createCells'
import Tr from '../Tr'
import Th from '../Th'
import Td from '../Td'

describe('createCells function', () => {
  it('should render Td components when isHeader is false', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const isHeader = false
    const { getByText } = render(
      <table>
        <tbody>
          <tr>{createCells(row, isHeader)}</tr>
        </tbody>
      </table>
    )
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('30')).toBeInTheDocument()
  })

  it('should render Th components when isHeader is true', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const isHeader = true
    const { getByText } = render(
      <table>
        <thead>
          <tr>{createCells(row, isHeader)}</tr>
        </thead>
      </table>
    )
    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Age')).toBeInTheDocument()
  })

  it('should use createKey function to generate key props', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const isHeader = true
    const { getByText } = render(
      <table>
        <thead>
          <tr>{createCells(row, isHeader)}</tr>
        </thead>
      </table>
    )
    expect(getByText('Name').getAttribute('key')).toBe(`${row.id}-name`)
    expect(getByText('Age').getAttribute('key')).toBe(`${row.id}-age`)
  })
})
