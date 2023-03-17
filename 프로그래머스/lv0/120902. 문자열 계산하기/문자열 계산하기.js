function solution(my_string) {
  let arr = my_string.split(" ", my_string.length);
  let answer = 1 * arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") {
      answer += 1 * arr[i + 1];
    } else if (arr[i] === "-") {
      answer -= 1 * arr[i + 1];
    }
  }
  return answer;
}