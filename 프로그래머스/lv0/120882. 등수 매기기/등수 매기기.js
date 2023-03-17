function solution(score) {
  let arr = [];
  score.map((item) => {
    arr.push((item[0] + item[1]) / 2);
  });
  let new_arr = [...arr].sort((a, b) => b - a);
  let new_new_arr = [];
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (new_arr[i] === new_arr[i - 1]) {
      new_new_arr.push([new_arr[i], new_new_arr[i - 1][1]]);
    } else {
      new_new_arr.push([new_arr[i], i + 1]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let t = 0; t < arr.length; t++) {
      if (arr[i] === new_new_arr[t][0]) {
        arr.splice(i, 1, new_new_arr[t][1]);
        break;
      }
    }
  }
  return arr;
}