import { useState } from "react";
import "./styles/App.css";

import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

function App() {
  const name = "Muhammad Fatihul Iqmal";
  const tech = "Fullstack Web Developer";
  const [count, setCount] = useState(0);
  const listMenu = ["Home", "About Me", "Dashboard", "FAQ", "Logout"];

  return (
    <>
      <Navbar count={count} menu={listMenu} />
      <div className="content">
        <AboutMe name={name} tech={tech} />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </div>
      </div>
    </>
  );
}

export default App;
