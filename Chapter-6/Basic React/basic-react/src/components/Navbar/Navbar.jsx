/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ active }) => {
  const listMenu = ["Dashboard", "About Me", "FAQ", "Logout"];

  return (
    <div className="navbar">
      <h2>Binar Academy</h2>
      <ul className="navbar-menu">
        {listMenu.map((item, index) => (
          <li
            key={index}
            className={
              item === active ? "bg-white rounded text-black" : undefined
            }
          >
            {/* Link adalah navigasi antar halaman React tanpa refresh, hanya render halaman yang perlu saja */}
            <Link to={`/${item.toLowerCase().replace(" ", "-")}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
