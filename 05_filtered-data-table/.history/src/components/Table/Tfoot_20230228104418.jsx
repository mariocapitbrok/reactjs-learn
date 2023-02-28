function TFoot({ key, jsxRows, classes }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <tfoot key={key} className={className}>
      {jsxRows}
    </tfoot>
  )
}

export default TFoot
