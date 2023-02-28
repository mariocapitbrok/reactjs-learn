function Caption({ key, caption, classes }) {
  return (
    <caption key={key} className={classes}>
      {caption}
    </caption>
  )
}

export default Caption
