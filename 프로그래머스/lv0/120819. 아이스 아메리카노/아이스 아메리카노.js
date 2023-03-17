function solution(money) {
  coffeNumber = Math.trunc(money / 5500);
  const answer = [coffeNumber, money - coffeNumber * 5500];
  return answer;
}