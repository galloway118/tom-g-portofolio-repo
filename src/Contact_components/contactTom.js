import React from 'react';
import '../components/Tom G profile/Tom.css';
import './contactTom.css';

class Enquiry extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
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
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
          className="inputForm"
        >
          <label htmlFor="Name">
            Name
            <br></br>
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.onNameChange}
              placeholder="Name"
            />
          </label>

          <label htmlFor="exampleInputEmail1">
            Email
            <br></br>
            <input
              type="email"
              aria-describedby="emailHelp"
              id="email"
              onChange={this.onEmailChange}
              value={this.state.email}
              placeholder="Email address"
            />
          </label>
          <label htmlFor="message">
            Message
            <br></br>
            <textarea
              className="messageBox"
              name="message"
              id="message"
              value={this.state.message}
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
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onMessageChange = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3002/send', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          alert('Message Sent.');
          this.resetForm();
        } else if (response.status === 'fail') {
          alert('Message failed to send.');
        }
      });
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }
}

export default Enquiry;
