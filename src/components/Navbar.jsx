import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">☕</div>
          <span>Majesty Coffee</span>
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/how-it-works" className="nav-link">How it Works</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        
        <Link to="/shop" className="shop-btn">
          Shop now →
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;