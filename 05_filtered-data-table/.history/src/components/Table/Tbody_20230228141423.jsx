function TBody({ jsxRows, children, ...restProps }) {
  return (
    <tbody {...restProps}>
      {jsxRows}
      {children}
    </tbody>
  )
}

export default TBody
