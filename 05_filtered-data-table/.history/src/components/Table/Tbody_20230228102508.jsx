const createUniqueId = require('./createUniqueKey')

function TBody({ jsxRows, classes }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <tbody key={createUniqueId()} className={className}>
      {jsxRows}
    </tbody>
  )
}

export default TBody
