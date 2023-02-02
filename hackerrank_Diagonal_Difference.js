'use strict';

function diagonalDifference(arr) {
  let size = arr.length;
  let a = 0;
  let b = 0;
  arr.forEach((e, idx) => {
    a += e[idx];
    b += e[size - 1 - idx];
  });

  return a >= b ? a - b : b - a;
}

let input = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(input));
