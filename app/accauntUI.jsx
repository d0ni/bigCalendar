import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

export default class AccountUI extends Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
  }

  createUser() {
    const user = this.username.current;
    const pwd = this.password.current;

    Accounts.createUser({ username: user.value.trim(), password: pwd.value });
    this.props.closePopup();
  }

  logIn() {
    const user = this.username.current;
    const pwd = this.password.current;

    Meteor.loginWithPassword(user.value.trim(), pwd.value);
    this.props.closePopup();
  }

  render() {
    if (this.props.statePopup && this.props.typePopup == 1) {
      return (
        <div className="b-popup">
          <div className="b-popup-content">
            <p>
              Username: <input type="text" ref={this.username} />
            </p>
            <p>
              Password: <input type="password" ref={this.password} />
            </p>
            <p>
              <button onClick={this.logIn.bind(this)}>Login</button>
              <button onClick={this.props.closePopup}>Cancel</button>
            </p>
          </div>
        </div>
      );
    } else if (this.props.statePopup && this.props.typePopup == 2) {
      return (
        <div className="b-popup">
          <div className="b-popup-content">
            <p>
              Username: <input type="text" ref={this.username} />
            </p>
            <p>
              Password: <input type="password" ref={this.password} />
            </p>
            <p>
              <button onClick={this.createUser.bind(this)}>Register</button>
              <button onClick={this.props.closePopup}>Cancel</button>
            </p>
          </div>
        </div>
      );
    }
    return null;
  }
}
