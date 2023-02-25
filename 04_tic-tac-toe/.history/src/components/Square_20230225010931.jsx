function Square({ value }) {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  )
}

export default Square
