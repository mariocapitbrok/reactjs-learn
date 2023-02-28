const createUniqueId = require('./createUniqueKey')

function THead({ jsxRows, classes }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <thead key={createUniqueId()} className={className}>
      {jsxRows}
    </thead>
  )
}

export default THead
