import PropTypes from "prop-types";
import "./progress.css";

const Progress = ({ percentage }) => {
    const percentageColor = {
        color: percentage > 50 ? "white" : "black",
    }

    return (
        <div className="progress-div">
            <div className="progress-item" style={{ width: `${percentage}%` }}>
                <p style={percentageColor}>{percentage}</p>
            </div>
        </div>
    );
};

Progress.propTypes = {
    percentage: PropTypes.number.isRequired,
};

export default Progress;