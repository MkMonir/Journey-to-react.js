import PropTypes from 'prop-types';

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback App',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#fa6a95',
};

Header.protoTypes = {
  text: PropTypes.string,
  bgcolor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
