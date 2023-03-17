function solution(n) {
  let answer = 1;
  let answer2;
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    answer *= i;
    arr.push([i, answer]);
  }
  for (let i = 0; i <= 9; i++) {
    if (arr[i][1] > n) {
      answer2 = arr[i - 1][0];
      break;
    } else if (arr[i][1] === n) {
      answer2 = arr[i][0];
    }
  }
  return answer2;
}