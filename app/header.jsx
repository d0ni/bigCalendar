import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <a className="navigate-btn" href="/1">
          Room_1
        </a>
        <a className="navigate-btn" href="/2">
          Room_2
        </a>
        <a className="navigate-btn" href="/3">
          Room_3
        </a>
        <a className="navigate-btn" href="/4">
          Room_4
        </a>

        <div className="login-area">
          You need to <button>Login</button> or <button>Register</button>
        </div>
      </header>
    );
  }
}
