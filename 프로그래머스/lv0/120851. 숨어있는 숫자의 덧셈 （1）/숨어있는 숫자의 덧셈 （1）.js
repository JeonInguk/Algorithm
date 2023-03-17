function solution(my_string) {
  let answer = 0;
  [...my_string].map((number) => {
    if (!!Number(number)) {
      answer += Number(number);
    }
  });
  return answer;
}