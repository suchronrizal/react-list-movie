import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
      <nav className="navbar">
        <div className="nav-logo">
          <a href="#">Logo</a>
        </div>
        <div className="nav-menu">
          <Link to={'/'}>Movies</Link>
          <Link to={'/latihan-1'}>Latihan</Link>
        </div>
      </nav>
    )
}

export default Header;