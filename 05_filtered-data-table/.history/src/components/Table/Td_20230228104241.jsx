function Td({ key, content, classes }) {
  let className = classes ? classes : 'capitbrok'

  return (
    <td key={key} className={className}>
      {content}
    </td>
  )
}

export default Td
