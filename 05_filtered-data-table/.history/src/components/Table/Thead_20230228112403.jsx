import PropTypes from 'prop-types'

function THead({ key, jsxHeaderRows, classes }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <thead key={key} className={className}>
      {jsxHeaderRows}
    </thead>
  )
}

export default THead

THead.propTypes = {
  key: PropTypes.string,
}
