function ProductRow() {
  const product = {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Apple',
  }

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.priceS}</td>
    </tr>
  )
}

export default ProductRow
