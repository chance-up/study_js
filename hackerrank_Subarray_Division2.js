function birthday(s, d, m) {
  const lastIdx = s.length - m;

  let curr = 0;
  let cnt = 0;
  for (let i = 0; i <= lastIdx; i++) {
    curr = 0;
    for (let j = 0; j < m; j++) {
      curr += s[i + j];
    }
    if (curr == d) {
      cnt++;
    }
  }

  return cnt;
}

const s = [2, 2, 1, 3, 2];
const d = 4;
const m = 2;

birthday(s, d, m);
