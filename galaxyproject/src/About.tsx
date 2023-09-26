import React from "react";
import "./index.css";
const About: React.FC = () => {
  return (
    <div id="about">
      <div className="about" data-aos="fade-up">
        <h1 data-aos="fade-up">About</h1>
        <p data-aos="fade-up">
          Welcome to our website, your ultimate destination for<br></br> free
          movies and songs! We are dedicated to providing<br></br> you with a
          vast and diverse collection of<br></br> entertainment, all at your
          fingertips, without any cost.<br></br> Our mission is to bring joy and
          excitement to your life<br></br> through the magic of cinema and
          music, all while<br></br> ensuring a seamless and user-friendly
          experience.
        </p>
      </div>
      <img
        src="https://static1.s123-cdn-static-a.com/uploads/2031/800_5a16bb1164caa.jpg"
        alt="about"
      ></img>
    </div>
  );
};
export default About;
