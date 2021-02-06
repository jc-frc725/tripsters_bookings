const path = require('path');
const fs = require('fs');
const faker = require('faker');
const moment = require('moment');
const dateRanges = require('./dateRanges.js');

const destination = path.resolve(__dirname, 'seedData', 'bookingsTest.csv');
const stream = fs.createWriteStream(destination);

stream.write('propertyId,startDate,endDate\n');
let propertyId = 1;
const bookingsPerProperty = 4;

while (propertyId <= 1000) {
  // NOTE: for now, each property will have a flat number of Bookings attached to it.
  // True randomization for generating a variable amount of Bookings (with dates possibly spanning 2 years) 
  // for every Property will be considered later.

  for (let i = 0; i < bookingsPerProperty; i += 1) {
    let start = moment(faker.date.between(dateRanges[i].startMin, dateRanges[i].startMax,)).format('MM-DD-YYYY');
    let end = moment(faker.date.between(dateRanges[i].endMin, dateRanges[i].endMax,)).format('MM-DD-YYYY');
    const entry = `${propertyId},${start},${end}\n`;
    stream.write(entry);
  }
  propertyId += 1;
}

stream.end();
