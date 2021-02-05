const path = require('path');
const fs = require('fs');
const faker = require('faker');
const moment = require('moment');

const destination = path.resolve(__dirname, 'seedData', 'bookingsTest.csv');
// make a writeStream to seedData, name file bookings.csv
const stream = fs.createWriteStream(destination);

// csv format:
stream.write('bookingId,propertyId,start,end\n');
let propertyId = 1;
let bookingId = 1;
const bookingsPerProperty = 4;
const dateRanges = [
  {startMin: '02-10-2021', startMax:'02-20-2021', endMin: '02-22-2021', endMax: '03-05-2021'},
  {startMin: '03-08-2021', startMax:'03-15-2021', endMin: '03-18-2021', endMax: '04-03-2021'},
  {startMin: '04-10-2021', startMax:'04-19-2021', endMin: '04-23-2021', endMax: '04-30-2021'},
  {startMin: '05-02-2021', startMax:'05-05-2021', endMin: '05-10-2021', endMax: '05-20-2021'},
];

// 10M primary records
while (propertyId <= 1000) {
  // NOTE: for now, each property will have a flat number of Bookings attached to it.
  // True randomization for generating a variable amount of Bookings to each Property will be considered later.
  
  for (let i = 0; i < bookingsPerProperty; i += 1) {
    let start = moment(faker.date.between(dateRanges[i].startMin, dateRanges[i].startMax,)).format('MM-DD-YYYY');
    let end = moment(faker.date.between(dateRanges[i].endMin, dateRanges[i].endMax,)).format('MM-DD-YYYY');

    const entry = `${bookingId},${propertyId},${start},${end}\n`;
    stream.write(entry);
    bookingId += 1;
  }
  propertyId += 1;
}

stream.end();
