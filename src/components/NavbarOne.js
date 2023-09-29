import { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyle.css";

class NavbarOne extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href="/">
                  <i className={item.icon}></i>{item.title}
                </a>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default NavbarOne;
