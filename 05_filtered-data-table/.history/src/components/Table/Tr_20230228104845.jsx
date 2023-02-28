function Tr({ key, jsxCells, classes }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <tr key={key} className={className}>
      {jsxCells}
    </tr>
  )
}

export default Tr
