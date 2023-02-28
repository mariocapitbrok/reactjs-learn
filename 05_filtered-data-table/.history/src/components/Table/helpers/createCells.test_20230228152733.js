import { render } from '@testing-library/react'
import createCells from './createCells'
import Tr from '../Tr'
import Th from '../Th'
import Td from '../Td'

describe('createCells function', () => {
  it('should render Td components when isHeader is false', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const isHeader = false
    const { container } = render(
      <table>
        <tbody>
          <tr>{createCells(row, isHeader)}</tr>
        </tbody>
      </table>
    )
    expect(container.querySelectorAll('td')).toHaveLength(3)
  })

  it('should render Th components when isHeader is true', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const isHeader = true
    const { container } = render(
      <table>
        <thead>
          <tr>{createCells(row, isHeader)}</tr>
        </thead>
      </table>
    )
    expect(container.querySelectorAll('th')).toHaveLength(3)
  })

  it('should use createKey function to generate key props', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const isHeader = true
    const { container } = render(
      <table>
        <thead>
          <tr>{createCells(row, isHeader)}</tr>
        </thead>
      </table>
    )
    expect(container.querySelector('th').getAttribute('key')).toBe(
      `${row.id}-id`
    )
  })
})
