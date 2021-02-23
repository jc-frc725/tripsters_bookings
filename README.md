# Tripster Bookings
Welcome! This is the booking service for a property reservation app built using a service-oriented architecture, *similar* to AirBnB.
<p align="center">
<img src=https://i.imgur.com/MBSHjsm.png height="400px" width="470px" align="center">
</p>


## Summary
The work here was built upon an [existing legacy codebase.](https://github.com/thefabfour/booking-service) The codebase included a pre-built front-end UI.

Given this existing codebase, my objectives were to work on improving these qualities of its *back-end*:
* *Database query and retrieval speeds from API endpoints*
* *Scaling service to handle multiple client requests at once*
* *Handling spikes in client requests to service*
* **Target metrics:** *a latency of 2000ms, 100 requests-per-second, less than 1% error rate*

## Optimizations made
* Changed the service from a document-based (MongoDB) database to a relational SQL database (PostgreSQL), incorporating primary indexing for hastened record look-up times

* Generated 10M primary records (representing unique properties) and 20M secondary records (representing dates booked for a property)

* Deployed service onto an AWS EC2, then stress tested baseline using LoaderIO and New Relic
  * ### Single instance:
  ![alt text](https://i.imgur.com/i2h9m4d.png)

* Used NGINX as load balancer to 4 instances of service on EC2
  * ### 4 instances + load balancing:
  ![alt text](https://i.imgur.com/10U3z0w.png)
  

## Installation
1. Clone repository
  
    `git clone https://github.com/jc-frc725/tripsters_bookings.git`
2. Install dependencies

    `npm install`
3. Generate 10M primary database records

    `npm run properties`
4. Generate 20M secondary database records

    `npm run bookings`
5. Compile webpack bundle

    `npm run build:prod`
6. Serve static files

    `npm run start:prod`