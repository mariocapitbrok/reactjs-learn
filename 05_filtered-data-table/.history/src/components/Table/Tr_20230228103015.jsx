function Tr({ key, jsxCells }) {
  return <tr key={row.id || createUniqueId()}>{jsxCells}</tr>
}

export default Tr
