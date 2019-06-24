import React, { Component } from "react";

export default class AccountUI extends Component {
  closePopup() {
    props.showPopup = false;
  }
  render() {
    if (this.props.showPopup) {
      return (
        <div className="b-popup" onClick={this.closePopup}>
          <div className="b-popup-content">Text in Popup</div>
        </div>
      );
    }
    return null;
  }
}
