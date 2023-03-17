function solution(numbers, direction) {
  let answer = [...numbers];
  if (direction === "right") {
    answer.unshift(answer[answer.length - 1]);
    answer.splice(answer.length - 1, 1);
  } else {
    answer.push(answer[0]);
    answer.splice(0, 1);
  }
  return answer;
}