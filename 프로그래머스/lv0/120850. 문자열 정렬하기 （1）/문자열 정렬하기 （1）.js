function solution(my_string) {
  let answer = [];
  [...my_string].map((string) => {
    if (!Number(string) === false) {
      answer.push(Number(string));
    } else if (Number(string) === 0) {
      answer.push(Number(string));
    }
  });
  return answer.sort((a, b) => a - b);
}