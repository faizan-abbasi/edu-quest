import { useState } from "react";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Program" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="Testimonials" title="What Student Says" />
        <Testimonials />
        <Title subtitle="Contact Us" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
