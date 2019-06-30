import React, { Component } from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";

export default class Header extends TrackerReact(Component) {
  logOut() {
    Meteor.logout();
  }

  render() {
    let usrName = "wait";
    if (Meteor.user()) {
      usrName = Meteor.user().username;
    }

    const navBtn = (
      <nav className="nav">
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
        <a className="navigate-btn" href="/5">
          Room_5
        </a>
      </nav>
    );

    if (!Meteor.userId()) {
      return (
        <header>
          {navBtn}

          <div className="login-area">
            You need to{" "}
            <button onClick={this.props.showLoginForm}>Login</button> or{" "}
            <button onClick={this.props.showRegisterForm}>Register</button>
          </div>
        </header>
      );
    }
    return (
      <header>
        {navBtn}

        <div className="login-area">
          {usrName} <button onClick={this.logOut.bind(this)}>Log-out</button>
        </div>
      </header>
    );
  }
}
