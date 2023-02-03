'use strict';
function countingValleys(path) {
  let level = 0;
  let cnt = 0;
  let arr = path.split('');
  let enterValley = false;

  arr.forEach((e) => {
    if (e === 'U') {
      level++;
    } else {
      level--;
    }
    if (level === -1) {
      enterValley = true;
    }
    if (level === 0 && enterValley === true) {
      enterValley = false;
      cnt++;
    }
  });

  return cnt;
}

let input = 'UDDDUDUU';

console.log(countingValleys(input));
