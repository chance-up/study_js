const _initArr = () => {
  let arr = Array.from({ length: 5 }, () => 0);
  let arr2 = new Array(100);
};

const stringToArr = () => {
  let arr = 'abcde'.split('');
  console.log(arr);
};
stringToArr();

const _t1 = () => {
  const arr = [4, 7, 12];
  return arr.reduce((acc, cur, idx) => {
    return acc + cur;
  }, 0);
};

const _t2 = () => {
  const map1 = new Map();
  map1.set('a', 1);
  map1.set('b', 2);
  map1.set('c', 3);
  map1.set('a', (map1.get('a') + 1) | 0);
  return map1;
};

const _t3 = () => {
  const arr = [1, 2, 3, 4, 6, 7, 8, 9, 0];
  arr.splice(3, 1, 10);
  return arr.slice(2, 4);
};

const _t4 = () => {
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  words.filter((word) => word.length > 6);
  Number.isInteger(Math.sqrt(n));
  Math.floor;
  Math.round;
  Math.ceil;
  const num = 1.55;
  num.toFixed(1);
};

const _t5 = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(Math.abs(-4));
  console.log(Math.min(...arr));
  console.log(Math.max(...arr));
  return arr.join('');
};

const _t6 = () => {
  let s = 'one4seveneight';
  s = s.replace('seven', 7);
  return s.replace(/one/g, 1);
};

const _t7 = () => {
  let s = 'one4seveneight';
  s = s.replace('seven', 7);
  return s.replace(/one/g, 1);
};