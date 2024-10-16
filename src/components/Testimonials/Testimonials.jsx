import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0; //translate x
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <>
      <div className="testimonials">
        <img
          src={next_icon}
          alt=""
          className="next-btn"
          onClick={slideForward}
        />
        <img
          src={back_icon}
          alt=""
          className="back-btn"
          onClick={slideBackward}
        />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="User" />
                  <div>
                    <h3>Sarah Thompson</h3>
                    <span>EduQuest USA</span>
                  </div>
                </div>
                <p>
                  Class of 2023: Edusity transformed my career trajectory. The
                  innovative curriculum and hands-on learning experiences
                  prepared me for the real world in ways I never imagined. The
                  professors dedication to student success and the
                  collaborative atmosphere among peers made my journey both
                  challenging and incredibly rewarding.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="User" />
                  <div>
                    <h3>Michael Chen</h3>
                    <span>EduQuest USA</span>
                  </div>
                </div>
                <p>
                  Current Graduate Student: As an international student, I was
                  amazed by Edusity's inclusive environment. The
                  cutting-edge research opportunities and global perspective in
                  every class have broadened my horizons. The support services,
                  especially for non-native English speakers, have been
                  instrumental in my academic success and personal growth.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="User" />
                  <div>
                    <h3>Olivia Patel</h3>
                    <span>EduQuest USA</span>
                  </div>
                </div>
                <p>
                  Class of 2022: Edusity's emphasis on interdisciplinary
                  learning opened my eyes to possibilities I never considered.
                  The diverse student body and faculty brought unique
                  perspectives to every discussion, enriching my educational
                  experience beyond measure. The mentorship program connected me
                  with industry leaders, setting the stage for my current
                  success.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="User" />
                  <div>
                    <h3>James Foster</h3>
                    <span>EduQuest USA</span>
                  </div>
                </div>
                <p>
                  Part-time Student: Balancing work and studies seemed daunting
                  until I enrolled at Edusity. The flexible program options and
                  understanding faculty made it possible for me to pursue my
                  degree without sacrificing my career. The practical,
                  industry-aligned coursework has already helped me advance in
                  my current job.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
