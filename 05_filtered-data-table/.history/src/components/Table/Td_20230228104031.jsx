const createUniqueId = require('./createUniqueKey')

function Td({ key, content, classes }) {
  return (
    <td key={key} className={classes}>
      {content}
    </td>
  )
}

export default Td
