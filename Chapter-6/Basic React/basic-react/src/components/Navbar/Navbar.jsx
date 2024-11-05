import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ menu, count }) => {
  // hook
  const navigate = useNavigate();

  // handler untuk mengarahkan ke suatu endpoint
  function handleNavigation(e, path) {
    e.prevent.default();
    navigate(path);
  }

  return (
    <div className="navbar">
      <h3>
        Binar Academy {">"} ({count})
      </h3>
      <ul className="navbar-menu">
        {menu.map((item, index) => (
          <li key={index}>
            {/* Link adalah navigasi antar halaman React tanpa refresh, hanya render halaman yang perlu saja */}
            <Link to={`/${item}`}>{item}</Link>
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
