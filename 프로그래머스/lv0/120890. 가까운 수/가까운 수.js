function solution(array, n) {
  let arr = [];
  let new_arr = [];
  array.sort((a, b) => a - b);
  array.map((item) => {
    arr.push(Math.abs(n - item));
    new_arr.push(Math.abs(n - item));
  });
  arr.sort((a, b) => a - b);
  let new_num = new_arr.findIndex((item) => item === arr[0]);
  return array[new_num];
}