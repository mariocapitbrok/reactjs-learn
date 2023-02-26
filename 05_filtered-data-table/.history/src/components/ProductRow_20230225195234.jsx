function ProductRow() {
  const product = {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Apple',
  }

  return (
    <table id="products">
      <tr>
        <th>Product</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </table>
  )
}

export default ProductRow
