import Headers from "./Headers.jsx";
import "./styles/Card.css";

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
