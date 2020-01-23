import React from 'react';
import './welcome_page.css';
import TomGinfo from './components/Tom G profile/Tom';

class App extends React.Component {
  state = {
    user: 'Tom Galloway'
  };
  render() {
    return (
      <div className="welcome_page">
        <TomGinfo />
      </div>
    );
  }
}

export default App;
