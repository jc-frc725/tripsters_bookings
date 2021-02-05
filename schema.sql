DROP DATABASE IF EXISTS Bookings;
CREATE DATABASE Bookings;

USE Booking;

CREATE TABLE properties (
  propertyId serial PRIMARY KEY,
  price smallint NOT NULL,
  cleaning smallint NOT NULL,
  avg numeric(3, 2) NOT NULL,
  totalRev smallint NOT NULL,
);

CREATE TABLE bookings (
  bookingId serial PRIMARY KEY,
  propertyId integer REFERENCES properties,
);

CREATE TABLE dates (
  bookingId serial REFERENCES bookings,
  start date,
  end date,
)

