import "./Navbar.css";
import logo from "../assets/images/buffalo.png";
import Navbaritems from "./Navbaritem";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navlogo">
        <img src={logo}></img>
        <p>
          Expence <span>Tracker</span>
        </p>
      </div>
      <ul className="Navlist">
        {Navbaritems.map((item) => (
          <li
            key={item.name}
            className={window.location.pathname == item.path ? "active" : ""}
          >
            <a href={item.path}>
              <span className="NavIcon">{item.logo}</span>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navbar;
