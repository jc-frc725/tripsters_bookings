const { Schema, model } = require('mongoose');

const bookingSchema = new Schema({
  propertyId: String,
  
  guest: { // not actually rendered in front end
    adults: Number,
    children: Number,
    infants: Number,
  },
  date: {
    start: String,
    end: String,
  },
});

const Booking = model('Booking', bookingSchema);

module.exports = Booking;
