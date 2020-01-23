import React from 'react';
import './Tom.css';
import Logo from './TOMG.jpeg';

const TomGinfo = props => {
  return (
    <div className="tominfo">
      <h2>Tom's Portfolio Page</h2>
      <img className="tomg" src={Logo} alt="Tom at northcoders"></img>
      <div id="info">
        <p>
          My name is Tom Galloway, I am currently training to be a developer at
          NorthCoders in Manchester. This is my portfolio page, which is
          accessible on both desktop and mobile devices.
          <br></br>
          <br></br>
          Please feel free to browse through my projects and learn more about
          myself and my previous experience through the navigation toolbar
          <br></br>
          <br></br>
          If you would like any further information or to get in contact with me
          please visit the contact page and submit an enquiry through the form
          or visit my linked in page or email me directly
          <br></br>
          <br></br>
          Tom
        </p>
      </div>
    </div>
  );
};

export default TomGinfo;
