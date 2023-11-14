// Sequence of Events:
// 1) Timers -> 2) I/O events -> 3) setImmediate -> 4) Close events
// (Priority #1: nextTick, Priority #2: Promise)

const fs = require('fs');
const dns = require('dns');

function info(text) {
    console.log(text, performance.now().toFixed(2));
}

info('Program start');

//Close events
fs.writeFile('./test.txt', 'Some text for example', () => {
    info('File was written');
}); // close events **5

// Promises
Promise.resolve().then(() => info('Promise one')); // Promise **2

// Next Tick
process.nextTick(() => {
    info('Next tick 1');
}); // process.nextTick **1

// setImmediate (check)
setImmediate(() => info('Immediate 1')); // **4

//Timeouts
setTimeout(() => info('Timeout 1'), 0); // Timers events **3
setTimeout(() => {
    process.nextTick(() => info('Next tick 2')); // nextTick inside timer event **7
    info('Timeout 2'); // Timers events **6
}, 100);

// Intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
    info(`Interval ${(intervalCount += 1)}`);
    if (intervalCount === 2) clearInterval(intervalId);
}, 50);

// I/O events
dns.lookup('localhost', (err, address, family) => {
    info('DNS 1 localhost');
    Promise.resolve().then(() => info('Promise 2'));
    process.nextTick(() => info('Next tick 3'));
});

info('Program end');

// 1 iteration : Next tick 1, Promise 1
// 2 iteration: Timeout 1, Immediate, I/O (DNS), Next tick 3, Promise 2, Close (File was written)
// 3 iteration: Interval 1
// 4 iteration: Timeout, Next tick 2, Interval 2
