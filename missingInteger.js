function solution(A) {
  let result = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      result[A[i]] = true;
    }
  }

  for (let i = 1; i <= result.length; i++) {
    if (result[i] === undefined) {
      return i;
    }
  }

  return 1;
}

console.log(solution([1, 3, 6, 4, 1, 2, 7]));
