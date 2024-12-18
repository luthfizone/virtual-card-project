import SocialButton from "./SocialButton";
import "./styles/Headers.css";
import data from "../data/socialMediaData.json";

/**
 * Headers component renders a collection of social media buttons.
 *
 * @component
 * @returns {JSX.Element} A container with multiple SocialButton components
 */
function Headers() {
  const socialMediaLeft = data.slice(0, 3);
  const socialMediaRight = data.slice(3);
  return (
    <>
      <div className="social-buttons">
        {socialMediaLeft.map((social, index) => (
          <SocialButton
            key={index}
            icon={social.icon}
            size={social.size}
            url={social.url}
          />
        ))}
      </div>
      <div className="social-buttons right">
        {socialMediaRight.map((social, index) => (
          <SocialButton
            key={index}
            icon={social.icon}
            size={social.size}
            url={social.url}
          />
        ))}
      </div>
    </>
  );
}

export default Headers;
