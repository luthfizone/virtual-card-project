import "./styles/Social.css";

function SocialButton({ icon, size, url }) {
  return (
    <button>
      <a href={url} target="_blank">
        <i className={`fa-brands ${icon} ${size}`}></i>
      </a>
    </button>
  );
}

export default SocialButton;
