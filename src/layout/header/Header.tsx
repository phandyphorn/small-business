import "./Header.css";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="header-nav">
        <div className="logo">
          <Link className="nav-link" to="/">
            Logo
          </Link>
        </div>
        <div className="main-nav">
          <Link className="nav-link each-nav" to="/vegetable">
            Vegetable
          </Link>
          <Link className="nav-link each-nav" to="/fruit">
            Fruit
          </Link>
        </div>
        <div className="contact">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
      {/* Reason which we put Outlet outside nav, because it display each content of each link. */}
      <div className="main-layout">
        <Outlet />
      </div>
    </>
  );
};

export default Header;
