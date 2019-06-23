import { Meteor } from "meteor/meteor";

EventsDB = new Mongo.Collection("events");

Meteor.publish("allEvents", function() {
  return EventsDB.find({});
});

Meteor.methods({
  addEvent(title, start, end) {
    // if (!Meteor.userId()) {
    //   throw new Meteor.Error("not-authorized");
    // }

    EventsDB.insert({
      title: title,
      start: start,
      end: end
      // createdAt: new Date(),
      // user: Meteor.userId()
    });
  },

  removeEvent(event) {
    // if (Meteor.userId() !== resolution.user) {
    //   throw new Meteor.Error("wrong-user");
    // }

    EventsDB.remove(event._id);
  }
});

Meteor.startup(() => {
  // code to run on server at startup
});
