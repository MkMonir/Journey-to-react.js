import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback App',
};

Header.protoTypes = {
  text: PropTypes.string,
};

export default Header;
