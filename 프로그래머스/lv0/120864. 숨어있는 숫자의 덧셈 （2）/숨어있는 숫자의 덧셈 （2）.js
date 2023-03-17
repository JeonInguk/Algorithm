function solution(my_string) {
  let arr = [...my_string];
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      arr.splice(i, 1, "n");
    }
  }
  arr
    .join("")
    .split("n", my_string.length)
    .map((item) => {
      answer += 1 * item;
    });
  return answer;
}