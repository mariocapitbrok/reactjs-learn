function TFoot({ jsxRows, children, ...restProps }) {
  return (
    <tfoot {...restProps}>
      {jsxRows}
      {children}
    </tfoot>
  )
}

export default TFoot
