import PropTypes from 'prop-types'

function THead({ key, jsxHeaderRows, ...restProps }) {
  return (
    <thead key={key} {...restProps}>
      {jsxHeaderRows}
    </thead>
  )
}

export default THead

THead.propTypes = {
  key: PropTypes.string,
  jsxHeaderRows: PropTypes.array,
  ...PropTypes.objectOf(PropTypes.any),
}

THead.defaultProps = {
  className: 'capitbrok',
}
