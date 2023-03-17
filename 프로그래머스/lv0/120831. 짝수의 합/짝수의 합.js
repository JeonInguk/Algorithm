function solution(n) {
  const result = [];
  for (i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result.reduce((sum, value) => (sum += value), 0);
}