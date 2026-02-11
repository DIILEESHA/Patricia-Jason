import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./n.css";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav">
      <div className="nav_grid">
        {/* Mobile menu button (hidden on desktop) */}
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className="nav_sub">
          <h2 className="couple">Patricia & Jason</h2>
    
        </div>

        <div className="nav_sub nil">
        </div>

        <div className="nav_sub">
          <ul className="nav_ul">
        
            <li className="nav_li mafia">
              <Link to="/rsvp">RSVP</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li onClick={toggleMobileMenu}>
            <Link to="/">Home</Link>
          </li>

          <li onClick={toggleMobileMenu}>
            <Link to="/story">Our Story</Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link to="/dress">What to wear</Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link to="/faq">FAQ</Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link to="/wedding-party">Wedding Party</Link>
          </li>

          <li onClick={toggleMobileMenu}>
            <Link to="/rsvp">RSVP</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
