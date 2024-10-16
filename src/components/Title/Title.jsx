import PropTypes from "prop-types";
import "./Title.css";

const Title = (props) => {
  return (
    <>
      <div className="title">
        <p>{props.subtitle}</p>
        <h2>{props.title}</h2>
      </div>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired, // Ensure title is a string and required
  subtitle: PropTypes.string, // Optional prop (can be null/undefined)
};

export default Title;
