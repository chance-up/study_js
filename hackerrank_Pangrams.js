function pangrams(s) {
  let m = new Map();
  for (let i = 0; i < s.length; i++) {
    m.set(s[i].toLowerCase(), true);
  }

  for (let i = 97; i < 123; i++) {
    if (m.get(String.fromCharCode(i)) !== true) {
      return 'not pangram';
    }
  }
  return 'pangram';
}

let input = 'We promptly judged antique ivory buckles for the next prize';
pangrams(input);
