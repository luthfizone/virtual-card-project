import "./styles/Social.css";
import PropTypes from "prop-types";

/**
 * SocialButton component renders a button with a social media icon.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.icon - The FontAwesome icon class for the social media platform
 * @param {string} [props.size] - The size class for the icon (e.g., 'fa-lg')
 * @param {string} props.url - The URL to navigate to when the button is clicked
 * @returns {JSX.Element} A button element containing a link with a social media icon
 */
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
