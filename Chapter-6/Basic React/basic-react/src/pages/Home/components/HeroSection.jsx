import PropTypes from "prop-types";

import MyButton from "../../../components/MyButton";
import { useState } from "react";

const HeroSection = ({ name, tech }) => {
  const [nameValue, setNameValue] = useState(name);
  const [techValue, setTechValue] = useState(tech);
  const [nameDescription, setNameDescription] = useState(name);
  const [techDescription, setTechDescription] = useState(tech);

  function handlerClick(e) {
    // Nonactive reloading page when submit
    e.preventDefault();
    setNameDescription(nameValue);
    setTechDescription(techValue);
  }

  return (
    <>
      <h1>About Me</h1>
      <p>
        Hello! My name is {nameDescription} i’m a passionate {techDescription}{" "}
        currently honing my skills through hands-on projects and dedicated
        learning. With a strong foundation in HTML, CSS, JavaScript, and
        experience with frameworks like React and Node.js, I love transforming
        ideas into responsive, user-friendly web applications. I’m excited about
        constantly learning and adapting in the tech field. I’ve been part of
        various projects where I collaborated closely with mentors and peers to
        solve complex problems and build scalable solutions. My goal is to
        contribute my skills in a dynamic environment where I can continue
        growing as a software engineer.
      </p>

      <form>
        <input
          type="text"
          placeholder="Name"
          value={nameValue}
          onChange={(event) => setNameValue(event.target.value)}
        />
        <input
          type="text"
          placeholder="Tech Stack"
          value={techValue}
          onChange={(event) => setTechValue(event.target.value)}
        />

        {/* Sending handler as a props */}
        <MyButton handlerClick={handlerClick}>
          <span>Change On Description</span>{" "}
          {/* Accepted as children in MyButton */}
        </MyButton>
      </form>
    </>
  );
};

HeroSection.propTypes = {
  name: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
};

export default HeroSection;
