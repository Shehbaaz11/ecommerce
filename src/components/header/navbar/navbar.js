import "./navbar.css";
import { NavLink } from "react-router";
import {SearchIcon, ShoppingBagIcon} from 'lucide-react';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div>
          <NavLink to="/Men" end>
            Men
          </NavLink>
        </div>
        <div>
          <NavLink to="/Women" end>
            Women
          </NavLink>
        </div>
        <div>
          <NavLink to="/kids" end>
            Kids
          </NavLink>
        </div>
        <div>
          <NavLink to="/New-&-featured" end>
            New & featured
          </NavLink>
        </div>
        <div>
          <NavLink to="/Gifts" end>
            Gifts
          </NavLink>
        </div>
      </div>
      <div className="navbar-logo">TULOS</div>
      <div className="navbar-user-info">
        <div className="search-icon nav-button">
          <SearchIcon/>
        </div>
        <div className="bag-icon nav-button">
          <ShoppingBagIcon/>
        </div>
        <div className="nav-button">Login</div>
      </div>
    </div>
  );
};

export default Navbar;