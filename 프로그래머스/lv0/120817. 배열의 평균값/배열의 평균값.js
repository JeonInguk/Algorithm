function solution(numbers) {
  result = numbers.reduce((sum, value) => (sum += value));
  return result / numbers.length;
}
