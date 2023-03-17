function solution(s1, s2) {
  let answer = 0;
  s1.map((item1) => {
    s2.map((item2) => {
      if (item1 === item2) {
        answer += 1;
      }
    });
  });
  return answer;
}