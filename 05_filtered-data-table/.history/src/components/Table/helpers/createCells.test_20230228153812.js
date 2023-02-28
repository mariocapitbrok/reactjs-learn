import { render, screen } from '@testing-library/react'
import createCells from './createCells'
import THead from '../THead'
import TBody from '../TBody'
import TFoot from '../TFoot'
import Tr from '../Tr'
import Th from '../Th'
import Td from '../Td'

describe('createCells function', () => {
  it('should render Td components when isHeader is false', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const isHeader = false
    render(
      <table>
        <tbody>
          <Tr>{createCells(row, isHeader)}</Tr>
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
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Age')).toBeInTheDocument()
  })

  it('should use createKey function to generate key props', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const isHeader = true
    render(
      <table>
        <thead>
          <tr>{createCells(row, isHeader)}</tr>
        </thead>
      </table>
    )
    expect(screen.getByText('Name').getAttribute('key')).toBe(`${row.id}-name`)
    expect(screen.getByText('Age').getAttribute('key')).toBe(`${row.id}-age`)
  })
})
