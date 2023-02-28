const createUniqueId = require('./createUniqueKey')

function Tbody() {
  const key = createUniqueId()
  return <tbody key={key}>{jsxRows}</tbody>
}

export default Tbody
