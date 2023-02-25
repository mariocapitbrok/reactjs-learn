function Board() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
      >div.board-row>(button.square{1 - 3})*3 >div.board-row>(button.square
      {4 - 6})*3 >
      <div className="board-row">
        <button className="square">7-9</button>
        <button className="square">7-9</button>
        <button className="square">7-9</button>
      </div>
    </>
  )
}

export default Board
