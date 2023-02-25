function Square() {
  function handleClick() {
    console.log('clicked')
  }

  return (
    <button className="square" onClick={handleClick}>
      {}
    </button>
  )
}

export default Square
