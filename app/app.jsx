import React, { Component } from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";
import { Mongo } from "meteor/mongo";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
EventsDB = new Mongo.Collection("events");

export default class App extends TrackerReact(Component) {
  constructor(...args) {
    super(...args);
    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("allEvents")
      }
    };
  }

  addEvent = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) {
      Meteor.call("addEvent", title, start, end);
    }
  };

  removeEvent = event => {
    if (confirm(`Вы действительно хотите удалить задание "${event.title}"?`)) {
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
    return EventsDB.find().fetch();
  }

  render() {
    return (
      <div>
        <Calendar
          step={60}
          timeslots={1}
          defaultView="week"
          views={["week"]}
          selectable={true}
          localizer={localizer}
          events={this.events()}
          startAccessor="start"
          endAccessor="end"
          formats={this.format}
          onSelectSlot={this.addEvent}
          onSelectEvent={this.removeEvent}
        />
      </div>
    );
  }
}
