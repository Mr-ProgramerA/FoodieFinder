import { Link } from "react-router-dom";

function componentNavbar() {
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
                  className=" btn btn-danger text-white mx-1 LoginSignUpBtn"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className=" btn btn-danger text-white mx-1 LoginSignUpBtn"
                  to="/createuser"
                >
                  SignUp
                </Link>
              </div>
            ) : ( "" )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default componentNavbar;
