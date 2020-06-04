/* -----------------------------------------------
 ITERATIVE SOLUTION
----------------------------------------------- */
function fibonacci(num) {
  const result = [0, 1]; // [1, 1]

  for (let i = 2; i <= num; i++) {
    const last = result[result.length - 1];
    const secondLast = result[result.length - 2];

    result.push(last + secondLast);
  }
  //   console.log(result);
  return result[num];
}

console.log(fibonacci(6)); // 8

/* -----------------------------------------------
 RECURSIVE SOLUTION
----------------------------------------------- */
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(6));

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

fib = memoize(fib);

console.log(fib(6));
