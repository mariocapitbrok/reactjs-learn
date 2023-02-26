import styled from 'styled-components'
import '../App.css'

function Table({ data }) {
  const tableHeaders = createTableHeaders(data)

  const tableRows = data.map(row => {
    const cells = Object.values(row).map((value, i) => <td key={i}>{value}</td>)
    return <StyledTableRow key={row.name}>{cells}</StyledTableRow>
  })

  return (
    <StyledTable>
      <StyledTableHead>{tableHeaders}</StyledTableHead>
      <StyledTableBody>{tableRows}</StyledTableBody>
    </StyledTable>
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
const Td = styled.td.attrs(props => ({}))``

const TdPrice = styled(Td).attrs({
  className: 'money-data',
})``

function createTableHeaders(data) {
  const keys = Object.keys(data[0])
  const headerCells = keys.map(key => (
    <StyledTableHeader key={key}>{key}</StyledTableHeader>
  ))

  return <StyledTableRow>{headerCells}</StyledTableRow>
}
