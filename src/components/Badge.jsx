import PropTypes from "prop-types";
import "./styles/Hightlight.css";

/**
 * Badge component for templating data from Hightlight components
 *
 * @component
 * @returns {JSX.Element} A Badge element containing element for rendering badge in the bottom
 */
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
