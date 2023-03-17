function solution(sides) {
  const middle = sides.sort((a, b) => a - b);
  const answer = middle[2] < middle[0] + middle[1] ? 1 : 2;
  return answer;
}