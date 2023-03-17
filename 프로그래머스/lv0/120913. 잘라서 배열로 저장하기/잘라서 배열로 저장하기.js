function solution(my_str, n) {
  let arr = [...my_str];
  let new_arr = [];
  let answer = [];
  for (let i = 0; i < my_str.length / n; i++) {
    new_arr.push(arr.splice(0, n));
  }
  for (let i = 0; i < new_arr.length; i++) {
    answer.push(new_arr[i].join(""));
  }
  return answer;
}