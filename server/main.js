import { Meteor } from "meteor/meteor";

EventsDB = new Mongo.Collection("events");

Meteor.publish("allEvents", function() {
  return EventsDB.find({});
});

Meteor.methods({
  addEvent(title, start, end, room) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    EventsDB.insert({
      title,
      start,
      end,
      room,
      user: Meteor.userId()
    });
  },

  removeEvent(event) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    if (Meteor.userId() == event.user) {
      EventsDB.remove(event._id);
    } else {
      throw new Meteor.Error("not-valid-user");
    }
  }
});

Meteor.startup(() => {
  // code to run on server at startup
});
