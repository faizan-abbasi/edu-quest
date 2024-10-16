import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={about_img} alt="About Image" className="about-img" />
          <img
            src={play_icon}
            alt="Play Icon"
            className="play-icon"
            onClick={() => {
              setPlayState(true);
            }}
          />
        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>{`Empowering Minds to Lead and Transform`}</h2>
          <p>
            Discover your potential to shape the future of learning at our
            university. Our innovative education programs blend cutting-edge
            theory with hands-on experience, preparing you to thrive in the
            ever-evolving world of education.
          </p>
          <p>
            From classroom teaching to educational leadership, our diverse
            curriculum empowers you with the skills, knowledge, and adaptability
            to make a lasting impact. Guided by expert mentors and immersed in
            real-world scenarios, {`you'll`} develop the creativity and critical
            thinking needed to inspire learners, transform communities, and lead
            educational innovation.
          </p>
          <p>
            Whether your passion lies in teaching, administration, or
            counseling, our program will help you turn your educational
            aspirations into reality, equipping you to become a catalyst for
            positive change in schools and beyond.
          </p>
        </div>
      </div>
    </>
  );
};

About.propTypes = {
  setPlayState: "false",
};

export default About;
