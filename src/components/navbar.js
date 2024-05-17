import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./navbar.css";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <div className="navibar">
      <div className="header">
        <div className="logo">
          <h1>WITH</h1>
          <h5>me PEACE</h5>
        </div>
        <input type="checkbox" id="nav_check" hidden />
        <nav>
          <div className="logo">
            <h1>WITH</h1>
            <h5>me PEACE</h5>
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/psycho">Psychotherapy</NavLink>
            </li>
            <li>
              <NavLink to="/community">Community</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <ol>
              <NavLink to="/userlog" className="button">
                <div className="button__content">
                  <span className="button__text">Be Member</span>
                  <i className="ri-leaf-fill"></i>

                  <div className="button__reflection-1"></div>
                  <div className="button__reflection-2"></div>
                </div>

                <div className="button__shadow"></div>
              </NavLink>
            </ol>
            <li>
              <NavLink to="/profile">
                {user && (
                  <div class="chat-box-header">
                    <img
                      src={user.photoURL}
                      alt="dp"
                      width="55"
                      height="55"
                      style={{ borderRadius: "50%" }}
                    />
                    <span>{user.displayName}</span>
                  </div>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav_check" className="myburge">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
