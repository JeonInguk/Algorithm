function solution(s) {
  let arr = [...s].sort();
  let new_arr = [];
  let new_new_arr;
  for (let i = 0; i < s.length; i++) {
    if (arr[i] === arr[i + 1]) {
      new_arr.push(arr[i]);
    }
  }
  new_new_arr = arr.filter((item) => !new_arr.includes(item));
  return new_new_arr.join("");
}