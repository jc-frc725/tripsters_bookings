# Tripster Bookings
Welcome! This is the booking service for a property reservation app built using a service-oriented architecture, *similar* to AirBnB.
<p align="center">
<img src=https://i.imgur.com/MBSHjsm.png height="400px" width="470px" align="center">
</p>

## Summary
The work here was built upon an [existing legacy codebase.](https://github.com/thefabfour/booking-service) The codebase included a pre-built front-end UI.

I prepared this property reservation app for production-level traffic which would allow it to handle as many users as I want before crashing.

Ultimately, this would **improve load speeds** and create a **smoother user experience, increasing user retention** for the app.

To reach my objective of upgrading this app, I implemented improvements to these qualities of the *back-end*:
* *Decrease database query and retrieval speeds from API endpoints*
* *Scaling service to handle multiple client requests at once*
* *Handling spikes in client requests to service*
* **Reach these target metrics:** 
  * keep response between requests (latency) below 2000ms
  * be able to serve 100 requests-per-second
  * keep error rate below 1%

### Results after optimizations (details in block below):
* #### On a single t2.micro EC2 instance, a LoaderIO/New Relic stress test yielded these results:
  * Latency: ~2400 ms
  * Throughput: peaked at 22.6k RPS, averaging 337 RPS
  * Error rate: <1%
* #### On 4 t2.micro EC2 instances, a LoaderIO/New Relic stress test yielded these results:
  * Latency: approx. 1.5 - 3 ms
  * Throughput: peaked at 47.6k RPS, averaging 2k RPS
  * Error rate: <1%

## Optimizations made before tests
* Changed the service from a document-based (MongoDB) database to a relational SQL database (PostgreSQL), incorporating primary indexing for hastened record look-up times.

* Removed unnecessary operations in server index files, eliminating blockers in asynchronous cod execution.

* Generated 10M primary records (representing unique properties) and 20M secondary records (representing dates booked for a property).

* Deployed service onto an AWS EC2, then stress tested baseline using LoaderIO and New Relic.
  * ### Single instance:
  ![alt text](https://i.imgur.com/i2h9m4d.png)

* Used NGINX as a load balancer to 4 service nodes on EC2. Stress tested again.
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
7. Navigate to [localhost:3001](https:localhost:3001)
