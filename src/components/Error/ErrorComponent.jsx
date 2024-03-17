import PropTypes from 'prop-types';

const ErrorComponent = ({message}) => {
  const style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      color: "red"
    }

  return (
    <div style={style}>Error: {message}</div>
  )
}

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorComponent;