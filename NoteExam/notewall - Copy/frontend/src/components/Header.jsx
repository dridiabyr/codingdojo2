import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="header-container d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        color: "white",
        minHeight: "300px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="text-center">
        <h1
          className="display-4 fw-bold"
          style={{
            fontSize: "2.5rem",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Manage Your Notes
        </h1>
        <p
          className="lead mt-3"
          style={{
            fontSize: "1.2rem",
            color: "rgba(255, 255, 255, 0.9)",
            textShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
          }}
        >
          Simplify your workflow, one note at a time.
        </p>
        <Link
          to="/"
          className="btn btn-outline-light btn-lg mt-4 rounded-pill shadow-sm px-4 py-2"
          style={{
            transition: "all 0.3s ease",
          }}
        >
          <i className="bi bi-arrow-left-circle me-2"></i> Go to Dashboard
        </Link>
      </div>
    </header>
  );
};

export default Header;
