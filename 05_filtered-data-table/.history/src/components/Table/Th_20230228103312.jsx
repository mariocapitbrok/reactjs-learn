const createUniqueId = require('./createUniqueKey')

function Th({ caption, description }) {
  const key = caption ? caption : createUniqueId()

  return (
    <th key={key} className={caption} title={description}>
      {caption}
    </th>
  )
}

export default Th
