function Td({ key, children, classes }) {
  let className = classes ? classes : 'capitbrok'

  return (
    <td key={key} className={className}>
      {children}
    </td>
  )
}

export default Td
