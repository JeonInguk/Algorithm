function solution(array) {
  let answer = [];
  let new_array = [...array];
  let middle = array.sort((a, b) => a - b);
  answer.push(middle[middle.length - 1]);
  answer.push(new_array.findIndex((item) => item === answer[0]));
  return answer;
}