import React from "react";
import { NavLink } from "react-router-dom";
const linkStyles = {
    display: "inline-block",
    width: "130px",
    padding: "12px",
    margin: "0px 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
    "borderRadius": "20px",
    "textAlign": "center",
};



function NavBar({setUser}) {

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }


    return (
      <div>
        <h1 id = "loginTitle">Activity Planner</h1>
        <div className = "navbar">
        <br></br>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#61dafb"
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#61dafb"
          }}
        >
          Profile
        </NavLink>
        <NavLink
          to="/activities"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#61dafb"
          }}
        >
          Activities
        </NavLink>
        <NavLink
          to="/favorites"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#61dafb"
          }}
        >
          Favorites
        </NavLink>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          onClick={handleLogout}
        >
          Logout
        </NavLink>
        </div>
      </div>
    );
}
export default NavBar