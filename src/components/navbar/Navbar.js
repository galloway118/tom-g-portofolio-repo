import React from 'react';
import Sidebutton from './Navbar_button';
import './Navbar.css';
import { Link } from '@reach/router';

const Navbar = props => {
  return (
    <header className="navbar">
      <nav className="navbar_links">
        <div className="navbar_toggle">
          <Sidebutton click={props.navBarClickHandler} />
        </div>
        <div className="tomglogo">
          <a href="https://www.linkedin.com/in/tom-galloway-76463975/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReaCf7FhigbSmOx_ogUQ3Qk43rwiDyYirR7wWhnf6N3-h_ZB5h&s"
              width="500%"
              height="500%"
              alt="tom g at northcoders"
            ></img>
          </a>
        </div>
        <div className="spacer"></div>
        <div className="navbar_items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li><Link to="/about_me">About</Link></li> */}
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
