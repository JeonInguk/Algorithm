function solution(n) {
  return Math.trunc(Math.sqrt(n)) < Math.sqrt(n) ? 2 : 1;
}