const path = require('path');
const fs = require('fs');
const faker = require('faker');

const destination = path.resolve(__dirname, 'seedData', 'properties.csv');
const stream = fs.createWriteStream(destination);

stream.write('price,cleaning,avg,totalRev\n');
let propertyId = 1;

while (propertyId <= 10000000) {
  const price = faker.random.number({ min: 100, max: 300 });
  const cleaning = Math.floor(faker.random.number({ min: 100, max: 250 }) * 0.12);
  const avg = faker.random.float({ min: 2, max: 5 });
  const totalRev = faker.random.number({ min: 40, max: 250 });
  const entry = `${price},${cleaning},${avg},${totalRev}\n`;
  stream.write(entry);
  if (propertyId % 100000 === 0) {
    console.log(`progress: ${propertyId / 100000}%`);
  }
  propertyId += 1;
}

stream.end();
