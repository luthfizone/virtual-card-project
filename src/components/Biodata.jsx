import "./styles/Biodata.css";

/**
 * Biodata components that serves element description jobs
 *
 * @component
 * @returns {JSX.Element} A Biodata element containing the desc element
 */
function Biodata() {
  return (
    <div className="desc">
      <p>
        My name is <b>Black Cat</b> and I am an Engineer
      </p>
      <p>
        To say that I love software is an understatement, I spend every waking
        hour building something FUN & watchingg Tech Podcasts or attending
        Meetups & Conferences.
      </p>
    </div>
  );
}

export default Biodata;
