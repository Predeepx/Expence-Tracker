import "./Navbar.css";
import logo from "../../assets/images/buffalo.png";
import Navbaritems from "./NavbarItems";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navlogo">
        <img src={logo} alt="Expence Tracker logo" />
        <p>
          Expense <span>Tracker</span>
        </p>
      </div>
      <ul className="Navlist">
        {Navbaritems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="NavIcon">{item.logo}</span>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navbar;
