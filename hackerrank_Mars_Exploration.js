function marsExploration(s) {
  let receivedSignal = s.split('');
  let expectedSignalNumber = s.length / 3;
  let expectedSignal = '';
  for (let i = 0; i < expectedSignalNumber; i++) {
    expectedSignal += 'SOS';
  }
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (receivedSignal[i] !== expectedSignal[i]) {
      cnt++;
    }
  }
  return cnt;
}

let input = 'SOSSOT';
marsExploration(input);
