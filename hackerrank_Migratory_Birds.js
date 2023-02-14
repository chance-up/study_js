function migratoryBirds(arr) {
  let m = new Map();
  let maxIdCnt = 0;
  let maxId = 0;

  arr.forEach((el) => {
    if (!m.get(el)) {
      m.set(el, 0);
    }
    m.set(el, m.get(el) + 1);

    let currIdCnt = m.get(el);
    if (maxIdCnt < currIdCnt) {
      maxIdCnt = currIdCnt;
      maxId = el;
    } else if (maxIdCnt === currIdCnt) {
      if (el <= maxId) {
        maxId = el;
      }
    }
  });
  return maxId;
}

const _arr = [1, 1, 2, 2, 3];

migratoryBirds(_arr);
