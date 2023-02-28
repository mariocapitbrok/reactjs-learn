function Td({ value, children, ...restProps }) {
  return (
    <th {...restProps}>
      {value}
      {children}
    </th>
  )
}

export default Td
