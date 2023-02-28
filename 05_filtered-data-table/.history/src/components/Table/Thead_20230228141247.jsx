function THead({ jsxRows, children, ...restProps }) {
  return (
    <thead {...restProps}>
      {jsxRows}
      {children}
    </thead>
  )
}

export default THead
