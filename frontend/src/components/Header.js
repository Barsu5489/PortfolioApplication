import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav>
        <div className="navbar-logo">
          <NavLink to="/">Emmanuel Barsu</NavLink>
        </div>
        <div className="navbar-links">
          <NavLink to="/">Currently in Kenya</NavLink>
          <NavLink to="/auth">Currently working<br /> on REACT</NavLink>
          <NavLink to="/projects">My Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
