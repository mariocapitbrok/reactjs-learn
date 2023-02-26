import styled from 'styled-components'
import '../App.css'

function ProductRow() {
  return (
    <>
      <Tr>
        <Td>{product.name}</Td>
        <TdPrice>{product.price}</TdPrice>
      </Tr>
    </>
  )
}

export default ProductRow

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

const product = {
  category: 'Fruits',
  price: '$1',
  stocked: true,
  name: 'Apple',
}
