function solution(n) {
  let answer = 0;
  [...n.toString()].map((number) => {
    answer += Number(number);
  });
  return answer;
}