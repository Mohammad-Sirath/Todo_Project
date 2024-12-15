import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { isLogin } from "../../utils";

function MyNavbar() {
  const [loginStatus, setLoginStatus] = useState(isLogin() ? "خروج" : "ورود");

  // Update login status on initial load
  useEffect(() => {
    setLoginStatus(isLogin() ? "خروج" : "ورود");
  }, []);

  // Function to delete cookies
  const deleteCookies = () => {
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; // Deletes the cookie by setting an expired date
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; // Delete any other relevant cookies if needed
  };

  const logoutHandler = () => {
    // Delete cookies upon logout
    deleteCookies();

    // Optionally, clear any session storage or local storage data
    localStorage.removeItem("username"); // or sessionStorage.removeItem("username");

    // Update the login status to reflect logout
    setLoginStatus("ورود");
  };

  const expand = "md";

  return (
    <Navbar
      style={{ backgroundColor: "rgb(186, 182, 253)" }}
      expand={expand}
      className="mb-3"
    >
      <Container>
        <Navbar.Brand
          style={{ fontFamily: "Lalezar", fontSize: "25px" }}
          href="#"
        >
          نکست وان کد
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/" className="nav-link">
                صفحه اصلی
              </NavLink>
              <NavLink to="/about" className="nav-link">
                درباره ما{" "}
              </NavLink>
              <NavLink to="/articles" className="nav-link">
                مقالات
              </NavLink>
              <NavLink to="/panel" className="nav-link">
                پنل
              </NavLink>
              <NavLink
                to={isLogin() ? "/" : "/login"} // Link to login page when logged out
                onClick={isLogin() ? logoutHandler : null} // Log out when clicking "خروج"
                className="nav-link"
              >
                {loginStatus}
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
