import React, { Component } from "react";

export default class DayTimes extends Component {
  render() {
    return (
      <div className="day-times">
        <p>
          <button className="btn-time">9:00</button>
          <button className="btn-time">14:00</button>
        </p>
        <p>
          <button className="btn-time">10:00</button>
          <button className="btn-time">15:00</button>
        </p>
        <p>
          <button className="btn-time">11:00</button>
          <button className="btn-time">16:00</button>
        </p>
        <p>
          <button className="btn-time">12:00</button>
          <button className="btn-time">17:00</button>
        </p>
        <p>
          <button className="btn-time">13:00</button>
          <button className="btn-time">18:00</button>
        </p>
      </div>
    );
  }
}
