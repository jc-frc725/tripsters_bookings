import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

const random = () => {
  return (Math.floor(Math.random() * 10000000));
}

export default function () {
  var url = `http://localhost:3001/?propertyId=${random()}/booking`;
  var params = {};
  check(http.get(url, params), {
    'status is 200': (r) => r.status === 200,
  }) || errorRate.add(1);
  sleep(0);
}

// export let options = {

//   scenarios: {
//     flat_requests_per_second: {
//       executor: 'constant-arrival-rate',
//       rate: 10,
//       timeUnit: '1s',
//       preAllocatedVUs: 100,
//       maxVUs: 200,
//       duration: '1m',
//     },
//   },

// };

// export default function () {
//   http.get(`http://localhost:3001/?propertyId=${Math.floor(Math.random() * 10000000)}/booking`);
//   sleep(0.1);
// }
