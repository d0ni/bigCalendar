import React from "react";
import moment from "moment";

export default class Test extends React.Component {
  state = {
    month: moment()
  };

  render() {
    const { month } = this.state;

    return (
      <section>
        <h1>БРОНЬ</h1>
        <section className="header">
          <div className="room">Room</div>
          <section className="caledrar-wrapper">
            <div className="month">
              <button>left</button>
              <h2 className="curent-month">{moment(month).format("MMMM")}</h2>
              <button>right</button>
            </div>
          </section>
        </section>
      </section>
    );
  }
}
