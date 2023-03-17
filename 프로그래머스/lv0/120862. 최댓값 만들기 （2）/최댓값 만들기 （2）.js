function solution(numbers) {
  let arr = [];
  let t = 0;
  for (let i = 0; i < numbers.length; i++) {
    t = i + 1;
    for (t; t < numbers.length; t++) {
      arr.push(numbers[i] * numbers[t]);
    }
  }
  return Math.max(...arr);
}