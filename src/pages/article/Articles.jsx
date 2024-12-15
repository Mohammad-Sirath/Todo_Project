import React from "react";
import "./Articles.css";
import { Outlet } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
function Articles() {
  return (
    <div>
      <MyNavbar />
      <h1 className="wrapper">صفحه مقالات</h1>
      <hr />
      <div className="btnContainer">
        <Link to="php" className="linkBtn">
          php article
        </Link>
        <Link to="js" className="linkBtn">
          js article
        </Link>
        <Link to="react" className="linkBtn">
          react article
        </Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default Articles;
