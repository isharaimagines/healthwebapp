import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  // const handleBodyClick = () => {
  //   const checkbox = document.getElementById("nav_check");
  //   if ((checkbox.checked = true)) {
  //     checkbox.checked = true;
  //   }
  // };
  return (
    <div className="navibar">
      <div className="header">
        <div className="logo">
          <h1>WITH</h1>
          <h5>&ensp;me PEACE</h5>
        </div>
        <input type="checkbox" id="nav_check" hidden />
        <nav>
          <div className="logo">
            <h1>WITH</h1>
            <h5>&ensp;me PEACE</h5>
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/psycho">Psychotherapists</NavLink>
            </li>
            <li>
              <NavLink to="/community">Community</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <ol>
              <NavLink to="./registerto.php" className="button">
                <div className="button__content">
                  <span className="button__text">Be Member</span>
                  <i className="ri-leaf-fill"></i>

                  <div className="button__reflection-1"></div>
                  <div className="button__reflection-2"></div>
                </div>

                <div className="button__shadow"></div>
              </NavLink>
            </ol>
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
