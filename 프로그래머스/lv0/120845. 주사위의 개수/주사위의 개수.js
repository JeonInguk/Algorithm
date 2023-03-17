function solution(box, n) {
  let answer = 1;
  box.map((edge) => {
    answer *= Math.trunc(edge / n);
  });
  return answer;
}