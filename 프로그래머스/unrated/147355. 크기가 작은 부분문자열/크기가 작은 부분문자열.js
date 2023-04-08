function solution(t, p) {
  const split_arr = t.split('');
  let arr = [];
  const new_arr = [];
  let answer = 0;
  for (let i = 0; i < split_arr.length; i++) {
    arr = [];
    for (let k = i; k < p.length + i; k++) {
      arr.push(split_arr[k]);
    }
    new_arr.push(arr.join(''));
  }
  for (let i = 0; i < new_arr.length; i++) {
    if (new_arr[i].length === p.length && Number(new_arr[i]) <= Number(p)) {
      answer += 1;
    }
  }
  return answer;
}