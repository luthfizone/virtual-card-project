import Headers from "./Headers.jsx";
import "./styles/Card.css";

/**
 * Card component serves as a container for the Headers component.
 *
 * @component
 * @returns {JSX.Element} A card element containing the Headers component
 */
function Card() {
  return (
    <div className="card">
      <div className="top">
        <Headers />
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default Card;
