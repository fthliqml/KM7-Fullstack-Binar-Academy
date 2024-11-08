import { useNavigate, Link } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  // Navigate with button (same as Link)
  function handleNavigation(path) {
    navigate(path);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "2rem",
      }}
    >
      <h1>404 NOT FOUND</h1>
      <p>
        Go to home page <Link to={"/dashboard"}>Home</Link>
      </p>
      <button onClick={() => handleNavigation("/dashboard")}>Dashboard</button>
    </div>
  );
};

export default NotFound;
