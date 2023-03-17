function solution(num) {
  let answer = num;
  let log = 0;
  for (let i = 0; answer !== 1; i++) {
    if (answer % 2 === 0) {
      answer /= 2;
      log += 1;
    } else {
      answer = answer * 3 + 1;
      log += 1;
    }
  }
  if (answer !== 1 || log >= 500) {
    log = -1;
  }
  return log;
}