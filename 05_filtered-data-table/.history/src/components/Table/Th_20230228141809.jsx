function Th({ caption, value, children, ...restProps }) {
  return (
    <th title={caption}>
      {value}
      {children}
    </th>
  )
}

export default Th
