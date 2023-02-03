'use strict';
function countingSort(arr) {
  let cntSortArr = Array.from({ length: 100 }, () => 0);

  console.log(cntSortArr.length);
  arr.forEach((element) => {
    cntSortArr[element]++;
  });
  return cntSortArr;
}

let input = [1, 1, 1, 2, 3];

console.log(countingSort(input));
