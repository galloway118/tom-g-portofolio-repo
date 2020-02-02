import React from 'react';
import './sidebar.css';
import { Link } from '@reach/router';

const SideBar = ({ navBarClickHandler }) => {
  return (
    <nav className="sidebar">
      <ul>
        <li onClick={navBarClickHandler}>
          <Link to="/">Home</Link>
        </li>
        {/* <li onClick={navBarClickHandler}>
          <Link to="/about_me">About</Link>
        </li> */}
        <li onClick={navBarClickHandler}>
          <Link to="/projects">Projects</Link>
        </li>
        <li onClick={navBarClickHandler}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
