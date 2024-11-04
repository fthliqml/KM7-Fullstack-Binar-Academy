import PropTypes from "prop-types";

const AboutMe = ({ name, tech }) => {
  return (
    <>
      <h1>About Me</h1>
      <p>
        Hello! My name is {name} i’m a passionate {tech} currently honing my skills through hands-on
        projects and dedicated learning. With a strong foundation in HTML, CSS, JavaScript, and
        experience with frameworks like React and Node.js, I love transforming ideas into
        responsive, user-friendly web applications. I’m excited about constantly learning and
        adapting in the tech field. I’ve been part of various projects where I collaborated closely
        with mentors and peers to solve complex problems and build scalable solutions. My goal is to
        contribute my skills in a dynamic environment where I can continue growing as a software
        engineer.
      </p>
    </>
  );
};

AboutMe.propTypes = {
  name: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
};

export default AboutMe;
