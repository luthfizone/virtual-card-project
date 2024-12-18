import Biodata from "./Biodata.jsx";
import Headers from "./Headers.jsx";
import Identity from "./Identity.jsx";
import Hightlight from "./Hightlight.jsx";
import "./styles/Card.css";

/**
 * Card component serves as a container for the Headers, Identity, Biodata, and Hightlight
 * components
 *
 * @component
 * @returns {JSX.Element} A card element containing the Headers component
 */
function Card() {
  return (
    <div className="card">
      <div className="top">
        <Headers />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <Hightlight />
      </div>
    </div>
  );
}

export default Card;
