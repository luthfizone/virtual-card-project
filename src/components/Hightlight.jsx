import Badge from "./Badge";
import "./styles/Hightlight.css";

/**
 *
 * @component
 * @returns {JSX.Element} A Hightlight component that containing Badge component
 */
function Hightlight() {
  return (
    <div className="buttons">
      <Badge text={"PhD"} />
      <Badge text={"Montainerr"} />
      <Badge text={"3D Geek"} />
    </div>
  );
}

export default Hightlight;
