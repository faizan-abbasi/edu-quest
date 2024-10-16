import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3_EMAIL_ACCESS_KEYS);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  function onVerifyCaptcha(token) {
    console.log("Verified :", token);
  }
  return (
    <>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us message. <img src={msg_icon} alt="" />
          </h3>
          <p>
            {`We'd`} love to hear from you! Whether you have questions, ideas,
            or just want to connect, our doors are always open. Drop us a line
            through our contact form or reach out directly using the information
            below. Your thoughts and feedback are the cornerstone of our
            commitment to excellence in education. {`Let's`} start a
            conversation and shape the future of learning together!
          </p>
          <ul>
            <li>
              <img src={mail_icon} alt="" />
              contact@eduquest.dev
            </li>
            <li>
              <img src={phone_icon} alt="" />
              +1 555-000-6543
            </li>
            <li>
              <img src={location_icon} alt="" />
              123 University Boulevard, Metropolis, CA 90210, United States
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone/Mobile Number"
              required
            />
            <label>Write Your Message Here</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Enter Your Message"
              required
            />
            <HCaptcha
              sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEYS}
              onVerify={onVerifyCaptcha}
            />
            <button type="submit" className="btn dark-btn">
              Submit Now <img src={white_arrow} alt="" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
