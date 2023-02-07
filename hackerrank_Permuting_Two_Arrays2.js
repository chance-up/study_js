function twoArrays(k, A, B) {
  const a = A.sort((a, b) => a - b);
  const b = B.sort((a, b) => b - a);
  for (let i = 0; i < a.length; i++) {
    if (a[i] + b[i] < k) {
      console.log(`a : ${a} , b : ${b}, a+b : ${a[i] + b[i]} k : ${k}`);
      return 'NO';
    }
  }
  return 'YES';
}

const a = [23, 19, 30, 22, 2, 21, 1, 32, 13, 5, 31, 16, 28, 34, 14, 9, 1, 25, 1, 14, 5, 31, 22, 10, 26];
const b = [19, 29, 25, 8, 6, 10, 15, 1, 28, 11, 3, 1, 2, 21, 6, 18, 17, 4, 1, 35, 28, 27, 1, 15, 17];
const k = 36;

console.log(twoArrays(k, a, b));
