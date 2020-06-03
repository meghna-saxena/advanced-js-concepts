// ITERATIVE SOLUTION

function fib(n) {
  const result = [0, 1]; // const result = [1, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[result.length - 1];
    const b = result[result.length - 2];

    result.push(a + b);
  }
  console.log(result);
  return result[n];
}

// console.log(fib(19));

// RECURSIVE SOLUTION

function fibonacci(n) {
  if (n < 2) return n;

  return fibonacci(n - 1) + fib(n - 2);
}

console.log(fibonacci(19));
