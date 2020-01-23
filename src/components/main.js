import React from 'react';
import { Router } from '@reach/router';

import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/navbar/sidebar';

import App from '../App';
import Projects from '../components/pages/projects';
import Contact from '../components/pages/contact';
import About from '../components/pages/about_me';
import Error from '../components/pages/Error';

class Main extends React.Component {
  state = {
    sideBarOpen: false
  };
  render() {
    let sideBar;
    if (this.state.sideBarOpen) {
      sideBar = <Sidebar navBarClickHandler={this.sideBarHandler} />;
    }
    return (
      <div>
        <Navbar navBarClickHandler={this.sideBarHandler} />
        {sideBar}
        <Router>
          <App path="/" />
          <Projects path="/projects" />
          <Contact path="/contact" />
          <About path="/about_me" />
          <Error default />
        </Router>
      </div>
    );
  }
  sideBarHandler = () => {
    this.setState(prevState => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };
}

export default Main;
