function solution(array) {
  const uniqueNums = array.filter((item, position) => {
    return array.indexOf(item) === position;
  }).sort((a, b) => a - b);
  let counter_arr = [...uniqueNums].fill(0);
  for (let i = 0; i < uniqueNums.length; i++) {
    array.map((item) => {
      if (uniqueNums[i] === item) {
        counter_arr.splice(i, 1, counter_arr[i] + 1);
      }
    });
  }
  let arr = [...counter_arr].sort((a, b) => b - a);
  if (arr[0] === arr[1]) {
    return -1;
  } else {
    let check = counter_arr.findIndex((item) => item === arr[0]);
    return uniqueNums[check];
  }
}