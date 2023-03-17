function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if ((6 * i) % n === 0) {
      answer.push(i);
    }
  }
  return answer[0];
}