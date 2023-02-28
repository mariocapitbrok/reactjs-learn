const createUniqueId = require('./createUniqueKey')

function Th({ caption, description }) {
  const key = createUniqueId()

  return (
    <th key={caption} className={caption} title={description}>
      {caption}
    </th>
  )
}

export default Th
