function info(text) {
    console.log(text, performance.now().toFixed(2));
}

info('Program start');

setTimeout(() => console.log('Timeout'), 0);

// index 0 1 2 3 4 5 6 7  8  9  10
// value 0 1 1 2 3 5 8 13 21 34 55
const cache = new Map();

function fib(n) {
    return new Promise((resolve, reject) => {
        if (n === 0 || n === 1) {
            return resolve(n);
        }
        if (cache.has(n)) {
            return resolve(cache.get(n)); // return value of fibonacci number
        }
        setImmediate(() =>
            fib(n - 1).then((fib1) =>
                fib(n - 2).then((fib2) => {
                    cache.set(n, fib1 + fib2);
                    resolve(fib1 + fib2);
                })
            )
        );
    });
}

fib(200).then((res) => console.log(res));

info('Program end');
