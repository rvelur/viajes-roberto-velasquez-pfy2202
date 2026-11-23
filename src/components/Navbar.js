import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          ✈️ Horizonte Travel
        </Link>
        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Explorar Destinos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
