import styled from 'styled-components'

function ProducTrow() {
  const product = {
    category: 'Fruits',
    price: '$1',
    stocked: True,
    name: 'Apple',
  }

  return (
    <Table>
      <Tr>
        <Th>Product</Th>
        <Th>Price</Th>
      </Tr>
      <Tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </Tr>
    </Table>
  )
}

const Table = styled.table.attrs(props => ({
  id: 'products',
}))
const Tr = styled.tr.attrs(props => ({}))
const Td = styled.td.attrs(props => ({}))

export default ProducTrow
