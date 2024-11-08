import { useState } from "react";
import "./AboutMe.css";

import Navbar from "@components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
// import Form from "./components/Form";

function AboutMe() {
  const name = "Muhammad Fatihul Iqmal";
  const tech = "Fullstack Web Developer";

  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar active={"About Me"} />
      <div className="content">
        <HeroSection name={name} tech={tech} />

        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default AboutMe;
