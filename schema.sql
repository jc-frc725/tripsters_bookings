/*DROP DATABASE IF EXISTS bookingSerivce;
CREATE DATABASE IF NOT EXISTS bookingService;*/

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


