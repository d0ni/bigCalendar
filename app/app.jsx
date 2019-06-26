import React, { Component } from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";
import { Mongo } from "meteor/mongo";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Header from "./header.jsx";
import AccauntUI from "./accauntUI.jsx";

const localizer = momentLocalizer(moment);
EventsDB = new Mongo.Collection("events");

export default class App extends TrackerReact(Component) {
  constructor(...args) {
    super(...args);
    this.state = {
      subscription: {
        events: Meteor.subscribe("allEvents")
      },
      isPopup: false,
      popupType: 1
    };
  }

  addEvent = ({ start, end }) => {
    // const title = window.prompt("New Event name");
    const title = Meteor.user().username;
    const room = document.location.pathname;
    // if (title) {
    if (
      confirm(
        `Вы действительно хотите забронировать комнату на выбранное время?`
      )
    ) {
      Meteor.call("addEvent", title, start, end, room);
    }
  };

  removeEvent = event => {
    if (confirm(`Вы действительно хотите снять бронировку комнаты?`)) {
      Meteor.call("removeEvent", event);
    }
  };

  format = {
    timeGutterFormat: (date, culture, localizer) =>
      localizer.format(date, "HH:mm", culture),
    eventTimeRangeFormat: ({ start, end }, culture, local) =>
      local.format(start, "HH:mm", culture) +
      " — " +
      local.format(end, "HH:mm", culture),
    eventTimeRangeStartFormat: (date, culture, local) =>
      local.format(start, "HH:mm", culture) +
      " — " +
      local.format(end, "HH:mm", culture),
    eventTimeRangeEndFormat: (date, culture, localizer) =>
      localizer.format(date, "HH:mm", culture)
  };

  events() {
    const room = document.location.pathname;
    return EventsDB.find({ room }).fetch();
  }

  showLoginForm = () => {
    this.setState({ isPopup: !this.state.isPopup });
    this.setState({ popupType: 1 });
  };

  showRegisterForm = () => {
    this.setState({ isPopup: !this.state.isPopup });
    this.setState({ popupType: 2 });
  };

  closePopup = () => {
    this.setState({ isPopup: !this.state.isPopup });
  };

  render() {
    return (
      <div className="main-container">
        <AccauntUI
          statePopup={this.state.isPopup}
          typePopup={this.state.popupType}
          closePopup={this.closePopup}
        />
        <div className="calendar-container">
          <Header
            showLoginForm={this.showLoginForm}
            showRegisterForm={this.showRegisterForm}
          />
          <p />
          <Calendar
            step={60}
            timeslots={1}
            defaultView="week"
            views={["week"]}
            selectable={!this.state.isPopup}
            localizer={localizer}
            events={this.events()}
            startAccessor="start"
            endAccessor="end"
            formats={this.format}
            onSelectSlot={this.addEvent}
            onSelectEvent={this.removeEvent}
          />
        </div>
      </div>
    );
  }
}
