import "./styles/Social.css";

function SocialButton({ icon, size }) {
  return (
    <button>
      <i className={`fa-brands ${icon} ${size}`}></i>
    </button>
  );
}

export default SocialButton;
