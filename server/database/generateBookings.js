const path = require('path');
const fs = require('fs');
const faker = require('faker');
const moment = require('moment');
// const dateRanges = require('./dateRanges.js');

const destination = path.resolve(__dirname, 'seedData', 'bookings.csv');
const stream = fs.createWriteStream(destination);

stream.write('propertyId,startDate,endDate\n');
let propertyId = 1;
const bookingsPerProperty = 2;
const dateRanges = [
  {startMin: '02-12-2021', startMax:'02-20-2021', endMin: '02-25-2021', endMax: '03-07-2021'},
  {startMin: '03-08-2021', startMax:'03-15-2021', endMin: '03-18-2021', endMax: '04-08-2021'},
];

while (propertyId <= 10000000) {
  // NOTE: for now, each property will have a flat number of Bookings attached to it.
  // True randomization for generating a variable amount of Bookings (with dates possibly spanning 2 years) 
  // for every Property will be considered later.

  for (let i = 0; i < bookingsPerProperty; i += 1) {
    let start = moment(faker.date.between(dateRanges[i].startMin, dateRanges[i].startMax,)).format('MM-DD-YYYY');
    let end = moment(faker.date.between(dateRanges[i].endMin, dateRanges[i].endMax,)).format('MM-DD-YYYY');
    const entry = `${propertyId},${start},${end}\n`;
    stream.write(entry);
  }
  if (propertyId % 100000 === 0) {
    console.log(`progress: ${propertyId / 100000}%`);
  }
  propertyId += 1;
}

stream.end();