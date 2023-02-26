import styled from 'styled-components'
import '../App.css'

function ProductTable({ products }) {
  const tableRows = products.map(product => (
    <Tr key={product.name}>
      <Td>{product.name}</Td>
      <TdPrice>{product.price}</TdPrice>
    </Tr>
  ))

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Product</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody>{tableRows}</Tbody>
    </Table>
  )
}

export default ProductTable

const Table = styled.table.attrs(props => ({
  id: 'products',
}))``
const Thead = styled.thead.attrs(props => ({}))``
const Tbody = styled.tbody.attrs(props => ({}))``
const Tr = styled.tr.attrs(props => ({}))``
const Th = styled.th.attrs(props => ({}))``
const Td = styled.td.attrs(props => ({}))``

const TdPrice = styled(Td).attrs({
  className: 'money-data',
})``