function solution(arr) {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== new_arr[new_arr.length - 1]) {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
}