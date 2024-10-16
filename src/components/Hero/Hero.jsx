import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div className="hero container">
        <div className="hero-text">
          <h1>Cultivating curiosity, inspiring growth</h1>
          <p>
            Our innovative program equips learners with the tools and insights
            to thrive in {`education's`} evolving landscape
          </p>
          <Link
            to="program"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Explore More <img src={dark_arrow} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
