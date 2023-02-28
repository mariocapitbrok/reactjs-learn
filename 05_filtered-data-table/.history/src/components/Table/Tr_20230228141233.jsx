function Tr({ jsxCells, children, ...restProps }) {
  return (
    <tr {...restProps}>
      {jsxCells}
      {children}
    </tr>
  )
}

export default Tr
