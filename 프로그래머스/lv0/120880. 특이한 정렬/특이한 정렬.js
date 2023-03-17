function solution(numlist, n) {
  let arr = [];
  let new_arr = [];
  for (let i = 0; i < numlist.length; i++) {
    arr.push([Math.abs(n - numlist[i]), numlist[i]]);
  }
  arr.sort((a, b) => {
    if (a[0] - b[0] > 0) {
      return -1;
    } else if (a[0] === b[0] && a[1] - b[1] > 0) {
      return -1;
    }
  }).reverse();
  for (let i = 0; i <= 10000; i++) {
    for (let t = numlist.length - 1; t >= 0; t--) {
      if (i === arr[t][0]) {
        new_arr.push(arr[t][1]);
      }
    }
  }
  return new_arr;
}