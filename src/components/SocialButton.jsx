import "./styles/Social.css";
import PropTypes from "prop-types";

function SocialButton({ icon, size, url }) {
  return (
    <button>
      <a href={url} target="_blank">
        <i className={`fa-brands ${icon} ${size}`}></i>
      </a>
    </button>
  );
}

SocialButton.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default SocialButton;
