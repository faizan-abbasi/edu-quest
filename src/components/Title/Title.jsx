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
  title: PropTypes.string.isRequired, 
  subtitle: PropTypes.string, 
};

export default Title;
