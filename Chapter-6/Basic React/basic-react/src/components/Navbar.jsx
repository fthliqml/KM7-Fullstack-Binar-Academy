import "./Navbar.css";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const menu = props.menu;
  return (
    <div className="navbar">
      <h3>
        Binar Academy {">"} ({props.count})
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
}

Navbar.propTypes = {
  count: PropTypes.number.isRequired,
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
};
