import styled from 'styled-components'
import '../App.css'

function Table({ data }) {
  const tableHeaders = createTableHeaders(data)

  const tableRows = createTableRows(data)

  return (
    <table>
      <thead>{tableHeaders}</thead>
      <tbody>{tableRows}</tbody>
    </table>
  )
}

export default Table

const StyledTable = styled.table.attrs(props => ({
  id: 'products',
}))``
const StyledTableHead = styled.thead.attrs(props => ({}))``
const StyledTableBody = styled.tbody.attrs(props => ({}))``
const StyledTableRow = styled.tr.attrs(props => ({}))``
const StyledTableHeader = styled.th.attrs(props => ({}))``
const StyledTableData = styled.td.attrs(props => ({}))``

function createTableHeaders(data) {
  const keys = Object.keys(data[0])
  const headerCells = keys.map(key => (
    <StyledTableHeader key={key}>{key}</StyledTableHeader>
  ))

  return <StyledTableRow>{headerCells}</StyledTableRow>
}

function createTableRows(data) {
  return data.map(row => {
    const cells = Object.entries(row).map(([key, value]) => (
      <StyledTableData key={row.id ? `${row.id}-${key}` : createUniqueId()}>
        {value}
      </StyledTableData>
    ))
    return (
      <StyledTableRow key={row.id || createUniqueId()}>{cells}</StyledTableRow>
    )
  })
}

function createUniqueId() {
  const randomStr = Math.random().toString(36).slice(2, 11)
  return `${randomStr}`
}
