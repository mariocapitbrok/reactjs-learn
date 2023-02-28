const createUniqueId = require('./createUniqueKey')

function Caption({ caption, classes }) {
  const className = classes ? classes : 'capitbrok'
  return (
    <caption key={createUniqueId()} className={className}>
      {caption}
    </caption>
  )
}

export default Caption
