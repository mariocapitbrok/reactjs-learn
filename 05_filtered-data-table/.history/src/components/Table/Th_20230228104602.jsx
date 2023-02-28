function Th({ key, caption, classes, description }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <th key={key} className={className} title={description}>
      {caption}
    </th>
  )
}

export default Th
