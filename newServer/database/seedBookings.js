const path = require('path');
const fs = require('fs');
const faker = require('faker');
const moment = requir('moment');

const destination = path.resolve(__dirname, 'seedData', 'bookings.csv');
// make a writeStream to seedData, name file properties.csv
const stream = fs.createWriteStream(destination);

// csv format:
stream.write('bookingId,propertyId\n');
let propertyId = 1;
let bookings;
// make 10M historical records
while (propertyId <= 10000000) {
  // random generation
  bookings = Math.floor(Math.random() * 7);

  const entry = `${price},${cleaning},${avg},${totalRev}\n`;
  stream.write(entry);
  propertyId += 1;
}

stream.end();
