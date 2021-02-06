DROP DATABASE IF EXISTS bookingSerivce;
CREATE DATABASE bookingService;

\c bookingservice;

CREATE TABLE properties (
  propertyId serial PRIMARY KEY,
  price smallint NOT NULL,
  cleaning smallint NOT NULL,
  avg numeric(3, 2) NOT NULL,
  totalRev smallint NOT NULL
);

CREATE TABLE bookings (
  bookingId serial PRIMARY KEY,
  propertyId integer REFERENCES properties,
  startDate date,
  endDate date
);

COPY properties(price, cleaning, avg, totalRev)
FROM '/home/jchow/hackreactor/sdc/sdc_root/Airbnb-Booking-Service/newServer/database/seedData/properties.csv'
DELIMITER ','
CSV HEADER;

COPY bookings(propertyId, startDate, endDate)
FROM '/home/jchow/hackreactor/sdc/sdc_root/Airbnb-Booking-Service/newServer/database/seedData/bookings.csv'
DELIMITER ','
CSV HEADER;
