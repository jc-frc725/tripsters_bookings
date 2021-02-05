const path = require('path');
const fs = require('fs');
const faker = require('faker');

const destination = path.resolve(__dirname, 'seedData', 'propertiesTest.csv');
// make a writeStream to seedData, name file properties.csv
const stream = fs.createWriteStream(destination);

// csv format:
stream.write('propertyId,price,cleaning,avg,totalRev\n');
let propertyId = 1;

// make 10M historical records
while (propertyId <= 1000) {
  // random generation
  const price = faker.random.number({ min: 100, max: 300 });
  const cleaning = Math.floor(faker.random.number({ min: 100, max: 250 }) * 0.12);
  const avg = faker.random.float({ min: 2, max: 5 });
  const totalRev = faker.random.number({ min: 40, max: 250 });
  // row example: '250,150,3.41,50'
  const entry = `${price},${cleaning},${avg},${totalRev}\n`;
  stream.write(entry);
  propertyId += 1;
}

stream.end();
