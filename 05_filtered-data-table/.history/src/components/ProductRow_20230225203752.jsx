import styled from 'styled-components'
import '../App.css'

function ProducTrow() {
  const product = {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Apple',
  }

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Product</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{product.name}</Td>
          <Td>{product.price}</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default ProducTrow

const Table = styled.table.attrs(props => ({
  id: 'products',
}))``
const Thead = styled.thead.attrs(props => ({}))``
const Tbody = styled.tbody.attrs(props => ({}))``
const Tr = styled.tr.attrs(props => ({}))``
const Th = styled.th.attrs(props => ({}))``
const Td = styled.td.attrs(props => ({}))``

const ThPrice = styled(Th).attrs({
  class: 'price-header',
})``
