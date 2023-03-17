function solution(num, k) {
  let answer = 0;
  let num_array = [...num.toString()];
  if (num_array.findIndex((item) => item === k.toString()) !== -1) {
    answer = num_array.findIndex((item) => item === k.toString()) + 1;
  } else {
    answer = -1;
  }
  return answer;
}