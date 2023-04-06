function solution(number) {
  let count = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let t = i; t < number.length - 1; t++) {
      for (let k = t; k < number.length; k++) {
        if (number[i] + number[t] + number[k] === 0 && i !== t && t !== k && i !== k) {
          console.log(number[i], number[t], number[k]);
          count += 1;
        }
      }
    }
  }
  return count;
}