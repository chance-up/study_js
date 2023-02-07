const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);

        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

const checkAllSumOver = (k, A, B) => {
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return false;
    }
  }
  return true;
};
function twoArrays(k, A, B) {
  const aPerm = permutator(A);
  const bPerm = permutator(B);

  for (let i = 0; i < aPerm.length; i++) {
    for (let j = 0; j < bPerm.length; j++) {
      if (checkAllSumOver(k, aPerm[i], bPerm[j]) == true) {
        return 'YES';
      }
    }
  }

  return 'NO';
}

const a = [2, 1, 3];
const b = [7, 8, 9];
const k = 10;

console.log(twoArrays(k, a, b));
