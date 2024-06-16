import './Nav.css'
import {Link,NavLink} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import {navLinks,navRight} from '../../Data/Data'
export default function Nav() {
  return (
    <nav>
      <div className="container nav.container">
        {}
        <Link to={"/"}>
          <img src={Logo} alt="Logo" />
        </Link>
        {}
        <ul className="nav-links">
          {navLinks.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        {}
        <div className="nav-Right">
          {navRight.managements.map((item, index) => {
            return (
              <Link
                key={index}
                target="_blank"
                className="management-icons"
                to={<item.icon />}
              >
                <item.icon />
              </Link>
            );
          })}
          <div className="menu_bar">
            <button className="menu-button">
              <VscMenu />
              <GrClose />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
