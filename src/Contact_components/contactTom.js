import React from 'react';
import '../components/Tom G profile/Tom.css';
import './contactTom.css';

class Enquiry extends React.Component {
  state = {
    nameInput: '',
    emailInput: '',
    messageInput: ''
  };
  render() {
    return (
      <div className="enquiry">
        <h2>Contact</h2>
        <p>
          If you would like to get in contact please fill out an enquiry form
          below
        </p>
        <form
          action="mailto:tomgalloway@hotmail.co.uk"
          method="POST"
          encType="multipart/form-data"
          name="EmailTestForm"
          className="inputForm"
          // onSubmit={this.handleSubmit}
        >
          <label>
            Name<br></br>
            <input
              type="text"
              name="name"
              value={this.state.nameInput}
              onChange={this.onNameChange}
              placeholder="Name"
            />
          </label>

          <label>
            Email
            <br></br>
            <input
              type="email"
              name="email"
              onChange={this.onEmailChange}
              value={this.state.emailInput}
              placeholder="Email address"
            />
          </label>
          <label>
            Message
            <br></br>
            <textarea
              className="messageBox"
              name="message"
              maxLength="500"
              onChange={this.onMessageChange}
              placeholder="message"
            ></textarea>
          </label>
          <button className="contactButton">Submit</button>
        </form>
      </div>
    );
  }

  onNameChange = event => {
    this.setState({ nameInput: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ emailInput: event.target.value });
  };

  onMessageChange = event => {
    this.setState({ messageInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      nameInput: '',
      messageInput: '',
      emailInput: ''
    });
  };
}

export default Enquiry;
