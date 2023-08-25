import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";

function ComponentNavbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 heading fst-italic" to="/">
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item ">
                <Link
                  className="nav-link nav_tabs fs-5 active text-dark"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              {localStorage.getItem("authToken") ? (
                <li className="nav-item ">
                  <Link
                    className="nav-link nav_tabs fs-5 text-dark"
                    aria-current="page"
                    to="/"
                    style={{ width: "max-content" }}
                  >
                    My Orders
                  </Link>
                </li>
              ) : ( "" )}
            </ul>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link
                  className=" btn btn-success text-white mx-1 LoginSignUpBtn"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className=" btn btn-primary text-white mx-1 LoginSignUpBtn"
                  to="/createuser"
                >
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <div className="btn btn-success text-white mx-1 LoginSignUpBtn">
                  My Cart
                  <Badge
                  style={{borderRadius: "40px"}}
                  className="bg-dark ms-2">
                    12
                  </Badge>
                </div>
                <div
                  className="btn btn-danger text-white mx-1 LoginSignUpBtn"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default ComponentNavbar;
