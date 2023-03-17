function solution(num_list, n) {
  let answer = [];
  let first = 0;
  let second = 0;

  for (let i = 0; i <= num_list.length / n - 1; i++) {
    answer.push(num_list.slice(first, second + n));
    first += n;
    second += n;
  }
  return answer;
}