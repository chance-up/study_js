function sockMerchant(n, ar) {
  // Write your code here
  let m = new Map();

  //   m.set(10, 1);

  //   console.log(m.get(10));
  //   console.log(m.get(0) | 1);
  //   console.log(m.get(0));
  let cnt = 0;
  ar.forEach((el) => {
    if (!m.get(el)) {
      m.set(el, 0);
    }
    m.set(el, m.get(el) + 1);
    if (m.get(el) == 2) {
      m.set(el, 0);
      cnt++;
    }
    console.log(el, m.get(el));
  });
  console.log(cnt);
  return cnt;
}

const _n = 9;
const _ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

sockMerchant(_n, _ar);
