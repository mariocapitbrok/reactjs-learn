function Td({ value, children, ...restProps }) {
  return (
    <td {...restProps}>
      {value}
      {children}
    </td>
  )
}

export default Td
