function Th({ key, children, classes, caption }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <th key={key} className={className} title={caption}>
      {children}
    </th>
  )
}

export default Th
