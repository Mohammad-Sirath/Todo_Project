import React from "react";
import "./Panel.css";
import MyNavbar from "../../components/navbar/Navbar";
function Panel() {
  return (
    <>
      <MyNavbar />
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome to Panel page!</h1>
      </div>
    </>
  );
}

export default Panel;
