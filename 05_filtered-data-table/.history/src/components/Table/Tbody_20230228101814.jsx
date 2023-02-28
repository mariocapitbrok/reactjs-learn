const createUniqueId = require('./createUniqueKey')

function Tbody({ jsxRows, classes }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <tbody key={createUniqueId()} className={className}>
      {jsxRows}
    </tbody>
  )
}

export default Tbody
