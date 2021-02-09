import http from 'k6/http';
// import { sleep } from 'k6';

export let options = {

  scenarios: {
    flat_requests_per_second: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      preAllocatedVUs: 130,
      maxVUs: 130,
      duration: '1m',
    },
  },

};

export default function () {
  http.get(`http://localhost:3001/?propertyId=${Math.floor(Math.random() * 10000000)}`);
}
