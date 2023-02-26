import styled from 'styled-components'

function Productrow() {
  const product = {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Apple',
  }

  return (
    <Table>
      <tr>
        <Th>Product</Th>
        <Th>Price</Th>
      </tr>
      <tr>
        <Td>{product.name}</Td>
        <Td>{product.price}</Td>
      </tr>
    </Table>
  )
}

const Table = styled.table.attrs(props => ({}))``
//const tr = styled.tr.attrs(props => ({}))``
const Th = styled.th.attrs(props => ({}))``
const Td = styled.td.attrs(props => ({}))``

export default Productrow
