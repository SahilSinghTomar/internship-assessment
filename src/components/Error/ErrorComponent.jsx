import PropTypes from 'prop-types';

const ErrorComponent = ({ message }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8d7da",
    color: "#721c24",
    padding: "20px",
    textAlign: "center",
  };

  const errorIconStyle = {
    fontSize: "48px",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <i className="fas fa-exclamation-triangle" style={errorIconStyle}></i>
      <h1>Error</h1>
      <p>{message}</p>
    </div>
  );
};

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorComponent;
