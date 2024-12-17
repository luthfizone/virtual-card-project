import SocialButton from "./SocialButton";
import "./styles/Headers.css";

/**
 * Headers component renders a collection of social media buttons.
 *
 * @component
 * @returns {JSX.Element} A container with multiple SocialButton components
 */
function Headers() {
  return (
    <>
      <div className="social-buttons">
        <SocialButton icon="fa-facebook" size="fa-lg" url={"#"} />
        <SocialButton icon="fa-twitter" size="fa-lg" url={""} />
        <SocialButton
          icon="fa-instagram"
          size="fa-lg"
          url={"https://www.instagram.com/luthfizone/?"}
        />
      </div>
      <div className="social-buttons right">
        <SocialButton
          icon="fa-linkedin"
          size="fa-lg"
          url={"https://www.linkedin.com/in/luthfizone/"}
        />
        <SocialButton
          icon="fa-github"
          size="fa-lg"
          url={"https://github.com/luthfizone"}
        />
      </div>
    </>
  );
}

export default Headers;
