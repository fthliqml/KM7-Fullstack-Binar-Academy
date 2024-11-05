import { useState } from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
// import Form from "./components/Form";

function Home() {
  const name = "Muhammad Fatihul Iqmal";
  const tech = "Fullstack Web Developer";
  const listMenu = ["Home", "About Me", "Dashboard", "FAQ", "Logout"];

  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar count={count} menu={listMenu} />
      <div className="content">
        <HeroSection name={name} tech={tech} />

        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default Home;
