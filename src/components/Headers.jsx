import SocialButton from "./SocialButton";
import "./styles/Headers.css";

function Headers() {
  return (
    <>
      <div className="social-buttons">
        <SocialButton icon="fa-facebook" size="fa-lg" />
        <SocialButton icon="fa-twitter" size="fa-lg" />
        <SocialButton icon="fa-instagram" size="fa-lg" />
      </div>
      <div className="social-buttons right">
        <SocialButton icon="fa-linkedin" size="fa-lg" />
        <SocialButton icon="fa-github" size="fa-lg" />
      </div>
    </>
  );
}

export default Headers;
