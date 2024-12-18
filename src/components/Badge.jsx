import PropTypes from "prop-types";
import "./styles/Hightlight.css";

function Badge({ text }) {
  return (
    <button target="badge">
      <div className="height">{text}</div>
    </button>
  );
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Badge;
