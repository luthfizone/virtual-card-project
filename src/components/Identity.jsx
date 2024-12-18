import "./styles/Identity.css";

/**
 *
 * @component
 * @returns {JSX.Element} A containing element that display data from Identity component
 */
function Identity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">Black Cat</div>
      </div>
      <div className="title">Meow Engineer</div>
    </div>
  );
}

export default Identity;
