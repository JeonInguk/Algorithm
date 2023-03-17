function solution(n) {
  let arr = [];
  let answer = [];
  for (let i = 2; i <= 10000; i++) {
    arr.push(i);
  }
  let new_arr = arr.filter((item) => {
    for (let i = 2; i < item; i++) {
      if (item % i === 0) {
        return true;
      }
    }
  });
  for (let i = 0; i <= 10000; i++) {
    for (let t = 0; t <= 10000; t++) {
      if (arr[i] === new_arr[t]) {
        arr.splice(i, 1);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (n % arr[i] === 0) {
      answer.push(arr[i]);
    }
  }
  return answer;
}