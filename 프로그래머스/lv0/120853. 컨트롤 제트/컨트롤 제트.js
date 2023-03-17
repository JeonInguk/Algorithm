function solution(s) {
  let answer = 0;
  let arr = s.split(" ", s.length);
  for (let i = 0; i < s.length; i++) {
    if (arr[i] === "Z") {
      arr.splice(i, 1, -arr[i - 1]);
    }
  }
  arr.map((item) => {
    answer += 1 * item;
  });
  return answer;
}