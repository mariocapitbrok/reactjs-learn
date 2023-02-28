function THead({ key, jsxRows, classes }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <thead key={key} className={className}>
      {jsxRows}
    </thead>
  )
}

export default THead
