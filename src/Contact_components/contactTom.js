import React from 'react';
import '../components/Tom G profile/Tom.css';
import './contactTom.css';
import axios from 'axios';
const API_PATH = 'http://localhost:1992/my-portfolio/api/contact/index.php';

class Enquiry extends React.Component {
  state = {
    nameInput: '',
    emailInput: '',
    messageInput: '',
    mailsent: false,
    error: null
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
          action="#"
          // method="POST"
          // encType="multipart/form-data"
          name="EmailTestForm"
          className="inputForm"
          onSubmit={this.handleSubmit}
        >
          <label>
            Name<br></br>
            <input
              type="text"
              name="name"
              id="name"
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
              id="email"
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
              id="message"
              maxLength="500"
              onChange={this.onMessageChange}
              placeholder="message"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              onClick={this.handleFormSubmit}
            />
          </label>
          {/* <button className="contactButton">Submit</button> */}
          <div>
            {this.state.mailSent && <div>Thank you for contcting us.</div>}
          </div>
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

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.setState({
  //     nameInput: '',
  //     messageInput: '',
  //     emailInput: ''
  //   });
  // };

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        });
      })
      .catch(error => this.setState({ error: error.message }));
  };
}

export default Enquiry;
