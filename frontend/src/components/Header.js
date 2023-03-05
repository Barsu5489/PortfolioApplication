import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const userInfo = localStorage.getItem('userInfo')
  return (
    <>
    
    {userInfo ? ( <nav>
        <div className="navbar-logo">
          <NavLink to="/">🅿️ortfoli-yoh! </NavLink>
        </div>
        
        <div className="navbar-links">
          <NavLink to="/">Currently in Kenya</NavLink>
          <NavLink to="/auth">Currently working<br /> on REACT</NavLink>
          <NavLink to="/projects">My Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
        </div>
      </nav>):(  <nav>     <div className="navbar-logo">
          <NavLink to="/">🅿️ortfoli-yoh! </NavLink>
        </div> </nav> )}
      {/* <nav>
        <div className="navbar-logo">
          <NavLink to="/">🅿️ortfoli-yoh! </NavLink>
        </div>
        
        <div className="navbar-links">
          <NavLink to="/">Currently in Kenya</NavLink>
          <NavLink to="/auth">Currently working<br /> on REACT</NavLink>
          <NavLink to="/projects">My Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
        </div>
      </nav> */}
    
    </>
  );
}

export default Header;
