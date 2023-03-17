function solution(array) {
  let answer = 0;
  [...array.join("")].map((item) => {
    if (1 * item === 7) {
      answer += 1;
    }
  });
  return answer;
}