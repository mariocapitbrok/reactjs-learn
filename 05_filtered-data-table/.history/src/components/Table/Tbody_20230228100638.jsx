const createUniqueId = require('./createUniqueKey')

function Tbody({ jsxRows }) {
  return <tbody key={createUniqueId()}>{jsxRows}</tbody>
}

export default Tbody
