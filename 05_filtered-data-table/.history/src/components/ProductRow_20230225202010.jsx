import styled from 'styled-components'

function ProducTrow() {
  const product = {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Apple',
  }

  return (
    <Table>
      <Tr>
        <Th>Product</Th>
        <Th>Price</Th>
      </Tr>
      <Tr>
        <Td>{product.name}</Td>
        <Td>{product.price}</Td>
      </Tr>
    </Table>
  )
}

const Table = styled.table.attrs(props => ({
  id: 'products',
}))
const Tr = styled.tr.attrs(props => ({}))
const Th = styled.th.attrs(props => ({}))
const Td = styled.td.attrs(props => ({}))

export default ProducTrow
