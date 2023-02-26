import styled from 'styled-components'
import '../App.css'

function Table({ products }) {
  const tableRows = products.map(product => (
    <StyledTableRow key={product.name}>
      <Td>{product.name}</Td>
      <TdPrice>{product.price}</TdPrice>
    </StyledTableRow>
  ))

  return (
    <StyledTable>
      <StyledTableHead>
        <StyledTableRow>
          <StyledTableHeader>Product</StyledTableHeader>
          <StyledTableHeader>Price</StyledTableHeader>
        </StyledTableRow>
      </StyledTableHead>
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
