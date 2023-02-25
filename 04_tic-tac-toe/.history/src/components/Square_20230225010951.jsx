function Square({ value, onClick: handleClick }) {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  )
}

export default Square
