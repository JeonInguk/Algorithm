function solution(before, after) {
  let answer = 1;
  let before_arr = [...before].sort();
  let after_arr = [...after].sort();
  for (let i = 0; i < before.length; i++) {
    if (before_arr[i] !== after_arr[i]) {
      answer = 0;
    }
  }
  return answer;
}