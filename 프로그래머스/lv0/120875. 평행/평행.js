function solution(dots) {
  let answer = 0;
  let first_array = [];
  let second_array = [];
  let third_array = [];
  first_array.push(
    (dots[1][0] - dots[0][0]) / (dots[1][1] - dots[0][1]),
    (dots[3][0] - dots[2][0]) / (dots[3][1] - dots[2][1])
  );
  second_array.push(
    (dots[2][0] - dots[0][0]) / (dots[2][1] - dots[0][1]),
    (dots[3][0] - dots[1][0]) / (dots[3][1] - dots[1][1])
  );
  third_array.push(
    (dots[3][0] - dots[0][0]) / (dots[3][1] - dots[0][1]),
    (dots[2][0] - dots[1][0]) / (dots[2][1] - dots[1][1])
  );
  if (first_array[0] === first_array[1]) {
    answer += 1;
  } else if (second_array[0] === second_array[1]) {
    answer += 1;
  } else if (third_array[0] === third_array[1]) {
    answer += 1;
  }
  return answer;
}