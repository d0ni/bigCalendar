import { Meteor } from "meteor/meteor";

EventsDB = new Mongo.Collection("events");

Meteor.publish("allEvents", function() {
  return EventsDB.find({});
});

Meteor.methods({
  addEvent(title, start, end, room) {
    // if (!Meteor.userId()) {
    //   throw new Meteor.Error("not-authorized");
    // }

    EventsDB.insert({
      title,
      start,
      end,
      room,
      user: Meteor.userId()
    });
  },

  removeEvent(event) {
    EventsDB.remove(event._id);
  }
});

Meteor.startup(() => {
  // code to run on server at startup
});
