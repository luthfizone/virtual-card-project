import Badge from "./Badge";
import "./styles/Hightlight.css";
import data from "../data/badgeData.json";
console.log(data);

/**
 *
 * @component
 * @returns {JSX.Element} A Hightlight component that containing Badge component
 */
function Hightlight() {
  return (
    <div className="buttons">
      {data.map(({ text }, index) => (
        <Badge key={index} text={text} />
      ))}
    </div>
  );
}

export default Hightlight;
