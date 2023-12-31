import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReduser";

function ComponentNavbar() {
  const [cartView, setCartView] = useState(false);
  const data = useCart();

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
          FoodieFinder
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
                    to="/myOrder"
                    style={{ width: "max-content" }}
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link
                  className=" btn btn-success text-white mx-1 login-sign-up-btn"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className=" btn btn-primary text-white mx-1 login-sign-up-btn"
                  to="/createuser"
                >
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn btn-success text-white mx-1 login-sign-up-btn"
                  onClick={() => setCartView(true)}
                >
                  My Cart
                  <Badge
                    style={{ borderRadius: "40px" }}
                    className="bg-dark ms-2"
                  >
                    {data.length !== 0 ? data.length : null}
                  </Badge>
                </div>

                {cartView ? (
                  <Modal
                    onClose={() => {
                      setCartView(false);
                    }}
                  >
                    <Cart />
                  </Modal>
                ) : null}
                <div
                  className="btn btn-danger text-white mx-1 login-sign-up-btn"
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
