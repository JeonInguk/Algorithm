function solution(emergency) {
  let arr = [...emergency];
  let answer = emergency.sort((a, b) => a - b).reverse();
  for (let i = 0; i < emergency.length; i++) {
    let num = answer.indexOf(arr[i]) + 1;
    arr.splice(i, 1, num);
  }
  return arr;
}