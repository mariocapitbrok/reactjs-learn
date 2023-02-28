function Th({ key, content, classes, caption }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <th key={key} className={className} title={caption}>
      {content}
    </th>
  )
}

export default Th
