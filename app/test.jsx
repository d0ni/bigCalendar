import React, { Component } from "react";
import moment from "moment";

import DayTimes from "./dayTimes.jsx";

require("moment/locale/ru");

export default class Test extends Component {
  state = {
    month: moment()
  };

  weekBack() {
    this.setState({ month: moment(this.state.month).add(-7, "days") });
  }

  weekNext() {
    this.setState({ month: moment(this.state.month).add(7, "days") });
  }

  render() {
    const { month } = this.state;

    const dayShift = parseInt(moment(month).format("d"));

    return (
      <div>
        <h1>Бронирование переговорок</h1>
        <div className="header">
          <div className="room">Комната</div>
          <div className="caledrar-wrapper">
            <div className="month">
              <button
                className="bnt-change-date"
                onClick={this.weekBack.bind(this)}
              >
                left
              </button>
              <h2 className="curent-month">{moment(month).format("MMMM")}</h2>
              <button
                className="bnt-change-date"
                onClick={this.weekNext.bind(this)}
              >
                right
              </button>
            </div>
            <div className="week-days">
              <div className="days">
                {moment(month)
                  .add(1 - dayShift, "days")
                  .format("DD dddd")}
              </div>
              <div className="days">
                {moment(month)
                  .add(2 - dayShift, "days")
                  .format("DD dddd")}
              </div>
              <div className="days">
                {moment(month)
                  .add(3 - dayShift, "days")
                  .format("DD dddd")}
              </div>
              <div className="days">
                {moment(month)
                  .add(4 - dayShift, "days")
                  .format("DD dddd")}
              </div>
              <div className="days">
                {moment(month)
                  .add(5 - dayShift, "days")
                  .format("DD dddd")}
              </div>
            </div>
          </div>
          <div className="green-room">
            <div className="room-name">
              <h3>Зеленая</h3>
              <h3>(до 5 персон)</h3>
            </div>
            <DayTimes />
            <DayTimes />
            <DayTimes />
            <DayTimes />
            <DayTimes />
          </div>
        </div>
      </div>
    );
  }
}
