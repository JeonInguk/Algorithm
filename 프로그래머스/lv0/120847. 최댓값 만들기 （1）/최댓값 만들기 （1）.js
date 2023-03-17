function solution(numbers) {
  const middle = numbers.sort((a, b) => a - b);
  const answer = middle[middle.length - 1] * middle[middle.length - 2];
  return answer;
}