function MyCounterButton({ count, onClick: handleClick }) {
  return <button onClick={handleClick}>Clicked {count} times</button>
}

export default MyCounterButton
