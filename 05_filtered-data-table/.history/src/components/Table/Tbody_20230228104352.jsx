function TBody({ key, jsxRows, classes }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <tbody key={key} className={className}>
      {jsxRows}
    </tbody>
  )
}

export default TBody
