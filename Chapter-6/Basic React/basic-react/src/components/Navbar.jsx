import PropTypes from "prop-types";

import "../styles/Navbar.css";

const Navbar = ({ menu, count }) => {
  return (
    <div className="navbar">
      <h3>
        Binar Academy {">"} ({count})
      </h3>
      <ul className="navbar-menu">
        {menu.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  count: PropTypes.number.isRequired,
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
