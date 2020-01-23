import React from 'react';
import '../components/navbar/header/Header.css';

const Banner = props => {
  return (
    <div>
      <h1>Oops!</h1>
      <p>
        Please ensure you have completed all fields before submitting the form.{' '}
      </p>
      <p>Also ensure that there is only one email address.</p>
    </div>
  );
};

export default Banner;
