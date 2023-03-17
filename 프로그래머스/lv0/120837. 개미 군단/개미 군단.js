function solution(hp) {
  let answer = 0;
  if (hp < 3) {
    answer += hp;
  } else if (3 <= hp && hp < 5) {
    answer += Math.trunc(hp / 3) + Math.trunc(hp % 3);
  } else if (5 <= hp && hp % 5 < 3) {
    answer += Math.trunc(hp / 5) + Math.trunc(hp % 5);
  } else if (5 <= hp && hp % 5 >= 3) {
    answer +=
      Math.trunc(hp / 5) + Math.trunc((hp % 5) / 3) + Math.trunc((hp % 5) % 3);
  }
  return answer;
}
