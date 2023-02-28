const createUniqueId = require('./createUniqueKey')

function Tbody() {
  return <tbody key={createUniqueId()}>{jsxRows}</tbody>
}

export default Tbody
