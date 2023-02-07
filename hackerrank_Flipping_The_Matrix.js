function flippingMatrix(matrix) {
  let n = matrix.length / 2;
  let leng = matrix.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += Math.max(
        matrix[i][j],
        matrix[i][leng - 1 - j],
        matrix[leng - 1 - i][j],
        matrix[leng - 1 - i][leng - 1 - j]
      );
    }
  }
  return sum;
}

let input = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];
flippingMatrix(input);
