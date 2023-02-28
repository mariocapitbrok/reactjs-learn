function THead({ key, jsxHRows, classes }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <thead key={key} className={className}>
      {jsxHRows}
    </thead>
  )
}

export default THead
