import http from 'k6/http';

export let options = {
    vus: 5, // number of virtual users
    duration: '30s', // duration of the test
};

export default function () {
    http.get(`http://localhost:3000/factorial/10000`); // change the number to adjust the Fibonacci sequence's complexity
}