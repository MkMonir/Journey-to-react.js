import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'submit',
  isDisabled: false,
};

Button.propTypes = {
  version: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
};

export default Button;
